import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const out = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'themes')
fs.mkdirSync(out, { recursive: true })

function rand(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function svg(body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
${body}
</svg>
`
}

function stars(seed, n) {
  const r = rand(seed)
  let s = ''
  for (let i = 0; i < n; i++) {
    const x = Math.round(r() * 1600)
    const y = Math.round(r() * 900)
    const rad = r() < 0.12 ? 2.4 : r() < 0.4 ? 1.6 : 1
    const o = (0.55 + r() * 0.45).toFixed(2)
    s += `<circle cx="${x}" cy="${y}" r="${rad}" fill="#fff" opacity="${o}"/>`
    if (rad > 2) {
      s += `<path d="M${x - 7} ${y}h14M${x} ${y - 7}v14" stroke="#fff" stroke-width="0.8" opacity="0.8"/>`
    }
  }
  return s
}

const meteorology = svg(`
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#020610"/>
      <stop offset="0.45" stop-color="#071833"/>
      <stop offset="1" stop-color="#0c3260"/>
    </linearGradient>
    <linearGradient id="tail" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset="0.7" stop-color="#ffe7a3"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <radialGradient id="rock" cx="40%" cy="35%" r="70%">
      <stop offset="0" stop-color="#b7aa9c"/>
      <stop offset="0.55" stop-color="#6d6258"/>
      <stop offset="1" stop-color="#2c2622"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  ${stars(7, 140)}
  <g stroke="url(#tail)" stroke-width="5" stroke-linecap="round" fill="none">
    <path d="M980 70 L1280 210"/>
    <path d="M180 160 L430 40" stroke-width="3"/>
    <path d="M1080 420 L1460 560" stroke-width="4"/>
  </g>
  <circle cx="1284" cy="212" r="7" fill="#fff"/>
  <circle cx="434" cy="38" r="5" fill="#fff6d0"/>
  <circle cx="1464" cy="562" r="6" fill="#fff"/>
  <g transform="translate(210 690)">
    <ellipse cx="10" cy="78" rx="120" ry="18" fill="#000" opacity="0.45"/>
    <path d="M-90 20 C-50 -70 40 -80 100 -10 C130 30 90 70 10 74 C-70 78 -120 50 -90 20Z" fill="url(#rock)"/>
    <ellipse cx="-20" cy="0" rx="22" ry="14" fill="#3a342f" opacity="0.7"/>
    <ellipse cx="40" cy="18" rx="14" ry="10" fill="#3a342f" opacity="0.55"/>
    <ellipse cx="-48" cy="28" rx="10" ry="7" fill="#2a2522" opacity="0.6"/>
  </g>
  <g transform="translate(1320 250) rotate(-18) scale(0.72)">
    <path d="M-70 10 C-30 -50 50 -46 78 4 C96 36 40 58 -8 52 C-62 46 -96 28 -70 10Z" fill="url(#rock)"/>
    <ellipse cx="-8" cy="6" rx="16" ry="10" fill="#3a342f" opacity="0.65"/>
    <ellipse cx="28" cy="16" rx="8" ry="6" fill="#2a2522" opacity="0.55"/>
  </g>
`)

const climatology = svg(`
  <defs>
    <linearGradient id="day" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0b3f86"/>
      <stop offset="0.55" stop-color="#2f86d0"/>
      <stop offset="1" stop-color="#8fd0f2"/>
    </linearGradient>
    <radialGradient id="sun" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#fff4c2"/>
      <stop offset="0.6" stop-color="#ffcf4a"/>
      <stop offset="1" stop-color="#ffcf4a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#day)"/>
  <g transform="translate(1280 150)" stroke="#ffe08a" stroke-width="8" stroke-linecap="round">
    <path d="M0 -90 v30 M0 60 v30 M-90 0 h30 M60 0 h30 M-64 -64 l21 21 M43 43 l21 21 M-64 64 l21 -21 M43 -43 l21 -21"/>
    <circle r="78" fill="url(#sun)"/>
    <circle r="42" fill="#ffe56a"/>
  </g>
  <g fill="#ffffff">
    <g transform="translate(280 220)" opacity="0.96">
      <ellipse cx="0" cy="30" rx="120" ry="42"/>
      <ellipse cx="-70" cy="18" rx="58" ry="44"/>
      <ellipse cx="60" cy="8" rx="70" ry="50"/>
      <ellipse cx="10" cy="-6" rx="48" ry="40"/>
    </g>
    <g transform="translate(760 340)">
      <ellipse cx="0" cy="24" rx="150" ry="48"/>
      <ellipse cx="-90" cy="10" rx="70" ry="50"/>
      <ellipse cx="80" cy="0" rx="86" ry="56"/>
      <ellipse cx="8" cy="-16" rx="54" ry="42"/>
    </g>
    <g transform="translate(1180 520)" opacity="0.92">
      <ellipse cx="0" cy="20" rx="100" ry="36"/>
      <ellipse cx="-50" cy="8" rx="46" ry="34"/>
      <ellipse cx="48" cy="4" rx="52" ry="36"/>
    </g>
  </g>
  <g stroke="#d7f1ff" stroke-width="3" stroke-linecap="round" opacity="0.9">
    <path d="M700 400 l-18 70 M760 410 l-18 86 M820 400 l-18 64 M680 430 l-14 50"/>
  </g>
  <path d="M0 760 C200 700 360 820 560 750 C780 670 980 830 1200 740 C1380 680 1500 760 1600 720 V900 H0Z" fill="#e9f7ff" opacity="0.35"/>
`)

function atom(cx, cy, scale, hue) {
  return `<g transform="translate(${cx} ${cy}) scale(${scale})" fill="none" stroke="${hue}" stroke-width="3">
    <ellipse rx="92" ry="34"/>
    <ellipse rx="92" ry="34" transform="rotate(60)"/>
    <ellipse rx="92" ry="34" transform="rotate(120)"/>
    <circle r="10" fill="${hue}" stroke="none"/>
  </g>`
}

const physics = svg(`
  <rect width="1600" height="900" fill="#07091a"/>
  <g opacity="0.18" stroke="#8ea2ff" stroke-width="1">
    ${Array.from({ length: 12 }, (_, i) => `<path d="M0 ${70 + i * 70} H1600"/>`).join('')}
  </g>
  ${atom(280, 220, 1.15, '#d7e0ff')}
  ${atom(1240, 260, 0.85, '#9eb6ff')}
  ${atom(980, 680, 1.05, '#f0f4ff')}
  <path d="M80 520 C 180 420, 280 620, 380 520 S 580 420, 680 520 S 880 620, 980 520 S 1180 420, 1280 520 S 1480 620, 1560 500"
    fill="none" stroke="#7ee0ff" stroke-width="6"/>
  <g fill="#ffd56a" font-family="Georgia, serif" font-size="54" opacity="0.9">
    <text x="430" y="180">+</text>
    <text x="560" y="300">−</text>
    <text x="150" y="700">e−</text>
  </g>
`)

const mathMarks = ['−', '−', '+', '×', '÷', '=', '√', 'π', 'x²', '½', '−', '∑', '∞', '≠', '±', '%']
const math = (() => {
  const r = rand(21)
  let texts = ''
  for (let i = 0; i < 42; i++) {
    const mark = mathMarks[i % mathMarks.length]
    const x = Math.round(40 + r() * 1500)
    const y = Math.round(80 + r() * 780)
    const size = mark === '−' ? 92 + Math.round(r() * 70) : 48 + Math.round(r() * 46)
    const fill = mark === '−' ? '#fff4d2' : '#f4f7f2'
    const rot = Math.round(r() * 28 - 14)
    texts += `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" opacity="0.9" transform="rotate(${rot} ${x} ${y})" font-family="Georgia, 'Segoe UI', sans-serif">${mark}</text>`
  }
  return svg(`
    <rect width="1600" height="900" fill="#163028"/>
    <g stroke="#d7e6cf" stroke-width="2" opacity="0.18">
      ${Array.from({ length: 14 }, (_, i) => `<path d="M0 ${40 + i * 64} H1600"/>`).join('')}
    </g>
    ${texts}
  `)
})()

function tree(x, y, h, fill) {
  return `<polygon points="${x},${y - h} ${x - h * 0.42},${y} ${x + h * 0.42},${y}" fill="${fill}"/>
    <rect x="${x - h * 0.06}" y="${y}" width="${h * 0.12}" height="${h * 0.18}" fill="#2a1a10"/>`
}

const environment = svg(`
  <defs>
    <linearGradient id="esky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#08345c"/>
      <stop offset="0.5" stop-color="#1d7a4a"/>
      <stop offset="1" stop-color="#0c3d22"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#esky)"/>
  <circle cx="250" cy="150" r="58" fill="#ffe27a"/>
  <g fill="#b7f0c8" opacity="0.95">
    <ellipse cx="180" cy="280" rx="28" ry="14" transform="rotate(-30 180 280)"/>
    <ellipse cx="430" cy="160" rx="34" ry="16" transform="rotate(20 430 160)"/>
    <ellipse cx="620" cy="250" rx="26" ry="12" transform="rotate(-10 620 250)"/>
    <ellipse cx="980" cy="140" rx="30" ry="14" transform="rotate(35 980 140)"/>
    <ellipse cx="1240" cy="230" rx="36" ry="16" transform="rotate(-25 1240 230)"/>
    <ellipse cx="1460" cy="120" rx="24" ry="12" transform="rotate(15 1460 120)"/>
  </g>
  <path d="M0 560 C 220 480, 380 620, 620 540 C 860 460, 1040 640, 1280 530 C 1440 470, 1520 520, 1600 490 V900 H0Z" fill="#145c34"/>
  <path d="M0 680 C 260 600, 480 760, 760 670 C 1040 580, 1280 760, 1600 640 V900 H0Z" fill="#0c3f24"/>
  ${tree(180, 640, 150, '#08341c')}
  ${tree(300, 670, 190, '#062816')}
  ${tree(1240, 600, 170, '#08341c')}
  ${tree(1380, 640, 210, '#041c10')}
  ${tree(1100, 660, 120, '#0a3a20')}
`)

const research = svg(`
  <rect width="1600" height="900" fill="#1a1016"/>
  <g stroke="#e7c3cc" stroke-width="1.5" opacity="0.28">
    ${Array.from({ length: 10 }, (_, i) => `<path d="M120 ${120 + i * 70} H1480"/>`).join('')}
    ${Array.from({ length: 16 }, (_, i) => `<path d="M${140 + i * 86} 100 V800"/>`).join('')}
  </g>
  <path d="M140 760 H1480 M140 140 V760" stroke="#f4d5dc" stroke-width="4"/>
  <g fill="#f0b3c0">
    <rect x="240" y="520" width="70" height="240"/>
    <rect x="400" y="430" width="70" height="330"/>
    <rect x="560" y="360" width="70" height="400"/>
    <rect x="720" y="470" width="70" height="290"/>
    <rect x="880" y="300" width="70" height="460"/>
    <rect x="1040" y="250" width="70" height="510"/>
    <rect x="1200" y="390" width="70" height="370"/>
  </g>
  <path d="M180 640 C 360 600, 520 420, 700 460 S 1040 220, 1360 180" fill="none" stroke="#fff" stroke-width="6"/>
  <g fill="#fff">
    <circle cx="280" cy="600" r="8"/>
    <circle cx="460" cy="500" r="8"/>
    <circle cx="700" cy="450" r="8"/>
    <circle cx="920" cy="300" r="8"/>
    <circle cx="1180" cy="230" r="8"/>
    <circle cx="1380" cy="190" r="8"/>
  </g>
`)

let wave = 'M 60 430'
for (let x = 60; x <= 1540; x += 10) {
  const burst = Math.exp(-((x - 860) ** 2) / 70000)
  const amp = (x < 420 ? 8 : 10) + burst * 150 * Math.sin(x / 16)
  wave += ` L ${x} ${Math.round(430 - amp)}`
}

const seismology = svg(`
  <rect width="1600" height="900" fill="#140c09"/>
  <g fill="none" stroke="#ffb087" stroke-width="3" opacity="0.7">
    <circle cx="820" cy="470" r="90"/>
    <circle cx="820" cy="470" r="170"/>
    <circle cx="820" cy="470" r="260"/>
    <circle cx="820" cy="470" r="350"/>
  </g>
  <path d="M760 40 L700 220 L820 360 L690 560 L840 860" fill="none" stroke="#f4e2d4" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="${wave}" fill="none" stroke="#ffd2a8" stroke-width="5"/>
  <circle cx="820" cy="470" r="14" fill="#ff8a4a"/>
`)

const bands = [
  ['#1c2328', 110],
  ['#c4a06a', 80],
  ['#5c4032', 130],
  ['#e6d3b0', 70],
  ['#31424a', 100],
  ['#8d4e32', 90],
  ['#d8c2a0', 75],
  ['#2a2420', 120],
  ['#6e8a78', 125],
]
let y = 0
const strata = bands
  .map(([color, h]) => {
    const d = `<rect x="0" y="${y}" width="1600" height="${h + 8}" fill="${color}"/>`
    y += h
    return d
  })
  .join('')

const geology = svg(`
  ${strata}
  <path d="M420 0 C 460 120, 380 200, 450 340 C 520 480, 400 560, 470 900" fill="none" stroke="#1a120e" stroke-width="8" opacity="0.55"/>
  <path d="M1080 0 C 1000 160, 1140 280, 1040 460 C 960 620, 1120 700, 1020 900" fill="none" stroke="#1a120e" stroke-width="6" opacity="0.4"/>
  <g transform="translate(250 360)">
    <polygon points="0,-70 46,20 18,78 -28,60 -52,8" fill="#dce7ea" stroke="#203038" stroke-width="4"/>
    <polygon points="0,-70 18,10 -16,8" fill="#ffffff" opacity="0.7"/>
  </g>
`)

const letters = [
  ['A', 120, 160, 140],
  ['b', 380, 300, 120],
  ['?', 640, 180, 150],
  ['Q', 980, 260, 130],
  ['is', 200, 560, 100],
  ['the', 520, 640, 110],
  [';', 900, 520, 140],
  ['"', 1280, 180, 130],
  ['e', 1400, 480, 120],
  ['and', 1180, 700, 90],
  ['of', 760, 800, 90],
  ['R', 80, 820, 110],
]
const english = svg(`
  <rect width="1600" height="900" fill="#1c120e"/>
  <g stroke="#f3e6d4" stroke-width="1" opacity="0.15">
    ${Array.from({ length: 18 }, (_, i) => `<path d="M40 ${60 + i * 46} H1560"/>`).join('')}
  </g>
  <g fill="#f6ead8" font-family="Georgia, 'Times New Roman', serif">
    ${letters
      .map(
        ([ch, x, yy, size]) =>
          `<text x="${x}" y="${yy}" font-size="${size}" opacity="0.92">${ch}</text>`,
      )
      .join('')}
  </g>
`)

function filmHoles(x) {
  let s = ''
  for (let yy = 28; yy < 900; yy += 52) {
    s += `<rect x="${x}" y="${yy}" width="28" height="22" rx="4" fill="#100c08"/>`
  }
  return s
}

const oscar = svg(`
  <defs>
    <radialGradient id="spot" cx="50%" cy="20%" r="70%">
      <stop offset="0" stop-color="#f0d78a"/>
      <stop offset="0.35" stop-color="#8a6418" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#070605" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="#070605"/>
  <rect width="1600" height="900" fill="url(#spot)"/>
  <rect x="0" y="0" width="78" height="900" fill="#e2b340"/>
  <rect x="1522" y="0" width="78" height="900" fill="#e2b340"/>
  ${filmHoles(25)}
  ${filmHoles(1547)}
  <g fill="#f3d78a">
    <polygon points="300,120 318,168 370,168 328,198 344,248 300,218 256,248 272,198 230,168 282,168"/>
    <polygon points="1250,220 1266,262 1312,262 1276,288 1290,332 1250,306 1210,332 1224,288 1188,262 1234,262"/>
    <polygon points="1380,620 1398,668 1450,668 1408,698 1424,748 1380,718 1336,748 1352,698 1310,668 1362,668"/>
    <polygon points="220,640 234,674 272,674 242,696 252,732 220,710 188,732 198,696 168,674 206,674"/>
  </g>
  <g transform="translate(800 470)" fill="#f0c95a">
    <circle cy="-150" r="36"/>
    <path d="M-28 -120 L-70 40 L-36 150 L36 150 L70 40 L28 -120 Z"/>
    <rect x="-78" y="150" width="156" height="22" rx="4"/>
    <rect x="-90" y="176" width="180" height="16"/>
  </g>
`)

const files = {
  meteorology,
  climatology,
  physics,
  mathematics: math,
  environment,
  research,
  seismology,
  geology,
  english,
  oscar,
}

for (const [name, markup] of Object.entries(files)) {
  fs.writeFileSync(path.join(out, `${name}.svg`), markup)
  console.log(name, markup.length)
}
