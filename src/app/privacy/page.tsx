import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly, such as your name, email address, organization name, and press release content when you create an account or submit a release. We also collect usage data including pages visited, features used, and distribution activity to improve our platform.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Your information is used to process and distribute your press releases, provide customer support, send service-related communications, improve platform features, and ensure platform security. We do not sell your personal information to third parties.',
  },
  {
    title: 'Press Release Distribution',
    body: 'When you submit a press release, your content and contact information are distributed to media outlets, journalists, and news platforms as part of our service. This is the core function of NewsNaviPress and is necessary to fulfill your distribution request.',
  },
  {
    title: 'Data Retention',
    body: 'We retain your account information for as long as your account is active. Press releases are permanently archived for SEO and reference purposes. You may request deletion of your personal account data at any time by contacting our support team.',
  },
  {
    title: 'Cookies & Analytics',
    body: 'We use cookies to maintain your session, remember preferences, and analyze platform usage. Analytics data is aggregated and anonymized. You can manage cookie preferences through your browser settings.',
  },
  {
    title: 'Your Rights & Choices',
    body: 'You have the right to access, correct, or delete your personal data. You can manage email notification preferences from your account settings. To exercise any data rights, contact us at privacy@newsnavipress.com.',
  },
  {
    title: 'Security',
    body: 'We implement industry-standard security measures including encryption in transit and at rest, access controls, and regular security audits to protect your information.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about this Privacy Policy, please contact us at privacy@newsnavipress.com or write to NewsNaviPress, Suite 1400 - 506 Second Avenue, Seattle, WA 98104, USA.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarShell />

      {/* Hero */}
      <section
        className="relative overflow-hidden text-white py-14 lg:py-20"
        style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/85 text-lg">How we collect, use, and protect your information.</p>
          <p className="text-white/60 text-sm mt-3">Last updated: March 16, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={section.title} className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{section.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-7 shadow-sm text-center">
          <p className="text-gray-500 text-sm mb-4">
            Have questions about our privacy practices?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all hover:opacity-90 hover:shadow-md"
            style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
