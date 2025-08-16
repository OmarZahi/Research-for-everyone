import Link from 'next/link'

export default function Page(){
  return (
    <main id="main">
      {/* Hero with background video */}
      <section className="hero" /* data-reveal */>
        <div className="hero-media" aria-hidden="true">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/microscope.png"
          >
            <source src="/media/connected-lab.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <h1>Safe, supervised lab access for students</h1>
          <p className="lead">We standardize safety training and coordinate operator-led sessions at partner labs so high-school and university students can do hands-on work—safely and legally.</p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" href="/passport">Get the Passport</Link>
            <Link className="btn btn-outline" href="/labs">Partner your Lab</Link>
            <Link className="btn btn-outline" href="/mentorship">Become a Mentor</Link>
          </div>
        </div>
      </section>

      {/* Credibility metrics */}
      <section className="py-6">
        <div className="container">
          <div className="card" /* data-reveal */>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4, minmax(0,1fr))', gap:'1rem' }}>
              <div><div style={{ fontSize:'2rem', fontWeight:800 }}>0 incidents</div><div className="opacity-80">Target across pilot</div></div>
              <div><div style={{ fontSize:'2rem', fontWeight:800 }}>12+ hosts</div><div className="opacity-80">In pipeline</div></div>
              <div><div style={{ fontSize:'2rem', fontWeight:800 }}>500+ hrs</div><div className="opacity-80">Supervised time planned</div></div>
              <div><div style={{ fontSize:'2rem', fontWeight:800 }}>100%</div><div className="opacity-80">Pre‑training required</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-10">
        <div className="container grid-3 home-grid" /* data-reveal */>
          <div className="card">
            <h3 className="font-semibold">Train</h3>
            <p className="opacity-80">Complete a 3–4 hour safety course and pass the exam.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Badge</h3>
            <p className="opacity-80">Earn a 12‑month Lab Readiness Passport.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Book</h3>
            <p className="opacity-80">Join supervised, pre‑approved sessions at host labs.</p>
          </div>
        </div>
      </section>

      {/* Product feature highlights */}
      <section className="py-10">
        <div className="container">
          <div className="grid-2" /* data-reveal */>
            <div className="card">
              <h3 className="font-semibold">Passport training</h3>
              <p className="opacity-80">Standardized BSL‑1 biosafety + makerspace safety. Short exam, annual renewal.</p>
              <div className="hero-ctas"><Link className="btn btn-primary" href="/passport">View curriculum</Link></div>
            </div>
            <div className="card">
              <h3 className="font-semibold">Operator‑led sessions</h3>
              <p className="opacity-80">Pre‑approved activities with fixed supervision ratios. Your host’s rules apply.</p>
              <div className="hero-ctas"><Link className="btn btn-outline" href="/sessions">See sessions</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial strip of images for credibility */}
      <section className="py-6">
        <div className="container">
          <div className="card" style={{ overflow:'hidden' }} /* data-reveal */>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(5, minmax(0,1fr))', gap:'.5rem' }}>
              <img src="/media/3d-printers.png" alt="Operator-supervised 3D printers at a university makerspace" style={{ width:'100%', height:'160px', objectFit:'cover', borderRadius:'.5rem' }} />
              <img src="/media/ppe-stilllife.png" alt="Neatly arranged lab PPE" style={{ width:'100%', height:'160px', objectFit:'cover', borderRadius:'.5rem' }} />
              <img src="/media/microscope.png" alt="Modern optical microscope close-up" style={{ width:'100%', height:'160px', objectFit:'cover', borderRadius:'.5rem' }} />
              <img src="/media/diverse-group.png" alt="Diverse group of students in a lab" style={{ width:'100%', height:'160px', objectFit:'cover', borderRadius:'.5rem' }} />
              <img src="/media/electronics-macro.png" alt="Macro of gloved hands assembling an electronics project" style={{ width:'100%', height:'160px', objectFit:'cover', borderRadius:'.5rem' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pilot details and capture */}
      <section className="py-6">
        <div className="container">
          <div className="card" /* data-reveal */>
            <p className="opacity-80"><strong>Who it’s for:</strong> High‑school (with guardian consent), undergrads, recent grads.</p>
            <p className="opacity-80"><strong>What we don’t do:</strong> BSL‑2+, hazardous chemistry, unsupervised work, human/animal research.</p>
            <p className="opacity-80"><strong>Pilot status:</strong> Recruiting Cairo hosts and advisors now. Join the pilot → <Link href="/mentorship">mentorship</Link> or <Link href="/labs">labs</Link>.</p>
            <form style={{ display:'flex', gap: '0.5rem', marginTop:'0.75rem', flexWrap:'wrap' }}>
              <input type="email" required placeholder="you@example.com" style={{ flex:'1 1 280px', padding:'0.75rem 0.875rem', borderRadius:'0.75rem', border:'1px solid var(--line)', background:'var(--bg)', color:'var(--text)' }} />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
