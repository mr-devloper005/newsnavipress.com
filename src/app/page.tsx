import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Check, Globe2, Users, Building2, FileText,
  ChevronRight, Zap, BarChart3, Shield, Star,
  Cpu, HeartPulse, DollarSign, ShoppingBag, GraduationCap, Car
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { FaqAccordion } from '@/components/shared/faq-accordion'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { siteContent } from '@/config/site.content'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/',
    title: siteContent.home.metadata.title,
    description: siteContent.home.metadata.description,
    openGraphTitle: siteContent.home.metadata.openGraphTitle,
    openGraphDescription: siteContent.home.metadata.openGraphDescription,
    image: SITE_CONFIG.defaultOgImage,
    keywords: [...siteContent.home.metadata.keywords],
  })
}

const categories = [
  { icon: Cpu, label: 'Technology & AI', count: '1,240+ releases' },
  { icon: HeartPulse, label: 'Health & Medicine', count: '890+ releases' },
  { icon: DollarSign, label: 'Finance & Markets', count: '1,050+ releases' },
  { icon: ShoppingBag, label: 'Retail & Consumer', count: '670+ releases' },
  { icon: GraduationCap, label: 'Education', count: '430+ releases' },
  { icon: Car, label: 'Automotive', count: '380+ releases' },
]

export default function HomePage() {
  return (
    <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
      <NavbarShell />

      {/* ── HERO ── */}
      <section
        style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
        className="relative overflow-hidden text-white"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
                Press Release Distribution
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-5">
                Reach journalists, readers, and search with wire-ready announcements.
              </h1>
              <p className="text-lg mb-8 text-white/85 max-w-xl leading-relaxed">
                A single platform to submit, distribute, and track your press releases — and write a business-ready story.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="border border-white/60 text-white hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center text-sm"
                >
                  Discover more
                </Link>
              </div>
              <div className="flex flex-wrap gap-5 mt-8 text-white/80 text-sm">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-green-300" /> 5,000+ Media Outlets</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-green-300" /> 100+ Countries</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-green-300" /> 50,000+ Releases Sent</span>
              </div>
            </div>
            {/* Right — live feed card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm font-medium">Live Distribution Active</span>
                </div>
                <div className="space-y-3">
                  {[
                    { cat: 'Technology', title: 'TechCorp Launches AI Platform for Enterprise' },
                    { cat: 'Healthcare', title: 'GlobalHealth Expands Telemedicine to Europe' },
                    { cat: 'Finance', title: 'EcoTech Secures $50M Series B Funding' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/15 rounded-xl p-4 border border-white/10">
                      <span className="text-xs text-white/60 font-semibold uppercase tracking-wide">{item.cat}</span>
                      <p className="text-white text-sm font-semibold mt-1 leading-snug">{item.title}</p>
                      <div className="flex gap-2 mt-2">
                        <div className="h-1.5 bg-white/30 rounded-full flex-1"></div>
                        <div className="h-1.5 bg-white/20 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-white/50 text-xs">
                  <span>5,000+ outlets reached</span>
                  <span>Updated just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
            {[
              { value: '50,000+', label: 'Press Releases Distributed' },
              { value: '5,000+', label: 'Media Outlets' },
              { value: '100+', label: 'Countries Reached' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="py-2 px-4">
                <div className="text-2xl lg:text-3xl font-bold text-[#FA812F] mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT FOR COMMS TEAMS ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FA812F] text-xs font-bold uppercase tracking-widest">Who it's for</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">Built for Communications Teams</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Whether you're managing PR for a startup or coordinating across divisions, our platform adapts to your workflow.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Building2,
                title: 'In-House Teams',
                desc: 'Streamline your corporate communications with a single platform for drafting, approving, and distributing press releases. Advanced targeting and real-time analytics keep your team aligned.',
              },
              {
                icon: Users,
                title: 'Agencies & Partners',
                desc: 'Manage multiple client campaigns from one dashboard. Bulk distribution, white-label reporting, and dedicated account support make NewsNaviPress the go-to partner for PR agencies.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(250,129,47,0.1)' }}>
                  <Icon className="h-6 w-6 text-[#FA812F]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{desc}</p>
                <Link href="/about" className="inline-flex items-center text-sm font-semibold text-[#FA812F] hover:gap-2 gap-1 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISTRIBUTION FEATURE ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-[#FA812F] text-xs font-bold uppercase tracking-widest">Free distribution</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-8">
                Distribution that stays readable end-to-end
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: 'Wire-ready formatting', desc: 'Your release is automatically formatted to meet AP Style and wire service standards before distribution.' },
                  { icon: Globe2, title: 'Global media network', desc: 'Reach 5,000+ verified journalists, newsrooms, and digital outlets across 100+ countries.' },
                  { icon: BarChart3, title: 'Real-time pickup tracking', desc: 'Monitor where your release is picked up, shared, and indexed as it happens.' },
                  { icon: Shield, title: 'Permanent online archive', desc: 'Every release is permanently archived and indexed by major search engines for lasting visibility.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(250,129,47,0.1)' }}>
                      <Icon className="h-5 w-5 text-[#FA812F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Preview cards */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
              {[
                { cat: 'Technology', title: 'TechCorp Launches Revolutionary AI Platform for Enterprise', outlets: '1,240' },
                { cat: 'Healthcare', title: 'GlobalHealth Expands Telemedicine Services to Five European Markets', outlets: '890' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#FA812F] uppercase tracking-wide">{item.cat}</span>
                    <span className="text-xs text-gray-400">{i === 0 ? 'Just now' : '2 hrs ago'}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-3 leading-snug">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">Distributed to {item.outlets} outlets</span>
                  </div>
                </div>
              ))}
              <div className="text-center pt-2">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CATEGORIES ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FA812F] text-xs font-bold uppercase tracking-widest">Industry coverage</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">Industry Categories</h2>
            <p className="text-gray-500">Targeted distribution to the journalists and outlets that cover your sector</p>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.map(({ icon: Icon, label, count }) => (
              <Link
                key={label}
                href="/press"
                className="bg-white rounded-2xl border border-gray-200 p-5 text-center hover:border-[#FA812F]/40 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ background: 'rgba(250,129,47,0.1)' }}>
                  <Icon className="h-6 w-6 text-[#FA812F]" />
                </div>
                <h4 className="font-semibold text-gray-900 text-xs mb-1 leading-tight">{label}</h4>
                <p className="text-xs text-gray-400">{count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
        className="py-20 text-white"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe2 className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Talk with our distribution desk</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get personalized guidance on how to best reach your target distribution audience.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#FA812F] hover:bg-gray-50 px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg inline-flex items-center gap-2"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── RECENT PRESS WIRES ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">Recent Press Wires</h2>
              <p className="text-gray-500 text-sm">Latest announcements from our distribution network</p>
            </div>
            <Link href="/press" className="text-[#FA812F] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            {/* Featured */}
            <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-52 relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(250,129,47,0.2) 0%, rgba(221,3,3,0.2) 100%)' }}>
                <FileText className="h-16 w-16 text-[#FA812F]/30" />
                <span className="absolute top-4 left-4 bg-[#FA812F] text-white text-xs font-semibold px-3 py-1 rounded-full">Technology</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FA812F] transition-colors leading-snug">
                  TechCorp Announces Revolutionary AI-Powered Press Wire Distribution Platform
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  Leading technology company announces groundbreaking artificial intelligence solution designed to transform how businesses distribute press releases to global media outlets and journalists.
                </p>
                <Link href="/press/techcorp-launches-revolutionary-ai-platform" className="text-[#FA812F] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read more <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
            {/* Sidebar */}
            <div className="space-y-4">
              {[
                { slug: 'globalhealth-expands-to-european-markets', cat: 'Healthcare', title: 'GlobalHealth Expands Telemedicine Services to Five European Markets' },
                { slug: 'ecotech-secures-50m-series-b-funding', cat: 'Finance', title: 'EcoTech Secures $50M Series B to Accelerate Green Energy Platform' },
                { slug: 'techcorp-launches-revolutionary-ai-platform', cat: 'Retail', title: 'RetailMax Partners with Leading E-commerce Platforms for Inventory Sync' },
              ].map((item) => (
                <article key={item.slug} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
                  <span className="text-xs font-bold text-[#FA812F] uppercase tracking-wide">{item.cat}</span>
                  <h4 className="font-semibold text-gray-900 mt-1 mb-3 text-sm leading-snug group-hover:text-[#FA812F] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <Link href={`/press/${item.slug}`} className="text-[#FA812F] text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read more <ChevronRight className="h-3 w-3" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you need to know about press release distribution</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">What Our Clients Say</h2>
            <p className="text-gray-500">Trusted by communications teams and agencies worldwide</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: 'Sarah Johnson', role: 'PR Director, TechCorp', text: "NewsNaviPress transformed our media outreach. Our press releases now reach twice as many journalists, and we've seen a 300% increase in media mentions." },
              { name: 'Michael Chen', role: 'Communications Manager, GlobalHealth', text: 'The distribution speed is unmatched. We submitted our European expansion announcement and had pickups from major outlets within hours.' },
              { name: 'Emily Rodriguez', role: 'Founder, EcoTech', text: 'As a startup, we needed affordable but powerful distribution. NewsNaviPress gave us access to the same media network as Fortune 500 companies.' },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FA812F] text-[#FA812F]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #FA812F, #DD0303)' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <SchemaJsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "NewsNaviPress",
        "description": "Professional press release distribution service for businesses worldwide",
        "url": SITE_CONFIG.baseUrl
      }} />
    </div>
  )
}
