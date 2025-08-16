import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { allowRequest } from '@/lib/rateLimit'

const InterestSchema = z.object({
  name: z.string().min(2),
  age: z.coerce.number().int().positive().optional().nullable(),
  school: z.string().optional().nullable(),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  accessibility: z.string().optional().nullable(),
  guardianName: z.string().optional().nullable(),
  guardianEmail: z.string().email().optional().nullable(),
  guardianPhone: z.string().optional().nullable(),
})

export async function POST(req: Request){
  const rl = allowRequest(req, 'interest', 5, 10*60*1000)
  if (!rl.allowed) return NextResponse.json({ ok:false, error:'Rate limited', retryAfter: rl.retryAfter }, { status: 429 })
  try{
    const body = await req.json()
    const data = InterestSchema.parse(body)
    const saved = await prisma.passportInterest.create({ data })
    return NextResponse.json({ ok:true, id: saved.id })
  }catch(err:any){
    if (err?.issues) return NextResponse.json({ ok:false, errors: err.issues }, { status: 400 })
    return NextResponse.json({ ok:false, error: 'Unexpected error' }, { status: 500 })
  }
}
