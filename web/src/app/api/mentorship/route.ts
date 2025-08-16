import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { allowRequest } from '@/lib/rateLimit'

const MentorSchema = z.object({
  name: z.string().min(2),
  role: z.string().optional().nullable(),
  organization: z.string().optional().nullable(),
  email: z.string().email(),
  timezone: z.string().optional().nullable(),
  topics: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
})

export async function POST(req: Request){
  const rl = allowRequest(req, 'mentor', 5, 10*60*1000)
  if (!rl.allowed) return NextResponse.json({ ok:false, error:'Rate limited', retryAfter: rl.retryAfter }, { status: 429 })
  try{
    const body = await req.json()
    const data = MentorSchema.parse(body)
    const saved = await prisma.mentorRequest.create({ data })
    return NextResponse.json({ ok:true, id: saved.id })
  }catch(err:any){
    if (err?.issues) return NextResponse.json({ ok:false, errors: err.issues }, { status: 400 })
    return NextResponse.json({ ok:false, error: 'Unexpected error' }, { status: 500 })
  }
}
