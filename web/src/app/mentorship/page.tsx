export default function Mentorship(){
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    const res = await fetch('/api/mentorship', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    if (res.ok){ alert('Thanks — we will reach out.'); (e.target as HTMLFormElement).reset() } else alert('Submission failed')
  }
  return (
    <main id="main" className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold">Advise the pilot (20 minutes is enough)</h1>
        <p className="opacity-80">We want critical feedback on safety, supervision ratios, visitor policies, and pilot design before launch.</p>
        <form className="card mt-4" onSubmit={onSubmit}>
          <div className="grid-2">
            <label className="block text-sm opacity-80">Name
              <input name="name" required style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
            <label className="block text-sm opacity-80">Email
              <input name="email" type="email" required style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
          </div>
          <div className="grid-2" style={{ marginTop:'.5rem' }}>
            <label className="block text-sm opacity-80">Role
              <input name="role" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
            <label className="block text-sm opacity-80">Organization
              <input name="organization" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
          </div>
          <div className="grid-2" style={{ marginTop:'.5rem' }}>
            <label className="block text-sm opacity-80">Timezone
              <input name="timezone" placeholder="e.g., GMT+2" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
            <label className="block text-sm opacity-80">Topics
              <input name="topics" placeholder="Optional" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
          </div>
          <label className="block text-sm opacity-80" style={{ marginTop:'.5rem' }}>Message
            <textarea name="message" rows={4} placeholder="Optional" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
          </label>
          <button className="btn btn-primary" type="submit" style={{ marginTop:'0.75rem' }}>Submit</button>
        </form>
      </div>
    </main>
  )
}
