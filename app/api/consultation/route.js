import { supabase } from "@/app/utils/supabaseClient";

export async function POST(request) {
    try {
        const json = await request.json();

        const { error } = await supabase
            .from("consulting_services")
            .insert([json]);

        if (error) {
            throw error;
        }

        return new Response({
            status: 201,
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
