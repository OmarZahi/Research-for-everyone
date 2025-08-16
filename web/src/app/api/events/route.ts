import { NextResponse } from 'next/server'

export async function POST(req: Request){
  try{
    const payload = await req.json()
    // In real deployment, forward to your analytics provider.
    console.log('analytics', payload)
    return NextResponse.json({ ok:true })
  }catch{
    return NextResponse.json({ ok:false }, { status: 400 })
  }
}
