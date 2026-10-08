const APP_TITLE = 'Meteorology Prep'
const APP_ICON = '/favicon.svg'

const TOPIC_TITLES: Record<string, string> = {
  meteorology: 'Meteorology',
  climatology: 'Climatology',
  physics: 'Basics of Physics',
  mathematics: 'Basic Mathematics',
  environment: 'Environmental Studies',
  research: 'Research and Analysis',
  seismology: 'Seismology',
  geology: 'Basic Geology',
  english: 'English',
  oscar: 'Oscars',
}

export function topicTitle(slug: string) {
  return TOPIC_TITLES[slug] ?? slug
}

function iconLink() {
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/svg+xml'
    document.head.appendChild(link)
  }
  return link
}

export function applyBrand(title: string, icon: string) {
  document.title = title
  const link = iconLink()
  link.type = 'image/svg+xml'
  link.href = icon
}

export function applyAppBrand() {
  applyBrand(APP_TITLE, APP_ICON)
}

export function applyTopicBrand(slug: string, title = topicTitle(slug)) {
  applyBrand(`${title} · Prep`, `/favicons/${slug}.svg`)
}
