'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TickerProps {
  videos: any[]
  currentIndex: number
  totalPrograms: number
  currentProgramId: string
}

export function DesktopTicker({ videos, currentIndex }: TickerProps) {
  if (!videos?.length) return null
  const active = videos[currentIndex] || {}
  return (
    <div className="text-white text-sm font-medium">{active.title || 'Upcoming...'}</div>
  )
}

export function MobileTicker({ videos, currentIndex }: TickerProps) {
  if (!videos?.length) return null
  const active = videos[currentIndex] || {}
  return (
    <div className="text-white text-xs font-medium">{active.title || 'Upcoming...'}</div>
  )
}
