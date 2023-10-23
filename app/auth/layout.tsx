import { headers, cookies } from 'next/headers'
import SupabaseListener from '../components/supabase-listener'
// サーバーコンポーネントで利用できるSupabaseのモジュール
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../database.types'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // headers,cookiesを指定することでクライアントで持っている
  // アクセストークンをサーバーサイドに渡す
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </>
  )
}
