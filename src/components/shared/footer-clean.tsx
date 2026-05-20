'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export function FooterNewsNaviPressClean() {
  return (
    <footer style={{ background: '#111827' }} className="text-white">

      {/* Top gradient accent bar */}
      <div style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)', height: '4px' }} />

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2.5rem' }}
             className="max-lg:grid-cols-2 max-sm:grid-cols-1">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
              >
                <span className="text-white font-bold text-lg">NP</span>
              </div>
              <div>
                <div className="text-base font-bold text-white">NewsNaviPress</div>
                <div className="text-xs text-gray-400">Professional Press Release Distribution</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Reach journalists, readers, and search with wire-ready press release distribution to 5,000+ media outlets worldwide.
            </p>

            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                >
                  <social.icon className="h-4 w-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#0d1117', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">
              © 2004–{new Date().getFullYear()} NewsNaviPress. All Rights Reserved.
            </p>
            <div className="flex gap-5">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 text-xs hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
