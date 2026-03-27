import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tbjkdugjrdqondsnhtro.supabase.co'
const supabaseAnonKey = 'sb_publishable_hnsni7oo-Cye0enXtzUq7w_EcdCLdCW'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

