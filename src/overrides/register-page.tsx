'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, FileText, Globe2, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

export function RegisterPageOverride() {
  const [form, setForm] = useState({ name: '', email: '', password: '', org: '' })
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavbarShell />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left — brand panel */}
          <div
            className="rounded-2xl p-10 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Start distributing your press releases today
              </h1>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                Join thousands of businesses that trust NewsNaviPress to reach journalists, newsrooms, and media outlets worldwide.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Globe2, text: 'Distribution to 5,000+ media outlets' },
                  { icon: Users, text: 'Trusted by 10,000+ businesses globally' },
                  { icon: FileText, text: 'Wire-ready formatting included' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                    <Icon className="h-4 w-4 text-white/80 flex-shrink-0" />
                    <span className="text-sm text-white/90">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form panel */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FA812F] mb-2">Get started</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Create your account</h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Jane Smith"
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-colors"
                  style={{ '--tw-ring-color': '#FA812F' } as React.CSSProperties}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@company.com"
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-colors"
                  style={{ '--tw-ring-color': '#FA812F' } as React.CSSProperties}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={set('password')}
                  placeholder="••••••••"
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-colors"
                  style={{ '--tw-ring-color': '#FA812F' } as React.CSSProperties}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <input
                  type="text"
                  value={form.org}
                  onChange={set('org')}
                  placeholder="Your company or agency name"
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-colors"
                  style={{ '--tw-ring-color': '#FA812F' } as React.CSSProperties}
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg inline-flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
              >
                Create account
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-[#FA812F] hover:underline inline-flex items-center gap-1">
                Sign in
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
