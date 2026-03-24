'use client'

import React from 'react'

interface IframePlayerProps {
  containerRef: React.RefObject<HTMLDivElement | null>
  iframeVisible: boolean
  children?: React.ReactNode
}

export function IframePlayer({ containerRef, iframeVisible, children }: IframePlayerProps) {
  return (
    <div className="relative w-full aspect-video bg-black/50 backdrop-blur-sm overflow-hidden shadow-2xl border border-white/10 border-b-0 transition-all duration-300 rounded-t-2xl md:rounded-t-3xl rounded-b-none">
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: iframeVisible ? 1 : 0 }}
      />
      <div className="absolute inset-0 w-full h-full pointer-events-auto" />
      {children}
    </div>
  )
}
