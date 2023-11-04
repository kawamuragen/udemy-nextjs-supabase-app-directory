// Todoページの左ペインエリア・Todoのリスト

import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../database.types'
import TodoItem from './todo-item'

export default async function TodoList() {
  // headers, cookiesはNext.jsでダイナミックファンクションと呼ばれる
  // リクエスト前に値が変わる可能性があるため。
  // ダイナミックファンクションを適用しているコンポーネントは自動的に
  // ダイナミックレンダリングになる。
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

  // Todoテーブルの呼び出し
  const { data: todos } = await supabase
    .from('todos')
    .select()
    .order('created_at', { ascending: true })
  return (
    <ul className="my-6 mx-3">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
