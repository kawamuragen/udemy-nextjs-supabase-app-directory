import { resolve } from 'path'
import type { Database } from '../../database.types'
import { format } from 'date-fns'

// 特定のテーブルの型のみ抽出する
type Note = Database['public']['Tables']['notes']['Row']

// データフェッチする関数
async function fetchNotes() {
  // データフェッチのダミーの待ち時間
  await new Promise((resolve) => setTimeout(resolve, 3000))

  // Supabaseのエンドポイントからnotesを取得するフェッチ処理
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    // Cashしないオプション
    cache: 'no-store',

    // ISR設定１０秒
    // next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const notes: Note[] = await res.json()
  return notes
}
export default async function NotesList() {
  // React Server Components ではコンポーネントレベルでasync/awaitを記述できる
  // クライアントコンポーネントではuseEffectやReact QueryやSWRなどを使わないといけなかった
  const notes = await fetchNotes()

  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>
      <ul className="m-3">
        {notes.map((note) => (
          <li key={note.id}>
            <p>{note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
