'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, History, Globe, RefreshCcw, MoreHorizontal } from 'lucide-react'

interface PlayerControlsProps {
  isMobile: boolean
  onOpenSchedule: () => void
  onOpenHistory: () => void
  onOpenChannelSelector: () => void
  onReload: () => void
  onMenuOpen: () => void
}

export function PlayerControls({
  isMobile,
  onOpenSchedule,
  onOpenHistory,
  onOpenChannelSelector,
  onReload,
  onMenuOpen,
}: PlayerControlsProps) {
  const actions = [
    { icon: Calendar, onClick: onOpenSchedule, title: 'Programs Schedule' },
    { icon: History, onClick: onOpenHistory, title: 'Watched Program' },
    { icon: Globe, onClick: onOpenChannelSelector, title: 'Channel' },
    { icon: RefreshCcw, onClick: onReload, title: 'Refresh' },
    { icon: MoreHorizontal, onClick: onMenuOpen, title: 'Menu' },
  ]

  return (
    <div className={`bg-black/60 backdrop-blur-xl border border-white/10 border-t-0 rounded-b-2xl md:rounded-b-3xl ${isMobile ? 'px-3 py-2' : 'px-6 py-4'}`}>
      <div className="flex items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="/DeeniTV-V-2.png" alt="Deeni.tv" className={isMobile ? 'h-5' : 'h-7'} />
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          {actions.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="transition-transform hover:scale-105 active:scale-95">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={item.onClick}
                  className={`text-white/90 hover:bg-white/20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${isMobile ? 'h-7 w-7' : 'h-10 w-10'}`}
                  title={item.title}
                >
                  <Icon className={isMobile ? 'h-3.5 w-3.5' : 'h-5 w-5'} />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
