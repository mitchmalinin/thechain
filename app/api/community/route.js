import { EmailTemplate } from "@/app/components/emailTemplate";
import { NotifyAdminEmail } from "@/app/components/notifyAdminEmail";
import { supabase } from "@/app/utils/supabaseClient";
import { getToken } from "next-auth/jwt";
import { Resend } from "resend";

const RESEND = new Resend(process.env.RESEND_API_KEY);

const notifyApplicantEmail = async (toEmail, firstName) => {
    const SUBJECT = "The Chain Miami - Application Received";
    const FROM_EMAIL = "Monica <hello@thechain.miami>";

    try {
        await RESEND.emails.send({
            from: FROM_EMAIL,
            to: [toEmail],
            subject: SUBJECT,
            react: EmailTemplate({ firstName: firstName }),
        });
    } catch (err) {
        console.log(err);
    }
};

const notifyAdminEmail = async (firstName) => {
    const SUBJECT = "The Chain Miami - New Applicant";
    const FROM_EMAIL = "Notifications <hello@thechain.miami>";

    try {
        await RESEND.emails.send({
            from: FROM_EMAIL,
            to: ["monica@thechain.miami", "hello@thechain.miami"],
            subject: SUBJECT,
            react: NotifyAdminEmail({
                firstName: firstName,
            }),
        });
    } catch (err) {
        console.log(err);
    }
};

export async function POST(request) {
    try {
        const json = await request.json();

        // Check if the user already exists
        const { data: existingUser, error: userError } = await supabase
            .from("users")
            .select("id")
            .or(
                `wallet_address.eq.${json.wallet_address},email.eq.${json.email}`,
            )
            .maybeSingle();

        if (userError && userError.message !== "No rows found") {
            throw userError;
        }

        if (existingUser) {
            // User already exists
            return new Response(
                "A member with this email or wallet address already submitted.",
                {
                    status: 422,
                    headers: { "Content-Type": "application/json" },
                },
            );
        }

        // TODO: add type check
        let { error } = await supabase.from("users").insert([json]);

        if (error) throw error;

        await notifyApplicantEmail(json.email, json.name);
        await notifyAdminEmail(json.name);

        return new Response({
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        return new Response("Something went wrong. Please try again later.", {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function GET(request) {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req: request, secret });
    const url = new URL(request.url);
    const search = url.searchParams.get("search");
    const filter = url.searchParams.get("filter");

    if (!token || !token.isMember) {
        return new Response(null, {
            status: 403,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        let query = supabase.from("users").select("*");

        if (search) {
            query = query.ilike("name", `%${search}%`);
        }

        console.log("filter", filter);

        if (filter) {
            if (filter === "accepted") {
                query = query.eq("is_accepted", true);
            }
            if (filter === "not_accepted") {
                query = query.eq("is_accepted", false);
            }
        }

        const { data: members, error } = await query;

        if (error) throw error;

        return new Response(JSON.stringify(members), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        return new Response(err.message || "Something went wrong.", {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
