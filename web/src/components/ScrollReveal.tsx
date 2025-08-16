"use client";
import { useEffect } from 'react'
import { track } from '@/lib/analytics'

export default function ScrollReveal(){
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Reveal
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!reduce && 'IntersectionObserver' in window){
      const io = new IntersectionObserver((entries) => {
        for (const e of entries){
          if (e.isIntersecting){
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
      els.forEach(el => io.observe(el))
      return () => io.disconnect()
    }else{
      els.forEach(el => el.classList.add('is-visible'))
    }
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const hero = document.querySelector<HTMLElement>('.hero-media')
    if (!hero) return
    const onScroll = () => {
      const y = window.scrollY
      hero.style.transform = `translateY(${Math.min(20, y * 0.08)}px)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement
      const el = target?.closest?.('[data-track]') as HTMLElement | null
      if (!el) return
      const val = el.getAttribute('data-track') || 'click'
      const [event, id] = val.includes(':') ? val.split(':',2) : ['click', val]
      track(event, { id })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
