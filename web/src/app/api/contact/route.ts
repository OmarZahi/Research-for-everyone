import { z } from 'zod'
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

const ContactSchema = z.object({
  type: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  organization: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  message: z.string().min(5),
})

export async function POST(req: Request){
  try{
    const body = await req.json()
    const data = ContactSchema.parse(body)
    const saved = await prisma.contactMessage.create({ data })
    return NextResponse.json({ ok:true, id: saved.id })
  }catch(err:any){
    if (err?.issues) return NextResponse.json({ ok:false, errors: err.issues }, { status: 400 })
    return NextResponse.json({ ok:false, error: 'Unexpected error' }, { status: 500 })
  }
}
