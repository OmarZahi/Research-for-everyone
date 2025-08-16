import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { allowRequest } from '@/lib/rateLimit'

const LabSchema = z.object({
  labName: z.string().min(2),
  address: z.string().optional().nullable(),
  manager: z.string().optional().nullable(),
  equipment: z.string().optional().nullable(),
  capacity: z.coerce.number().int().positive().optional().nullable(),
  ratios: z.string().optional().nullable(),
  ageLimits: z.string().optional().nullable(),
  policyUrl: z.string().url().optional().nullable(),
  economics: z.string().optional().nullable(),
  insurance: z.string().optional().nullable(),
})

export async function POST(req: Request){
  const rl = allowRequest(req, 'lab-apply', 3, 10*60*1000)
  if (!rl.allowed) return NextResponse.json({ ok:false, error:'Rate limited', retryAfter: rl.retryAfter }, { status: 429 })
  try{
    const body = await req.json()
    const data = LabSchema.parse(body)
    const saved = await prisma.labApplication.create({ data })
    return NextResponse.json({ ok:true, id: saved.id })
  }catch(err:any){
    if (err?.issues) return NextResponse.json({ ok:false, errors: err.issues }, { status: 400 })
    return NextResponse.json({ ok:false, error: 'Unexpected error' }, { status: 500 })
  }
}
