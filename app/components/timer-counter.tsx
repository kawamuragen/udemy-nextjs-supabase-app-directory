'use client'

import { useEffect, useState } from 'react'

export default function TimerCounter() {
  // count state
  const [count, setCount] = useState(0)

  // マウントされたときにインターバルのカウンター
  useEffect(() => {
    const timer = setInterval(() => setCount((prevCont) => prevCont + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button
        className="font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}
