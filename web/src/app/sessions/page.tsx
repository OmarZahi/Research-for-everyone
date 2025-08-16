export default function Sessions(){
  return (
    <main id="main" className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold">Upcoming sessions (pilot)</h1>
        <p className="opacity-80">We’re coordinating host labs. Add your email to get notified when the first two sessions open.</p>
        <form className="card mt-4" aria-label="Notify me">
          <label htmlFor="notify-email" className="block text-sm opacity-80">Email</label>
          <div style={{ display:'flex', gap: '0.5rem', marginTop:'0.5rem' }}>
            <input id="notify-email" type="email" required placeholder="you@example.com" style={{ flex:1, padding:'0.75rem 0.875rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }}/>
            <button className="btn btn-primary" type="submit">Notify me</button>
          </div>
        </form>

        <div className="grid-2 mt-6">
          <article className="card">
            <h2 className="font-semibold">Proposed: 3D Printing Basics (Operator-Supervised)</h2>
            <p className="opacity-80 text-sm">Host: [TBD Cairo fab lab] · Duration: 2h · Capacity: 10 · Prerequisite: Passport · PPE: yes</p>
            <button className="btn btn-outline" style={{ marginTop: '0.5rem' }}>Register interest</button>
          </article>
          <article className="card">
            <h2 className="font-semibold">Proposed: Microscopy Demo Day (Observation-First)</h2>
            <p className="opacity-80 text-sm">Host: [TBD university lab] · Duration: 2h · Capacity: 12 · Prerequisite: Passport · PPE: yes</p>
            <button className="btn btn-outline" style={{ marginTop: '0.5rem' }}>Register interest</button>
          </article>
        </div>
        <p className="opacity-70 text-sm mt-4">Do not name real hosts until confirmed.</p>
      </div>
    </main>
  )
}
