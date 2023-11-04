'use client'

// Todoページの左ペインエリア・Todoの単一リスト
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid'
import supabase from '../../utils/supabase'
import useStore from '../../store'
import type { Database } from '../../database.types'

type Todo = Database['public']['Tables']['todos']['Row']

export default function TodoItem(todo: Todo) {
  const router = useRouter()

  // 更新とリセットの関数呼び出し
  const updateTask = useStore((state) => state.updateEditedTask)
  const resetTask = useStore((state) => state.resetEditedTask)

  // チェックボックスを押下したときの関数
  async function updateMutate(id: string, completed: boolean) {
    await supabase.from('todos').update({ completed: completed }).eq('id', id)
    resetTask()
    router.refresh()
  }

  // ゴミ箱ボタン押されたときの関数
  async function deleteMutate(id: string) {
    await supabase.from('todos').delete().eq('id', id)
    router.refresh()
  }

  return (
    <li className="my-2">
      <input
        className="mr-1"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => updateMutate(todo.id, !todo.completed)}
      />
      <Link href={`auth/todo-crud/${todo.id}`}>{todo.title}</Link>
      <div className="float-right ml-20 flex">
        <PencilIcon
          className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            updateTask({
              id: todo.id,
              title: todo.title,
            })
          }}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            deleteMutate(todo.id)
          }}
        />
      </div>
    </li>
  )
}
