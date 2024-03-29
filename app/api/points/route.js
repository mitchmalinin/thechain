import { supabase } from "@/app/utils/supabaseClient";
import { getToken } from "next-auth/jwt";

export async function GET(request) {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req: request, secret });
    const url = new URL(request.url);
    const profile = url.searchParams.has("profile");

    if (!token || !token.isMember) {
        return new Response(null, {
            status: 403,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        let query = supabase
            .from("points_dev")
            .select("*")
            .order("points", { ascending: false });

        if (profile) {
            query = query.eq("wallet_address", token.id).single();
        }

        const { data: users, error } = await query;

        if (error) throw error;

        return new Response(JSON.stringify(users), {
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

export async function POST(request) {
    try {
        const requestBody = await request.json();
        const { wallet_address, event_id, event_type } = requestBody;

        // Check if the wallet address already has been awarded points for this event
        const { data: existingPoints, error: pointsError } = await supabase
            .from("points")
            .select("*")
            .eq("wallet_address", wallet_address)
            .eq("event_id", event_id);

        if (pointsError) throw pointsError;

        if (existingPoints && existingPoints.length > 0) {
            return new Response("Points already awarded for this event.", {
                status: 409,
                headers: { "Content-Type": "application/json" },
            });
        }

        let points = 0;

        // Assign points based on the event type
        switch (event_type) {
            case "dinner":
                points = 3;
                break;
            case "meetup":
                points = 2;
                break;
            case "connect_wallet":
                points = 1;
                break;
            default:
                return new Response("Invalid event type.", {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                });
        }

        // Insert new points record
        const { error } = await supabase.from("points").insert([
            {
                wallet_address,
                event_type,
                points,
                event_id,
            },
        ]);

        if (error) throw error;

        return new Response({
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error(err);
        if (err.code === "23503") {
            return new Response("Invalid wallet address.", {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
        return new Response(err.message || "Something went wrong.", {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
