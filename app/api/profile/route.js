import { supabase } from "@/app/utils/supabaseClient";
import { getToken } from "next-auth/jwt";

export async function GET(request) {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req: request, secret });

    if (!token || !token.isMember) {
        return new Response(null, {
            status: 403,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const { data: user, error } = await supabase
            .from("users")
            .select("*")
            .eq("wallet_address", token.id)
            .single();

        if (error) throw error;

        return new Response(JSON.stringify(user), {
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
