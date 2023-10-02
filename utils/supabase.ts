import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../database.types'

// クライアントコンポーネントで利用するSupabaseのインスタンス
export default createBrowserSupabaseClient<Database>()
