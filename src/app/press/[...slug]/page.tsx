import type { Metadata } from 'next'
import Link from 'next/link'
import { User, Share2, ChevronRight, ArrowRight, Clock, Globe2, Building2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { getPressRelease } from '@/lib/press-releases-data'

type PageProps = {
  params: Promise<{ slug: string[] }> | { slug: string[] }
}

function resolveSlug(params: PageProps['params']): string {
  // Handle both sync (older Next) and async (Next 16) params
  if ('slug' in (params as { slug: string[] })) {
    const p = params as { slug: string[] }
    return Array.isArray(p.slug) ? p.slug.join('/') : String(p.slug)
  }
  return ''
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params)
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug.join('/')
    : String(resolvedParams.slug)
  const release = getPressRelease(slug)

  if (!release) {
    return { title: 'Press Release Not Found', description: 'The requested press release could not be found.' }
  }

  return buildPageMetadata({
    path: `/press/${slug}`,
    title: release.title,
    description: release.subtitle,
    openGraphTitle: release.title,
    openGraphDescription: release.subtitle,
    image: release.featuredImage,
    keywords: [...release.tags, 'press release', 'news']
  })
}

export default async function PressReleasePage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params)
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug.join('/')
    : String(resolvedParams.slug)

  const release = getPressRelease(slug)

  if (!release) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <NavbarShell />
        <div className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Press Release Not Found</h1>
            <p className="text-gray-600 mb-8">The press release you're looking for doesn't exist or has been removed.</p>
            <Link
              href="/press"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
            >
              View All Press Releases
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarShell />

      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#FA812F] transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-300" />
            <Link href="/press" className="hover:text-[#FA812F] transition-colors">Press Releases</Link>
            <ChevronRight className="h-4 w-4 text-gray-300" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{release.title.substring(0, 50)}...</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <article className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <div className="flex justify-center items-center gap-3 mb-5">
              <span
                className="text-white px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
              >
                {release.category}
              </span>
              <span className="text-gray-400 text-sm flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {release.readTime}
              </span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {release.title}
            </h1>

            <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              {release.subtitle}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{release.author}</span>
                {release.authorRole && <span className="text-gray-400">— {release.authorRole}</span>}
              </div>
              {release.location && (
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4" />
                  <span>{release.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-10">
            <div
              className="h-72 lg:h-96 rounded-2xl overflow-hidden relative flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(250,129,47,0.15) 0%, rgba(221,3,3,0.15) 100%)' }}
            >
              <Building2 className="h-20 w-20 text-[#FA812F]/30" />
            </div>
          </div>

          {/* Share */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-10 pb-10 border-b border-gray-100">
            <span className="text-gray-500 text-sm font-medium">Share:</span>
            {[
              { label: 'LinkedIn', bg: '#0A66C2' },
              { label: 'Twitter', bg: '#1DA1F2' },
              { label: 'Email', bg: '#374151' },
            ].map(({ label, bg }) => (
              <button
                key={label}
                className="flex items-center gap-2 px-4 py-2 text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ background: bg }}
              >
                <Share2 className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-10"
            dangerouslySetInnerHTML={{ __html: release.content }}
          />

          {/* Tags */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {release.tags.map((tag) => (
                <span key={tag} className="bg-orange-50 text-[#FA812F] border border-orange-200 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {release.relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Press Releases</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {release.relatedArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
                  <div
                    className="h-36 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(250,129,47,0.1) 0%, rgba(221,3,3,0.1) 100%)' }}
                  >
                    <Building2 className="h-10 w-10 text-[#FA812F]/30" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#FA812F] transition-colors line-clamp-2 text-sm">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2">{article.excerpt}</p>
                    <Link
                      href={`/press/${article.slug}`}
                      className="text-[#FA812F] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read Full Release <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-20 text-white"
        style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Distribute Your Press Release?</h2>
          <p className="text-white/85 text-lg mb-8">
            Join thousands of businesses that trust NewsNaviPress for their press release distribution needs.
          </p>
          <Link
            href="/press/create"
            className="bg-white text-[#FA812F] hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg inline-flex items-center gap-2"
          >
            Submit Your Press Release
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
      <SchemaJsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": release.title,
        "description": release.subtitle,
        "author": { "@type": "Person", "name": release.author },
        "publisher": { "@type": "Organization", "name": "NewsNaviPress", "url": SITE_CONFIG.baseUrl },
        "url": `${SITE_CONFIG.baseUrl}/press/${release.slug}`
      }} />
    </div>
  )
}
