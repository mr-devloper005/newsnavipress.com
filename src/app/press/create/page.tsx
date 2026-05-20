'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, FileText, Globe2, Users, Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'

export default function CreatePressReleasePage() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    content: '',
    category: '',
    releaseDate: '',
    releaseTime: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    organization: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
        <NavbarShell />
        <section className="py-20 bg-white min-h-[60vh] flex items-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Press Release Submitted!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your press release has been successfully submitted for review. Our team will review it and contact you shortly.
            </p>
            <Link href="/press" className="newsnavipress-button-primary inline-flex items-center">
              View All Press Releases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
      <NavbarShell />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Create Your Press Release
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Distribute your news to thousands of media outlets and journalists worldwide with our professional press release distribution service.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>5,000+ Media Outlets</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5" />
                <span>100+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>50,000+ Releases</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Form */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Basic Information */}
            <div className="newsnavipress-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic Information</h2>
              <p className="text-gray-500 mb-6">Provide the core details of your press release</p>
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Press Release Title <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter a compelling headline for your press release"
                  />
                </div>

                <div>
                  <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle / Summary
                  </label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Brief summary of your news (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Press Release Content <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Write your press release content here. Include the who, what, when, where, and why of your news."
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category <span className="text-primary">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select a category</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                      <option value="education">Education</option>
                      <option value="automotive">Automotive</option>
                      <option value="food-beverage">Food & Beverage</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your company or organization name"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Release Schedule */}
            <div className="newsnavipress-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Release Schedule</h2>
              <p className="text-gray-500 mb-6">Schedule when your press release goes live — leave blank for immediate release</p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Release Date
                  </label>
                  <input
                    type="date"
                    id="releaseDate"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="releaseTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Release Time
                  </label>
                  <input
                    type="time"
                    id="releaseTime"
                    name="releaseTime"
                    value={formData.releaseTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="newsnavipress-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-500 mb-6">Media contact details that will appear on your press release</p>
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Person media can contact"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="media@yourcompany.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="newsnavipress-card p-8 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to Distribute?</h2>
              <p className="text-gray-500 mb-6">Your press release will be reviewed and distributed to our global media network.</p>
              <button
                type="submit"
                disabled={isUploading}
                className="newsnavipress-button-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                {isUploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Press Release
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
              <p className="text-sm text-gray-400 mt-4">
                By submitting, you agree to our Terms of Service and Content Guidelines
              </p>
            </div>

          </form>
        </div>
      </section>

      <Footer />
      <SchemaJsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Create Press Release - NewsNaviPress",
        "description": "Create and distribute your press release with NewsNaviPress. Reach thousands of media outlets and journalists worldwide.",
        "url": `${SITE_CONFIG.baseUrl}/press/create`
      }} />
    </div>
  )
}
