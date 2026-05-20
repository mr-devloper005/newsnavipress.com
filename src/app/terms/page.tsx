import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing or using NewsNaviPress, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. We reserve the right to update these terms at any time with notice provided via email or platform notification.',
  },
  {
    title: 'Account Registration',
    body: 'You must create an account to submit press releases. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account. You must provide accurate and complete information during registration.',
  },
  {
    title: 'Press Release Submission',
    body: 'By submitting a press release, you confirm that the content is accurate, that you have the right to distribute it, and that it does not violate any laws or third-party rights. NewsNaviPress reserves the right to reject or remove content that violates our content guidelines.',
  },
  {
    title: 'Content Ownership',
    body: 'You retain ownership of the press releases and content you submit. By submitting content, you grant NewsNaviPress a non-exclusive, worldwide license to distribute, display, and archive your press releases as part of our distribution service.',
  },
  {
    title: 'Acceptable Use',
    body: 'You agree not to submit false, misleading, defamatory, or illegal content. Spam, harassment, and content that infringes intellectual property rights are strictly prohibited. Violations may result in immediate account termination.',
  },
  {
    title: 'Distribution Service',
    body: 'NewsNaviPress provides press release distribution to our media network. While we make every effort to ensure broad distribution, we cannot guarantee pickup or coverage by specific media outlets. Distribution scope depends on your selected service level.',
  },
  {
    title: 'Payment & Refunds',
    body: 'Payment is required before distribution. Refunds are available within 24 hours of submission if distribution has not yet begun. Once a press release has been distributed to our media network, refunds are not available.',
  },
  {
    title: 'Limitation of Liability',
    body: `NewsNaviPress is not liable for any indirect, incidental, or consequential damages arising from use of our service. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.`,
  },
  {
    title: 'Governing Law',
    body: 'These Terms are governed by the laws of the State of Washington, USA. Any disputes shall be resolved in the courts of King County, Washington.',
  },
  {
    title: 'Contact',
    body: 'For questions about these Terms of Service, contact us at legal@newsnavipress.com or write to NewsNaviPress, Suite 1400 - 506 Second Avenue, Seattle, WA 98104, USA.',
  },
]

export default function TermsPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/85 text-lg">The rules and guidelines for using {SITE_CONFIG.name}.</p>
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
            Have questions about our terms?
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
