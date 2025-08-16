import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { allowRequest } from '@/lib/rateLimit'

const IncidentSchema = z.object({
  date: z.string().min(1),
  site: z.string().min(2),
  description: z.string().min(10),
  anonymous: z.coerce.boolean().optional().default(false)
})

export async function POST(req: Request){
  const rl = allowRequest(req, 'incident', 3, 10*60*1000)
  if (!rl.allowed) return NextResponse.json({ ok:false, error:'Rate limited', retryAfter: rl.retryAfter }, { status: 429 })
  try{
    const body = await req.json()
    const data = IncidentSchema.parse(body)
    const saved = await prisma.incidentReport.create({ data: { ...data, date: new Date(data.date) } })
    return NextResponse.json({ ok:true, id: saved.id })
  }catch(err:any){
    if (err?.issues) return NextResponse.json({ ok:false, errors: err.issues }, { status: 400 })
    return NextResponse.json({ ok:false, error: 'Unexpected error' }, { status: 500 })
  }
}
