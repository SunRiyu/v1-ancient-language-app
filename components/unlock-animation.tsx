'use client'

import { useEffect, useState } from 'react'

interface UnlockAnimationProps {
  isVisible: boolean
  course: string
  etymologyName: string
}

export function UnlockAnimation({ isVisible, course, etymologyName }: UnlockAnimationProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShow(true)
    }
  }, [isVisible])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/90 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="text-center animate-in zoom-in-95 slide-in-from-bottom-4 duration-700">
        <div className="mb-6 relative inline-block">
          <div className="w-24 h-24 mx-auto rounded-full bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
            <svg
              className="w-12 h-12 text-stone-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-300 rounded-full animate-ping" />
          <div className="absolute -top-1 -right-3 w-3 h-3 bg-amber-400 rounded-full animate-ping delay-100" />
          <div className="absolute -bottom-1 -left-3 w-3 h-3 bg-amber-500 rounded-full animate-ping delay-200" />
        </div>

        <h2 className="text-3xl font-bold text-amber-50 mb-2">
          おめでとうございます！
        </h2>
        <p className="text-amber-200/80 text-lg">
          <span className="text-amber-400 font-semibold">{etymologyName}</span> をクリアしました
        </p>
        <p className="text-amber-200/60 text-sm mt-2">
          {course === 'seeker' ? '探究者の道' : course} を進めています
        </p>
      </div>
    </div>
  )
}
