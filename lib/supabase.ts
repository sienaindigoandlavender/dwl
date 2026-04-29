import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

export function getNexusClient(): SupabaseClient | null {
  if (cached) return cached;
  const url = process.env.NEXUS_SUPABASE_URL;
  const key = process.env.NEXUS_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  cached = createClient(url, key, {
    auth: { persistSession: false }
  });
  return cached;
}
