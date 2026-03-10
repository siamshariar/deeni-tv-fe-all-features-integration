"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // debug
    // eslint-disable-next-line no-console
    console.log('🧠 GA component mounted, id=', gtag.GA_TRACKING_ID, 'path=', pathname);
    if (gtag.GA_TRACKING_ID) {
      gtag.pageview(pathname);
    }
  }, [pathname]);

  return null;
}
