import { NotifyOnAcceptance } from "@/app/components/emailTemplates/notifyOnAcceptance";

import { getToken } from "next-auth/jwt";
import { Resend } from "resend";
const RESEND = new Resend(process.env.RESEND_API_KEY);
const secret = process.env.NEXTAUTH_SECRET;

export async function POST(request) {
    const { name, email } = await request.json();
    const token = await getToken({ req: request, secret });

    const SUBJECT = " Your Membership for The Chain Miami has been Approved!";
    const FROM_EMAIL = "Monica <hello@thechain.miami>";

    if (!token.isAdmin) {
        return new Response("Not authorized", {
            status: 403,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        await RESEND.emails.send({
            from: FROM_EMAIL,
            to: [email],
            subject: SUBJECT,
            react: NotifyOnAcceptance({ name: name }),
        });

        return new Response("Acceptance email sent successfully.", {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        return new Response("Failed to send acceptance email.", {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
