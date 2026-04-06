'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Radio, Zap, Shield, Sparkles, PlayCircle } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'

interface StartScreenProps {
  onPlayClick: () => void
}

export function StartScreen({ onPlayClick }: StartScreenProps) {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-900 to-black z-50 overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8"
      >
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
          <div className="relative flex items-center justify-center">
            <div className={`relative flex items-center justify-center ${
              isMobile ? 'w-16 h-16' : isTablet ? 'w-24 h-24' : 'w-32 h-32'
            }`}>
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.03, 1] }}
                transition={{ rotate: { duration: 3, repeat: Infinity, ease: 'linear' }, scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
                className="relative flex items-center justify-center"
              >
                <div className={`absolute rounded-full bg-primary/20 blur-xl animate-pulse ${
                  isMobile ? 'w-12 h-12' : isTablet ? 'w-20 h-20' : 'w-28 h-28'
                }`} />
                <Radio className={`${isMobile ? 'h-8 w-8' : isTablet ? 'h-14 w-14' : 'h-20 w-20'} text-primary relative z-10 flex-shrink-0`} />
                <motion.div
                  animate={{ y: ['-50%', '150%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm pointer-events-none"
                />
              </motion.div>
            </div>
          </div>

          <motion.div className="flex items-center justify-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <img src="/DeeniTV-V-2.png" alt="Deeni.tv - Your Spiritual TV Experience" className={isMobile ? 'h-8' : isTablet ? 'h-10' : 'h-12'} />
          </motion.div>

          <motion.p className={`text-white/60 text-center ${isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-base'}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            Your Spiritual TV Experience
          </motion.p>

          {!isMobile && (
            <motion.div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              {[ { icon: Zap, text: 'Live TV' }, { icon: Shield, text: 'Halal Content' }, { icon: Sparkles, text: 'Premium' } ].map((item, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-white/5 rounded-full border border-white/10">
                  <item.icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs text-white/80 whitespace-nowrap">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex justify-center mt-1 sm:mt-2">
            <Button onClick={onPlayClick} size={isMobile ? 'default' : 'lg'} className={`relative group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white rounded-full shadow-2xl shadow-primary/30 overflow-hidden ${isMobile ? 'px-5 py-3 text-sm' : isTablet ? 'px-6 py-4 text-base' : 'px-8 py-5 text-lg'}`}>
              <span className="relative z-10 flex items-center gap-2">
                <PlayCircle className={isMobile ? 'h-4 w-4' : 'h-5 w-5'} />
                <span className="font-bold">Start Watching</span>
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
            </Button>
          </motion.div>

          <motion.p className={`text-white/40 text-center ${isMobile ? 'text-[9px]' : 'text-[11px]'}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            Click to start your spiritual journey
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}
