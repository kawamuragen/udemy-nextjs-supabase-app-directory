'use client'

// クライアントサイドのSupabaseコンポーネントを使う
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '../../utils/supabase'
import useStore from '../../store'

// サーバーコンポーネントのaccessTokenを受け取る
export default function SupabaseListener({
  accessToken,
}: {
  accessToken?: string
}) {
  const router = useRouter()
  const { updateLoginUser } = useStore()
  useEffect(() => {
    // 今ログインしているユーザーの情報をSupabaseから取得し、
    // Storeにログイン情報を格納する
    const getUserInfo = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        updateLoginUser({
          id: data.session?.user.id,
          email: data.session?.user.email!,
        })
      }
    }

    getUserInfo()

    // ユーザーのセッション情報が変わったときに走る
    // 最新のユーザー情報でストアを書き直す
    supabase.auth.onAuthStateChange((_, session) => {
      updateLoginUser({ id: session?.user.id, email: session?.user.email! })
      if (session?.access_token !== accessToken) {
        // サーバーとクライアントのトークンが一致しない
        // 場合はサーバーコンポーネントを再実行
        router.refresh()
      }
    })
  }, [accessToken])
  return null
}
