'use client'
import { useRouter } from 'next/navigation'

export default function RefreshBtn() {
  const router = useRouter()
  return (
    <div>
      <button
        className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
        onClick={() => {
          router.refresh()
        }}
      >
        Refresh current route
      </button>
      <p>
        サーバーコンポーネントで管理している部分のみ更新
        <br />
        上のuseStateで管理しているカウントの値はリフレッシュされない。
      </p>
    </div>
  )
}
