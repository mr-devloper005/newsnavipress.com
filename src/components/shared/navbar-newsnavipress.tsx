'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, FileText, User, LogOut, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

export function NavbarNewsNaviPress() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, user, logout } = useAuth()

  const navigation = useMemo(() => [
    { name: 'Press Releases', href: '/press', icon: FileText },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: FileText },
  ], [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">

      {/* Top Bar — brand gradient */}
      <div style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }} className="text-white py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#FA812F] px-4 py-1 rounded font-semibold hover:bg-gray-100 transition-colors text-xs"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
              >
                <span className="text-white font-bold text-lg">NP</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">NewsNaviPress</span>
                <span className="block text-xs text-gray-500">Professional Press Release Distribution</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-[#FA812F] border-b-2 border-[#FA812F] pb-1"
                      : "text-gray-600 hover:text-[#FA812F]"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search press releases..."
                  className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-gray-50"
                  style={{ '--tw-ring-color': '#FA812F' } as React.CSSProperties}
                />
              </div>

              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <User className="h-4 w-4 text-gray-400" />
                    <span>{user?.name || 'Account'}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={logout} className="text-gray-500 hover:text-gray-900">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link href="/login" className="text-sm text-gray-600 hover:text-[#FA812F] font-medium transition-colors">
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-90 hover:shadow-md"
                    style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-[#FA812F] bg-orange-50"
                      : "text-gray-600 hover:text-[#FA812F] hover:bg-gray-50"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}

              <div className="pt-3 border-t border-gray-100 space-y-2">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700">
                      <User className="h-4 w-4 text-gray-400" />
                      <span>{user?.name || 'Account'}</span>
                    </div>
                    <Button variant="ghost" onClick={logout} className="w-full justify-start text-gray-600">
                      <LogOut className="h-4 w-4 mr-2" /> Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-[#FA812F] hover:bg-gray-50"
                    >
                      <User className="h-4 w-4" /> Sign In
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white"
                      style={{ background: 'linear-gradient(135deg, #FA812F 0%, #DD0303 100%)' }}
                    >
                      Get Started <ChevronRight className="h-4 w-4" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
