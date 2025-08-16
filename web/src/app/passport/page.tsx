export default function Passport(){
  return (
    <main id="main" className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold">Lab Readiness Passport (v0.1)</h1>
        <p className="opacity-80">A short safety course + assessment + consent/waiver that proves a participant is prepared for low-risk, supervised sessions. Badge valid 12 months, revocable.</p>

        <h2 className="mt-6 font-semibold">Modules (3–4 hours)</h2>
        <ul className="opacity-80">
          <li>• General lab safety (PPE, signage, housekeeping, emergencies)</li>
          <li>• BSL-1 only biosafety, no human/animal work</li>
          <li>• Basic electrical/mechanical safety (for fab tools)</li>
          <li>• Code of conduct & safeguarding; harassment reporting</li>
          <li>• Waste & cleanup; incident reporting</li>
          <li>• Guardian consent workflow (for minors)</li>
        </ul>

        <h2 className="mt-6 font-semibold">Assessment</h2>
        <p className="opacity-80">25–35-item quiz + instructor observation during demos.</p>

        <h2 className="mt-6 font-semibold">Deliverables</h2>
        <ul className="opacity-80">
          <li>• Digital badge + PDF certificate</li>
          <li>• We keep signed forms and attendance logs</li>
        </ul>

        <a className="btn btn-primary mt-6 inline-block" href="/contact?type=passport-interest">Enroll (pilot interest)</a>
      </div>
    </main>
  )
}
