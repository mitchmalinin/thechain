import { supabase } from "@/app/supabaseClient";

export const createUserRecord = async (userData) => {
	const { data, error } = await supabase.from("users").insert([userData]);
	if (error) throw error;
	return data;
};
