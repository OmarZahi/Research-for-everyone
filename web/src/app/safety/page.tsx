export default function Safety(){
  return (
    <main id="main" className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold">Safety & Policies (v1)</h1>
        <p className="opacity-80">Scope: Allowed — BSL-1 biology; basic digital fabrication. Not allowed — pathogens, hazardous/volatile chemicals, pressurized/high-energy systems, animal/human research, unsupervised work.</p>
        <p className="opacity-80 mt-2">Supervision ratios (defaults): fab tools 1:8; wet benches 1:4 (or stricter per host).</p>
        <p className="opacity-80 mt-2">PPE: Safety glasses, lab coat (when applicable), gloves per SOP; long pants/closed shoes.</p>
        <p className="opacity-80 mt-2">Consent & minors: Under 18 require guardian consent; named chaperone; photo/video opt-in only.</p>
        <p className="opacity-80 mt-2">Incidents: Report immediately to supervisor; complete incident form within 24h.</p>
        <p className="opacity-80 mt-2">Data/IP: Students keep learning artifacts; host retains instrument data unless otherwise agreed.</p>
        <div className="flex gap-3 mt-6" style={{ flexWrap:'wrap' }}>
          <a className="btn btn-outline" href="/code-of-conduct">Read Code of Conduct</a>
          <a className="btn btn-primary" href="/incident-report">Report a concern</a>
        </div>
      </div>
    </main>
  )
}
