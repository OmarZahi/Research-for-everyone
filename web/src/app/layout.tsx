import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import ScrollReveal from '../components/ScrollReveal'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:5173'),
  title: {
    default: 'Research for Everyone',
    template: '%s · Research for Everyone',
  },
  description: 'Safe, supervised lab access for students. BSL-1 biology and basic fabrication only.',
  openGraph: {
    type: 'website',
    title: 'Research for Everyone',
    description: 'Safe, supervised lab access for students. BSL-1 biology and basic fabrication only.',
    url: '/',
    siteName: 'Research for Everyone',
    images: [{ url: '/logo.svg' }],
  },
  twitter: {
    card: 'summary',
    title: 'Research for Everyone',
    description: 'Safe, supervised lab access for students. BSL-1 biology and basic fabrication only.',
    images: ['/logo.svg'],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0f19' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <ScrollReveal />
        <Header />
        <div className="border-b" style={{ borderColor: 'var(--line)', background:'color-mix(in oklab, var(--bg), transparent 6%)' }}>
          <div className="container py-2 text-sm" role="note" aria-label="Pilot status and scope">
            <p className="opacity-80"><strong>Status:</strong> Pilot stage — not yet operating. Recruiting mentors and host labs. Target: first Cairo pilots in late 2025.</p>
            <p className="opacity-80"><strong>Scope:</strong> Low-risk only: BSL-1 biology and basic digital fabrication. No pathogens. No hazardous chemistry. No unsupervised access.</p>
            <p className="opacity-80"><strong>Minors:</strong> Under 18 requires guardian consent and chaperone/supervision.</p>
          </div>
        </div>
        {children}
        <footer className="py-8 mt-10 text-muted border-t" style={{ borderColor: 'var(--line)' }}>
          <div className="container">
            <div className="flex flex-wrap gap-3">
              <Link href="/about">About</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/media">Media</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/code-of-conduct">Code of Conduct</Link>
              <Link href="/consent">Consent</Link>
              <Link href="/incident-report">Incident Report</Link>
            </div>
            <p className="opacity-70 mt-2">© {new Date().getFullYear()} Research for Everyone</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
