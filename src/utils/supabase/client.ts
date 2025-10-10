import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

const supabaseUrl = `https://${projectId}.supabase.co`;

let supabaseClient: ReturnType<typeof createSupabaseClient> | null = null;

export function createClient() {
  return createSupabaseClient(supabaseUrl, publicAnonKey);
}

export function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createSupabaseClient(supabaseUrl, publicAnonKey);
  }
  return supabaseClient;
}

export const supabase = getSupabaseClient();
