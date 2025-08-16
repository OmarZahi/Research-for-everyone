export default function Labs(){
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    const res = await fetch('/api/labs/apply', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
    if (res.ok){ alert('Thanks — we will follow up.'); (e.target as HTMLFormElement).reset() } else alert('Submission failed')
  }
  return (
    <main id="main" className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold">Host supervised student sessions (low-risk, off-peak)</h1>
        <h2 className="mt-6 font-semibold">Value</h2>
        <ul className="opacity-80">
          <li>• Off-peak revenue or cost recovery on idle capacity</li>
          <li>• Pre-trained visitors; we handle consent/admin</li>
          <li>• Safety first: strict scope, fixed supervision ratios, your rules apply</li>
          <li>• Impact reporting: hours delivered, demographics, zero-incident goal</li>
        </ul>
        <h2 className="mt-6 font-semibold">Risk controls</h2>
        <ul className="opacity-80">
          <li>• Scope limited to BSL-1 + basic fab tools</li>
          <li>• You approve equipment and capacity; we follow your SOPs</li>
          <li>• Sign-in/out + PPE checks + incident log</li>
          <li>• Insurance: sessions run under host policy and/or event coverage as agreed in the MOU</li>
        </ul>
        <h2 className="mt-6 font-semibold">Economics</h2>
        <ul className="opacity-80">
          <li>• Option A: Ticket revenue share</li>
          <li>• Option B: Fixed facility fee per session (+ consumables pass-through)</li>
        </ul>
        <p className="opacity-80 mt-2">Operational flow: Inquiry → policy/SOP alignment → 1–2 pilot afternoons → review → expand or stop.</p>

        <h3 className="mt-6 font-semibold">Downloads (placeholders)</h3>
        <ul className="opacity-80">
          <li>• MOU draft (PDF)</li>
          <li>• Visitor policy template (PDF)</li>
          <li>• Sample supervision ratios (PDF)</li>
        </ul>

        <a className="btn btn-primary mt-6 inline-block" href="/contact?type=lab">Apply to partner</a>
        <form className="card mt-4" onSubmit={onSubmit}>
          <div className="grid-2">
            <label className="block text-sm opacity-80">Lab name
              <input name="labName" required style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
            <label className="block text-sm opacity-80">Manager
              <input name="manager" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
          </div>
          <div className="grid-2" style={{ marginTop:'.5rem' }}>
            <label className="block text-sm opacity-80">Equipment
              <input name="equipment" placeholder="Comma-separated" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
            <label className="block text-sm opacity-80">Capacity
              <input name="capacity" type="number" min={1} placeholder="Max students per session" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
            </label>
          </div>
          <label className="block text-sm opacity-80" style={{ marginTop:'.5rem' }}>Policy URL
            <input name="policyUrl" type="url" placeholder="Optional" style={{ display:'block', width:'100%', marginTop:'0.25rem', padding:'0.5rem 0.75rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
          </label>
          <button className="btn btn-primary" type="submit" style={{ marginTop:'0.75rem' }}>Apply</button>
        </form>
      </div>
    </main>
  )
}
