import { Suspense } from 'react'

import NotesList from './components/notes-list'
import RefreshBtn from './components/refresh-btn'
import Spinner from './components/spinner'
import TimerCounter from './components/timer-counter'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        {/* Streaming-HTML 時間がかかるコンポーネントだけSuspenseで読み込み中にする */}
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NotesList />
        </Suspense>
        {/* Importing Client Components into Server Components */}
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
