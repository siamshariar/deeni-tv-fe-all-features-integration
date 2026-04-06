import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Deeni.tv — Your Spiritual TV Experience',
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-zinc-900/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/DeeniTV-V-2.png" alt="Deeni.tv" className="h-7" />
          </Link>
          <span className="text-white/30">/</span>
          <span className="text-sm text-white/60">Privacy Policy</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: March 13, 2026</p>

        <div className="space-y-8 text-white/80 leading-relaxed">

          <section>
            <p>
              At Deeni.tv, one of our main priorities is the privacy of our visitors and users.
              This Privacy Policy document describes the types of information that may be collected
              by Deeni.tv and how we use it.
            </p>
            <p className="mt-3">
              If you have additional questions or require more information about our Privacy Policy,
              please contact us at{' '}
              <a href="mailto:deeniinfotech@gmail.com" className="text-primary underline underline-offset-2">
                deeniinfotech@gmail.com
              </a>.
            </p>
            <p className="mt-3">
              This Privacy Policy applies only to our online activities and is valid for visitors
              to our website and users of our mobile application with regards to the information
              that they share and/or we collect. This policy is not applicable to any information
              collected offline or via channels other than this app and website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Information Collection</h2>
            <p>
              We do not collect any personal data. Deeni.tv is a pure content streaming application.
              We do not require you to create an account, and we do not ask for your name, email
              address, phone number, or any other personally identifiable information.
            </p>
            <p className="mt-3">
              The only data stored on your device is your selected channel preference, which is
              saved locally using your browser&apos;s localStorage. This data never leaves your device
              and is not transmitted to any server.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
            <p>
              Deeni.tv embeds video content via YouTube&apos;s IFrame Player API. When you watch a
              video, YouTube&apos;s own privacy policy and terms of service apply. We encourage you
              to review YouTube&apos;s Privacy Policy at{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                policies.google.com/privacy
              </a>.
            </p>
            <p className="mt-3">
              Deeni.tv uses Vercel Analytics to understand aggregate, anonymised usage patterns
              (e.g. page views). This data does not contain personally identifiable information.
              See Vercel&apos;s Privacy Policy at{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                vercel.com/legal/privacy-policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Children&apos;s Privacy</h2>
            <p>
              Deeni.tv is a family-friendly Islamic content application suitable for all ages,
              including children. We do not knowingly collect any personal information from
              children under the age of 13, or from any user at all. If you believe that a child
              has provided us with personal information, please contact us immediately so we can
              take the appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies &amp; Local Storage</h2>
            <p>
              Deeni.tv does not use cookies for tracking or advertising. We use localStorage
              solely to remember your channel selection between visits, improving your experience
              without any data being sent to external servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. You are advised to review this
              page periodically for any changes. We will notify you of any significant changes by
              posting the updated Privacy Policy on this page with a revised &quot;Last updated&quot; date.
              Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-white/70">
              <li>Website: <a href="https://deeni.tv" className="text-primary underline underline-offset-2">deeni.tv</a></li>
              <li>Email: <a href="mailto:deeniinfotech@gmail.com" className="text-primary underline underline-offset-2">deeniinfotech@gmail.com</a></li>
              <li>Organization: Deeni Info Tech</li>
            </ul>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between gap-4">
          <img src="/DeeniTV-V-2.png" alt="Deeni.tv" className="h-6 opacity-60" />
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Deeni Info Tech. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  )
}
