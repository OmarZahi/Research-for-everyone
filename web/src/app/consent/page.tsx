export default function Consent(){
  return (
    <main id="main" className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold">Consent & Waiver</h1>
        <p className="opacity-80">Plain-language summary of guardian consent and participant waiver. Download the full PDF.</p>
        <div className="flex gap-3 mt-6" style={{ flexWrap:'wrap' }}>
          <a className="btn btn-outline" href="#">Download consent form</a>
        </div>
      </div>
    </main>
  )
}
