
import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import GoogleAnalytics from '../components/google-analytics'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist-mono',
})

export const viewport: Viewport = {
  // viewport-fit=cover + all lock-zoom flags are injected as a raw <meta> in <head>
  // below, giving full control over the content string iOS actually reads.
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://deeni.tv'),
  title: {
    default: 'Deeni.tv',
    template: '%s | Deeni.tv'
  },
  description: 'Experience premium spiritual content in a cinematic lean-back TV interface. Watch Islamic lectures, Ramadan guides, and more in a synchronized TV-like experience.',
  generator: 'Next.js',
  applicationName: 'Deeni.tv',
  referrer: 'origin-when-cross-origin',
  keywords: ['Islamic TV', 'Spiritual content', 'Ramadan guide', 'Islamic lectures', 'Deeni TV'],
  authors: [{ name: 'Deeni.tv Team' }],
  creator: 'Deeni.tv',
  publisher: 'Deeni.tv',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  icons: {
    icon: [
      { url: '/App_logo_192.jpeg', sizes: '192x192', type: 'image/jpeg' },
      { url: '/App_logo_256.jpeg', sizes: '256x256', type: 'image/jpeg' },
      { url: '/App_logo_384.jpeg', sizes: '384x384', type: 'image/jpeg' },
      { url: '/App_logo_512.jpeg', sizes: '512x512', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/App_logo_192.jpeg', sizes: '192x192', type: 'image/jpeg' },
    ],
    shortcut: '/App_logo_192.jpeg',
  },

  manifest: '/manifest.json',
  
  openGraph: {
    title: 'Deeni.tv',
    description: 'Experience premium spiritual content in a cinematic lean-back TV interface',
    url: 'https://deeni.tv',
    siteName: 'Deeni.tv',
    images: [
      {
        url: '/Deeni-TV-Cover-1200-630.jpg',
        width: 1200,
        height: 630,
        alt: 'Deeni.tv',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Deeni.tv',
    description: 'Experience premium spiritual content in a cinematic lean-back TV interface',
    images: ['/Deeni-TV-Cover-1200-630.jpg'],
    creator: '@deenitv',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code', // Add your verification code
    yandex: 'your-yandex-verification-code', // Add if needed
    yahoo: 'your-yahoo-verification-code', // Add if needed
  },
  
  category: 'religion',
  
  // PWA meta tags — explicitly rendered in <head> below for full iOS control.
  // Keeping only entries that don't have a dedicated <meta> in RootLayout.
  other: {
    'msapplication-TileColor': '#000000',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Viewport: lock zoom, cover notch/home-bar on iOS ── */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />

        {/* ── PWA manifest ── */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* ── Safari / iOS home-screen PWA ── */}
        {/* Runs as standalone (no browser chrome) when added to home screen */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* black-translucent: status bar overlays the app (uses safe-area-inset) */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Deeni.tv" />
        {/* Touch icons shown on iOS home screen */}
        <link rel="apple-touch-icon" href="/favicon-180x180.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon-192x192.png" />
        {/* Splash screens — shown while PWA is launching (optional but polished) */}
        <meta name="apple-touch-fullscreen" content="yes" />

        {/* ── Android / Chrome PWA ── */}
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Disables tap highlight rectangle on Android */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* ── Prevent unwanted browser behaviours ── */}
        {/* Stops iOS from auto-linking phone numbers / addresses */}
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        {/* Disable automatic translation prompts */}
        <meta name="google" content="notranslate" />

        {/* ── Safari pinned-tab icon ── */}
        <link rel="mask-icon" href="/DeeniTV.svg" color="#16a34a" />

        {/* ── MS Application tile ── */}
        <meta name="msapplication-TileImage" content="/favicon-256x256.png" />
        <meta name="msapplication-TileColor" content="#16a34a" />

        {/* ── PWA Compatibility shim (adds missing iOS meta from manifest) ── */}
        <script
          async
          src="https://cdn.jsdelivr.net/npm/pwacompat"
          crossOrigin="anonymous"
        />


        {/* ── Google Analytics (gtag.js) ── */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        ) : (
          <script
            // insert a harmless comment when the ID is missing so we can inspect <head>
            dangerouslySetInnerHTML={{
              __html: `console.warn('Google Analytics ID is not set. see .env.local');`,
            }}
          />
        )}
      </head>
      <body 
        className="font-sans antialiased bg-zinc-950 text-white"
        suppressHydrationWarning={true}
      >
        <div id="root">
          {children}
        </div>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}