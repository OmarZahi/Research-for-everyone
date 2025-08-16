"use client";
import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState<'idle'|'saving'|'success'|'error'>('idle')
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    setStatus('saving')
    const res = await fetch('/api/contact', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) { setStatus('success'); (e.target as HTMLFormElement).reset() } else setStatus('error')
  }
  return (
    <main id="main" className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="opacity-80">We’ll reply within 3 business days. For incidents, use the incident form.</p>
        <form className="card mt-4" aria-label="Contact form" onSubmit={onSubmit}>
          <div className="grid-2">
            <label className="block text-sm opacity-80">Type
              <select name="type" required defaultValue="student" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }}>
                <option value="student">Student</option>
                <option value="lab">Lab/University</option>
                <option value="school">School</option>
                <option value="mentor">Mentor/Advisor</option>
                <option value="media">Media</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="block text-sm opacity-80">Organization
              <input name="organization" type="text" placeholder="Optional" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
          </div>
          <div className="grid-2" style={{ marginTop:'0.5rem' }}>
            <label className="block text-sm opacity-80">Name
              <input name="name" type="text" required style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
            <label className="block text-sm opacity-80">Email
              <input name="email" type="email" required style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
          </div>
          <div className="grid-2" style={{ marginTop:'0.5rem' }}>
            <label className="block text-sm opacity-80">Phone
              <input name="phone" type="tel" placeholder="Optional" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
            <label className="block text-sm opacity-80">City
              <input name="city" type="text" placeholder="Optional" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
          </div>
          <label className="block text-sm opacity-80" style={{ marginTop:'0.5rem' }}>Message
            <textarea name="message" rows={5} required style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
          </label>
          <label className="block text-sm opacity-80" style={{ marginTop:'0.5rem' }}>
            <input type="checkbox" required /> I understand v1 is pilot-stage and low-risk only.
          </label>
          <button className="btn btn-primary" type="submit" style={{ marginTop:'0.75rem' }} disabled={status==='saving'}>
            {status==='saving' ? 'Sending…' : 'Send'}
          </button>
          {status==='success' && <p className="opacity-80 mt-2">Thanks — we’ll be in touch soon.</p>}
          {status==='error' && <p className="opacity-80 mt-2">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </main>
  )
}
