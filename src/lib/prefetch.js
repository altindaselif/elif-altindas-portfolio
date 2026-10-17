const asked = new Set()

/* Asks the browser to fetch a case study screenshot before the visitor
   clicks, so the page it belongs to opens with the image already cached.
   A prefetch is a hint at low priority, so it never competes with what
   the current page still needs. */
export default function prefetchShot(slug) {
  if (!slug || asked.has(slug)) return
  asked.add(slug)

  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.as = 'image'
  link.href = `/shots/${slug}-1400.webp`
  document.head.appendChild(link)
}
