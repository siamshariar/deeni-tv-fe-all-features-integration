'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ProgramOverlayProps {
  currentProgram: any
  nextProgram: any
  isVisible: boolean
  isMobile: boolean
}

export function ProgramOverlay({ currentProgram, nextProgram, isVisible, isMobile }: ProgramOverlayProps) {
  if (!isVisible || !currentProgram) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="absolute top-4 left-4 z-30 p-3 rounded-lg bg-black/50 backdrop-blur-sm border border-white/20"
    >
      <div className="text-white text-sm font-semibold">Now Playing: {currentProgram.title}</div>
      {nextProgram && <div className="text-white/80 text-xs">Next up: {nextProgram.title}</div>}
    </motion.div>
  )
}
