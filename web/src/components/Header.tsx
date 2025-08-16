"use client";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/passport', label: 'Passport' },
  { href: '/labs', label: 'Labs' },
  { href: '/safety', label: 'Safety' },
  { href: '/contact', label: 'Contact' },
]

export default function Header(){
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}> 
      <div className="container header-inner" style={{ height: '64px' }}>
        <Link href="/" className="brand" aria-label="Research for Everyone home">
          <Image src="/logo.svg" alt="Research for Everyone" width={24} height={24} />
          <span className="brand-text">Research for Everyone</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary" style={{ gap: '.75rem' }}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              className={`nav-link${pathname === l.href ? ' is-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/passport" className="btn btn-primary" data-track="cta:header-passport">Get Passport</Link>
          <button
            className="menu-btn"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            data-track="ui:menu"
          >Menu</button>
        </div>
      </div>

      {open && (
        <div className="mobile-drawer">
          <div className="container drawer-inner">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`drawer-link${pathname === l.href ? ' is-active' : ''}`}>
                {l.label}
              </Link>
            ))}
            <div className="drawer-actions">
              <Link href="/passport" className="btn btn-primary" onClick={() => setOpen(false)} data-track="cta:header-passport-mobile">Get Passport</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
