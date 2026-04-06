'use client'

import { useEffect } from 'react'
import { Capacitor } from '@capacitor/core'
import { StatusBar, Style } from '@capacitor/status-bar'

export function NativeShell() {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) {
      return
    }

    StatusBar.setBackgroundColor({ color: '#09090b' }).catch(() => {})
    StatusBar.setStyle({ style: Style.Light }).catch(() => {})
    StatusBar.show().catch(() => {})
  }, [])

  return null
}