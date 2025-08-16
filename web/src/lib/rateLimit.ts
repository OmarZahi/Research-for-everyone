type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()

function getIp(req: Request){
  const h = req.headers
  const xff = h.get('x-forwarded-for') || ''
  const ip = (h.get('cf-connecting-ip') || xff.split(',')[0] || h.get('x-real-ip') || '127.0.0.1').trim()
  return ip
}

export function allowRequest(req: Request, key: string, limit = 5, windowMs = 5 * 60 * 1000){
  const ip = getIp(req)
  const bucketKey = `${key}:${ip}`
  const now = Date.now()
  const b = buckets.get(bucketKey)
  if (!b || now > b.resetAt){
    buckets.set(bucketKey, { count: 1, resetAt: now + windowMs })
    return { allowed: true, remaining: limit - 1 }
  }
  if (b.count >= limit){
    return { allowed: false, remaining: 0, retryAfter: Math.max(0, Math.ceil((b.resetAt - now)/1000)) }
  }
  b.count += 1
  return { allowed: true, remaining: limit - b.count }
}
