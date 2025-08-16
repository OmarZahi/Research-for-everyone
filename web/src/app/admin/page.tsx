import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export default async function AdminPage(){
  if (process.env.NODE_ENV !== 'development') {
    return (
      <main className="container" style={{ padding:'4rem 0' }}>
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="opacity-80">Admin view is only available in development.</p>
      </main>
    )
  }

  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' }, take: 200 })

  return (
    <main id="main" className="py-10">
      <div className="container">
        <h1 className="text-3xl font-bold">Submissions</h1>
        <div className="card" style={{ marginTop:'1rem', overflowX:'auto' }}>
          <h2 className="font-semibold" style={{ marginBottom:'.5rem' }}>Contact Messages ({messages.length})</h2>
          <table style={{ width:'100%', borderCollapse:'separate', borderSpacing:0 }}>
            <thead>
              <tr style={{ textAlign:'left', fontSize:'0.875rem', opacity:.8 }}>
                <th style={{ padding:'0.5rem .75rem', borderBottom:'1px solid var(--line)' }}>Created</th>
                <th style={{ padding:'0.5rem .75rem', borderBottom:'1px solid var(--line)' }}>Type</th>
                <th style={{ padding:'0.5rem .75rem', borderBottom:'1px solid var(--line)' }}>Name</th>
                <th style={{ padding:'0.5rem .75rem', borderBottom:'1px solid var(--line)' }}>Email</th>
                <th style={{ padding:'0.5rem .75rem', borderBottom:'1px solid var(--line)' }}>Org</th>
                <th style={{ padding:'0.5rem .75rem', borderBottom:'1px solid var(--line)' }}>City</th>
                <th style={{ padding:'0.5rem .75rem', borderBottom:'1px solid var(--line)' }}>Phone</th>
                <th style={{ padding:'0.5rem .75rem', borderBottom:'1px solid var(--line)' }}>Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((m: any) => (
                <tr key={m.id} style={{ borderBottom:'1px solid var(--line)' }}>
                  <td style={{ padding:'0.5rem .75rem', whiteSpace:'nowrap' }}>{new Date(m.createdAt).toLocaleString()}</td>
                  <td style={{ padding:'0.5rem .75rem' }}>{m.type}</td>
                  <td style={{ padding:'0.5rem .75rem' }}>{m.name}</td>
                  <td style={{ padding:'0.5rem .75rem' }}><a href={`mailto:${m.email}`}>{m.email}</a></td>
                  <td style={{ padding:'0.5rem .75rem' }}>{m.organization ?? ''}</td>
                  <td style={{ padding:'0.5rem .75rem' }}>{m.city ?? ''}</td>
                  <td style={{ padding:'0.5rem .75rem' }}>{m.phone ?? ''}</td>
                  <td style={{ padding:'0.5rem .75rem', maxWidth:480 }}>
                    <div style={{ whiteSpace:'pre-wrap' }}>{m.message}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="opacity-80 text-sm" style={{ marginTop:'0.75rem' }}>Tip: Use Prisma Studio for a full DB view.</p>
      </div>
    </main>
  )
}
