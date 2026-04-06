'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BrandedLoadingOverlayProps {
  isVisible: boolean
  programName: string
}

export function BrandedLoadingOverlay({ isVisible, programName }: BrandedLoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-[45] flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring', damping: 20 }}
            className="relative flex flex-col items-center gap-2.5 sm:gap-3 md:gap-4"
          >
            <div className="relative flex items-center justify-center w-[14vmin] h-[14vmin] min-w-[3.5rem] min-h-[3.5rem] max-w-[7rem] max-h-[7rem] sm:min-w-[4.5rem] sm:min-h-[4.5rem] sm:max-w-[8rem] sm:max-h-[8rem] md:max-w-[9rem] md:max-h-[9rem]">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full border-t-2 border-primary" />
              <img src="/DeeniTV-V-2.png" alt="Deeni.tv" className="h-[40%] w-auto object-contain" />
            </div>

            <div className="max-w-[85%] sm:max-w-md md:max-w-lg text-center px-3 sm:px-5 md:px-6">
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3">
                <p className="text-white/50 uppercase tracking-wider font-medium text-[7px] sm:text-[9px] md:text-[10px] mb-0.5 sm:mb-1">Watching</p>
                <h3 className="text-white font-bold leading-tight line-clamp-2 text-sm sm:text-base md:text-lg lg:text-xl">{programName || 'Loading program...'}</h3>
              </motion.div>
            </div>

            <motion.div className="w-[25vmin] min-w-[6rem] max-w-[12rem] h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }} className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
