export default function IncidentReport(){
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    const res = await fetch('/api/incident-report', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    if (res.ok){ alert('Thanks — incident recorded.'); (e.target as HTMLFormElement).reset() } else alert('Submission failed')
  }
  return (
    <main id="main" className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold">Incident Report</h1>
        <p className="opacity-80">Short form (date, site, description; anonymous option for conduct issues).</p>
        <form className="card mt-4" aria-label="Incident report form" onSubmit={onSubmit}>
          <label className="block text-sm opacity-80">Date
            <input name="date" type="date" required style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
          </label>
          <label className="block text-sm opacity-80" style={{ marginTop:'0.75rem' }}>Site
            <input name="site" type="text" required placeholder="Host lab name" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
          </label>
          <label className="block text-sm opacity-80" style={{ marginTop:'0.75rem' }}>Description
            <textarea name="description" required rows={5} placeholder="What happened?" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
          </label>
          <label className="block text-sm opacity-80" style={{ marginTop:'0.75rem' }}>
            <input name="anonymous" type="checkbox" /> Submit anonymously (conduct issues only)
          </label>
          <button className="btn btn-primary" type="submit" style={{ marginTop:'0.75rem' }}>Submit</button>
        </form>
      </div>
    </main>
  )
}
