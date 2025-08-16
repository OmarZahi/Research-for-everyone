export function track(event: string, props?: Record<string, any>){
  if (typeof window === 'undefined') return
  const payload = JSON.stringify({ event, props, ts: Date.now(), path: location.pathname })
  if (navigator.sendBeacon){
    const blob = new Blob([payload], { type: 'application/json' })
    navigator.sendBeacon('/api/events', blob)
  } else {
    fetch('/api/events', { method: 'POST', headers:{ 'Content-Type': 'application/json' }, body: payload }).catch(()=>{})
  }
}
