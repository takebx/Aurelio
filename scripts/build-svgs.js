import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve(process.cwd(), 'public/assets/img');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. borsa-intreccio.svg (400x500)
const borsaIntreccio = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#F5F1E9"/>
      <stop offset="100%" stop-color="#E2DCD0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="14"/>
      <feOffset dx="0" dy="24" result="offsetblur"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.18"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <pattern id="intreccio" width="16" height="16" patternUnits="userSpaceOnUse">
      <rect width="16" height="16" fill="#1A1816"/>
      <rect x="0" y="0" width="7" height="7" fill="#26221E"/>
      <rect x="8" y="8" width="7" height="7" fill="#26221E"/>
      <line x1="0" y1="7.5" x2="16" y2="7.5" stroke="#12100E" stroke-width="0.8"/>
      <line x1="7.5" y1="0" x2="7.5" y2="16" stroke="#12100E" stroke-width="0.8"/>
    </pattern>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EAD198"/>
      <stop offset="40%" stop-color="#B8964F"/>
      <stop offset="70%" stop-color="#D7B56B"/>
      <stop offset="100%" stop-color="#8F7132"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#bg)"/>
  <!-- Floor shadow -->
  <ellipse cx="200" cy="408" rx="95" ry="18" fill="rgba(11,11,11,0.18)" filter="blur(10px)"/>
  <!-- Bag Group -->
  <g filter="url(#shadow)">
    <!-- Handle -->
    <path d="M152 240 C152 165, 248 165, 248 240" fill="none" stroke="#221F1C" stroke-width="16" stroke-linecap="round"/>
    <path d="M152 240 C152 165, 248 165, 248 240" fill="none" stroke="#141210" stroke-width="12" stroke-linecap="round"/>
    <!-- Bag body -->
    <rect x="124" y="224" width="152" height="160" rx="26" fill="url(#intreccio)"/>
    <!-- Flap -->
    <path d="M124 236 C124 220 136 220 150 220 L250 220 C264 220 276 220 276 236 L276 312 C276 332 244 336 200 336 C156 336 124 332 124 312 Z" fill="url(#intreccio)"/>
    <path d="M124 312 C124 332 156 336 200 336 C244 336 276 332 276 312" fill="none" stroke="#100E0C" stroke-width="2"/>
    <!-- Feet -->
    <ellipse cx="148" cy="384" rx="7" ry="4" fill="#0C0A09"/>
    <ellipse cx="252" cy="384" rx="7" ry="4" fill="#0C0A09"/>
    <!-- Gold Clasp -->
    <rect x="184" y="318" width="32" height="24" rx="5" fill="url(#gold)"/>
    <rect x="190" y="324" width="20" height="12" rx="3" fill="#181512"/>
    <circle cx="200" cy="330" r="2" fill="url(#gold)"/>
  </g>
</svg>`;

// 2. shopper-avorio.svg (400x500)
const shopperAvorio = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg2" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#F7F4EE"/>
      <stop offset="100%" stop-color="#E5DECFA0"/>
    </radialGradient>
    <linearGradient id="leather" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F2EDE2"/>
      <stop offset="100%" stop-color="#E2D8C3"/>
    </linearGradient>
    <linearGradient id="goldHdr" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C29F55"/>
      <stop offset="50%" stop-color="#E4C885"/>
      <stop offset="100%" stop-color="#B28F45"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#bg2)"/>
  <ellipse cx="200" cy="412" rx="104" ry="16" fill="rgba(11,11,11,0.14)" filter="blur(8px)"/>
  <g>
    <!-- Handles -->
    <path d="M165 220 C165 160 190 160 190 220" fill="none" stroke="#D3C7B2" stroke-width="8" stroke-linecap="round"/>
    <path d="M210 220 C210 160 235 160 235 220" fill="none" stroke="#D3C7B2" stroke-width="8" stroke-linecap="round"/>
    <!-- Tote Body -->
    <polygon points="120,215 280,215 292,398 108,398" fill="url(#leather)" stroke="#CFC3AD" stroke-width="1.5"/>
    <!-- Top cuff -->
    <polygon points="119,215 281,215 283,236 117,236" fill="#E8DEC9" opacity="0.6"/>
    <!-- Saddle Stitching -->
    <polygon points="127,225 273,225 283,388 117,388" fill="none" stroke="#9A8F7D" stroke-width="1.2" stroke-dasharray="4 3"/>
    <!-- Gold Bridge bar -->
    <rect x="186" y="208" width="28" height="10" rx="3" fill="url(#goldHdr)"/>
    <!-- Embossed AR Monogram -->
    <circle cx="200" cy="312" r="26" fill="none" stroke="#C5B79F" stroke-width="1.8"/>
    <circle cx="200" cy="312" r="21" fill="none" stroke="#C5B79F" stroke-width="0.8" stroke-dasharray="2 2"/>
    <text x="200" y="318" text-anchor="middle" font-family="'Bodoni Moda', serif" font-size="14" fill="#9A8C74" letter-spacing="2">AR</text>
  </g>
</svg>`;

// 3. mocassino-roma.svg (400x500)
const mocassinoRoma = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg3" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#F5F2EB"/>
      <stop offset="100%" stop-color="#E2DCD1"/>
    </radialGradient>
    <linearGradient id="leatherBrown" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3D291D"/>
      <stop offset="45%" stop-color="#2D1C12"/>
      <stop offset="100%" stop-color="#1A1009"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#bg3)"/>
  <ellipse cx="205" cy="378" rx="122" ry="16" fill="rgba(11,11,11,0.2)" filter="blur(9px)"/>
  <g transform="translate(0, -10)">
    <!-- Heel -->
    <rect x="100" y="344" width="46" height="15" rx="2" fill="#0E0906"/>
    <!-- Sole -->
    <path d="M96 340 L318 340 C322 340 324 345 320 348 L96 348 Z" fill="#0E0906"/>
    <!-- Blake Stitch line -->
    <line x1="102" y1="344" x2="314" y2="344" stroke="#9E8D77" stroke-width="1.2" stroke-dasharray="3 3"/>
    <!-- Loafer Upper -->
    <path d="M102 338 C100 286 130 252 170 252 C210 252 245 280 300 305 C325 318 322 338 318 338 Z" fill="url(#leatherBrown)"/>
    <!-- Penny strap slot -->
    <path d="M165 264 C195 268 220 280 236 295" stroke="#180F08" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="180" cy="270" rx="10" ry="4" fill="#0F0905"/>
    <!-- Subtle shine -->
    <path d="M135 272 C160 260 210 262 260 292" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>`;

// 4. decollate-veluto.svg (400x500)
const decollateVeluto = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg4" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#F6F2EC"/>
      <stop offset="100%" stop-color="#E3DCD2"/>
    </radialGradient>
    <linearGradient id="velvet" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6F242F"/>
      <stop offset="40%" stop-color="#4F161E"/>
      <stop offset="100%" stop-color="#2D0B11"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#bg4)"/>
  <ellipse cx="210" cy="392" rx="110" ry="16" fill="rgba(11,11,11,0.16)" filter="blur(8px)"/>
  <g transform="translate(10, 15)">
    <!-- Heel stem -->
    <rect x="118" y="340" width="16" height="52" rx="3" fill="#24070B"/>
    <!-- Outsole edge -->
    <path d="M116 340 L310 340" stroke="#DFD5C6" stroke-width="2"/>
    <!-- Velvet Upper -->
    <path d="M120 338 C115 285 150 280 185 280 C218 280 250 300 308 338 Z" fill="url(#velvet)"/>
    <!-- Collar curve -->
    <path d="M134 290 C155 282 188 284 205 310" stroke="#1D0509" stroke-width="3" fill="#1F060A"/>
    <!-- Gold accent sphere at toe -->
    <circle cx="295" cy="316" r="3.5" fill="#E2C177"/>
  </g>
</svg>`;

// 5. cappotto-nebbia.svg (400x500)
const cappottoNebbia = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg5" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#F5F1E8"/>
      <stop offset="100%" stop-color="#DFD7CB"/>
    </radialGradient>
    <linearGradient id="wool" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#C5BEB1"/>
      <stop offset="50%" stop-color="#B2AA9C"/>
      <stop offset="100%" stop-color="#9C9486"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#bg5)"/>
  <ellipse cx="200" cy="436" rx="90" ry="16" fill="rgba(11,11,11,0.15)" filter="blur(9px)"/>
  <g transform="translate(0, -10)">
    <!-- Collar & Notch -->
    <polygon points="168,140 200,155 232,140 220,205 200,218 180,205" fill="#958D7F"/>
    <!-- Sleeves & Body -->
    <path d="M165 142 L130 160 C118 200 116 280 120 340 C132 344 148 335 152 320 L152 425 L248 425 L248 320 C252 335 268 344 280 340 C284 280 282 200 270 160 L235 142 Z" fill="url(#wool)"/>
    <!-- Center Lapel seam -->
    <line x1="200" y1="218" x2="200" y2="425" stroke="#7A7366" stroke-width="1.5"/>
    <!-- Horn buttons -->
    <circle cx="184" cy="225" r="4.5" fill="#3D372F"/>
    <circle cx="216" cy="225" r="4.5" fill="#3D372F"/>
    <circle cx="184" cy="254" r="4.5" fill="#3D372F"/>
    <circle cx="216" cy="254" r="4.5" fill="#3D372F"/>
    <!-- Wool Belt -->
    <rect x="148" y="286" width="104" height="20" fill="#9E9688" stroke="#80786A" stroke-width="1"/>
    <!-- Gold Buckle -->
    <rect x="188" y="282" width="24" height="28" rx="3" fill="#DABF79" stroke="#9F823E" stroke-width="1"/>
    <rect x="194" y="288" width="12" height="16" rx="1.5" fill="#9E9688"/>
    <!-- Welt pockets -->
    <rect x="158" y="322" width="28" height="5" fill="#888172"/>
    <rect x="214" y="322" width="28" height="5" fill="#888172"/>
  </g>
</svg>`;

// 6. abito-seta-notte.svg (400x500)
const abitoSeta = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg6" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#F5F1E8"/>
      <stop offset="100%" stop-color="#DED7CB"/>
    </radialGradient>
    <linearGradient id="silk" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#242322"/>
      <stop offset="50%" stop-color="#141312"/>
      <stop offset="100%" stop-color="#0A0909"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#bg6)"/>
  <ellipse cx="200" cy="432" rx="84" ry="15" fill="rgba(11,11,11,0.15)" filter="blur(8px)"/>
  <g transform="translate(0, 0)">
    <!-- Spaghetti straps -->
    <line x1="172" y1="130" x2="168" y2="180" stroke="#161514" stroke-width="4.5" stroke-linecap="round"/>
    <line x1="228" y1="130" x2="232" y2="180" stroke="#161514" stroke-width="4.5" stroke-linecap="round"/>
    <!-- Bodice -->
    <path d="M165 180 C165 170 235 170 235 180 L242 245 C242 258 200 262 200 262 C200 262 158 258 158 245 Z" fill="url(#silk)"/>
    <circle cx="200" cy="184" r="3" fill="#DFBF76"/>
    <!-- Skirt -->
    <path d="M170 258 C150 320 125 390 126 422 C160 428 240 428 274 422 C275 390 250 320 230 258 Z" fill="url(#silk)"/>
    <!-- Bias drape highlight lines -->
    <path d="M172 260 C185 330 190 390 192 424" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
    <path d="M228 260 C215 330 210 390 208 424" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
  </g>
</svg>`;

// 7. occhiale-vespri.svg (400x500)
const occhialeVespri = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg7" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#24211D"/>
      <stop offset="100%" stop-color="#0F0E0C"/>
    </radialGradient>
    <linearGradient id="goldFrame" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#CBB171"/>
      <stop offset="50%" stop-color="#F2DD9E"/>
      <stop offset="100%" stop-color="#A58742"/>
    </linearGradient>
    <linearGradient id="lens" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3A3E45"/>
      <stop offset="100%" stop-color="#14161A"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#bg7)"/>
  <ellipse cx="200" cy="270" rx="140" ry="24" fill="rgba(0,0,0,0.6)" filter="blur(14px)"/>
  <g transform="translate(0, 10)">
    <!-- Temples -->
    <path d="M90 205 L30 200" stroke="url(#goldFrame)" stroke-width="3" stroke-linecap="round"/>
    <path d="M310 205 L370 200" stroke="url(#goldFrame)" stroke-width="3" stroke-linecap="round"/>
    <!-- Top bridge bar -->
    <path d="M150 193 L250 193" stroke="url(#goldFrame)" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Main Bridge -->
    <path d="M164 208 C180 198 220 198 236 208" fill="none" stroke="url(#goldFrame)" stroke-width="3.5"/>
    <!-- Left Rim & Lens -->
    <rect x="90" y="190" width="76" height="66" rx="28" fill="url(#lens)" stroke="url(#goldFrame)" stroke-width="4"/>
    <path d="M100 200 L140 242" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-linecap="round"/>
    <!-- Right Rim & Lens -->
    <rect x="234" y="190" width="76" height="66" rx="28" fill="url(#lens)" stroke="url(#goldFrame)" stroke-width="4"/>
    <path d="M244 200 L284 242" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-linecap="round"/>
    <!-- Nose pads -->
    <circle cx="184" cy="222" r="4.5" fill="url(#goldFrame)"/>
    <circle cx="216" cy="222" r="4.5" fill="url(#goldFrame)"/>
  </g>
</svg>`;

// 8. foulard-aurora.svg (400x500)
const foulardAurora = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg8" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#F5F1E8"/>
      <stop offset="100%" stop-color="#DDD5C8"/>
    </radialGradient>
    <pattern id="foulardPat" width="28" height="28" patternUnits="userSpaceOnUse">
      <rect width="28" height="28" fill="#E8DEC9"/>
      <rect x="6" y="6" width="16" height="16" fill="none" stroke="#CBB996" stroke-width="1.2" transform="rotate(45 14 14)"/>
      <circle cx="14" cy="14" r="2" fill="#B39B6F"/>
    </pattern>
  </defs>
  <rect width="400" height="500" fill="url(#bg8)"/>
  <ellipse cx="200" cy="360" rx="100" ry="16" fill="rgba(11,11,11,0.14)" filter="blur(9px)"/>
  <!-- Scarf folded oval -->
  <g transform="translate(0, -20)">
    <ellipse cx="200" cy="250" rx="112" ry="76" fill="url(#foulardPat)" stroke="#C8B896" stroke-width="3"/>
    <!-- Shadow drape -->
    <path d="M120 250 C180 280 240 220 280 250" fill="none" stroke="rgba(11,11,11,0.08)" stroke-width="16" stroke-linecap="round"/>
    <!-- Fold corner -->
    <path d="M255 285 L300 292 L268 325 Z" fill="#D5BE8A" stroke="#BFA66D" stroke-width="2"/>
  </g>
</svg>`;

// 9. cintura-cuoio.svg (400x500)
const cinturaCuoio = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg9" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#F5F1E8"/>
      <stop offset="100%" stop-color="#DFD7CB"/>
    </radialGradient>
    <linearGradient id="goldB" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F0D998"/>
      <stop offset="50%" stop-color="#C29F54"/>
      <stop offset="100%" stop-color="#8F7132"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#bg9)"/>
  <ellipse cx="200" cy="370" rx="110" ry="16" fill="rgba(11,11,11,0.15)" filter="blur(9px)"/>
  <!-- Belt spiral -->
  <g transform="translate(0, -20)">
    <path d="M280 230 C280 170 120 170 120 250 C120 330 300 330 300 250 C300 190 150 190 150 250 C150 300 270 300 270 250" fill="none" stroke="#482E1E" stroke-width="24" stroke-linecap="round"/>
    <!-- Contrast stitching -->
    <path d="M280 230 C280 170 120 170 120 250 C120 330 300 330 300 250 C300 190 150 190 150 250" fill="none" stroke="#A99580" stroke-width="1.2" stroke-dasharray="3 3"/>
    <!-- Buckle -->
    <rect x="280" y="228" width="65" height="54" rx="7" fill="url(#goldB)"/>
    <rect x="290" y="238" width="45" height="34" rx="4" fill="#F5F1E8"/>
    <!-- Prong -->
    <line x1="290" y1="255" x2="335" y2="255" stroke="url(#goldB)" stroke-width="5" stroke-linecap="round"/>
    <circle cx="290" cy="255" r="5" fill="url(#goldB)"/>
  </g>
</svg>`;

// 10. profumo-assoluto.svg (400x500)
const profumoAssoluto = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bg10" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#221C16"/>
      <stop offset="100%" stop-color="#0E0C0A"/>
    </radialGradient>
    <linearGradient id="goldCap" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F2DF9F"/>
      <stop offset="50%" stop-color="#C29D52"/>
      <stop offset="100%" stop-color="#886829"/>
    </linearGradient>
    <linearGradient id="perfumeLiquid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#704B1E"/>
      <stop offset="40%" stop-color="#9C6B2D"/>
      <stop offset="100%" stop-color="#5E380E"/>
    </linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#bg10)"/>
  <ellipse cx="200" cy="385" rx="80" ry="18" fill="rgba(0,0,0,0.6)" filter="blur(12px)"/>
  <!-- Bottle -->
  <g transform="translate(0, 5)">
    <!-- Cap -->
    <rect x="176" y="150" width="48" height="42" rx="4" fill="url(#goldCap)"/>
    <rect x="180" y="154" width="10" height="32" rx="2" fill="rgba(255,255,255,0.4)"/>
    <!-- Collar neck -->
    <rect x="186" y="192" width="28" height="15" fill="#886829"/>
    <!-- Glass Bottle Body -->
    <rect x="150" y="206" width="100" height="155" rx="20" fill="#2E241B" stroke="url(#goldCap)" stroke-width="2.5"/>
    <!-- Liquid fill -->
    <rect x="153" y="250" width="94" height="108" rx="16" fill="url(#perfumeLiquid)"/>
    <!-- Glass sheen -->
    <rect x="158" y="220" width="9" height="120" rx="4" fill="rgba(255,255,255,0.16)"/>
    <!-- Label -->
    <rect x="168" y="260" width="64" height="48" rx="2" fill="#F8F5EE" stroke="#CBB996" stroke-width="1"/>
    <text x="200" y="278" text-anchor="middle" font-family="'Bodoni Moda', serif" font-size="7.5" font-weight="600" fill="#0B0B0B" letter-spacing="1.5">AURELIO</text>
    <text x="200" y="288" text-anchor="middle" font-family="'Jost', sans-serif" font-size="5" fill="#8A7A64" letter-spacing="2">ROMA</text>
    <line x1="184" y1="292" x2="216" y2="292" stroke="#B8964F" stroke-width="0.5"/>
    <text x="200" y="299" text-anchor="middle" font-family="'Jost', sans-serif" font-size="4.5" fill="#3D372F" letter-spacing="1">EAU DE PARFUM</text>
  </g>
</svg>`;

// 11. hero-01.svg (1200x675)
const hero01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="heroDarkGreen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#233227"/>
      <stop offset="50%" stop-color="#1B281F"/>
      <stop offset="100%" stop-color="#101913"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#heroDarkGreen)"/>
  <!-- Gold inner fine frame -->
  <rect x="45" y="45" width="1110" height="585" fill="none" stroke="rgba(184,150,79,0.3)" stroke-width="1.2"/>
  <!-- Golden ambient curved arc -->
  <path d="M120 230 C240 180 380 200 450 240" fill="none" stroke="rgba(231,203,140,0.35)" stroke-width="1.5"/>
  <!-- Floor line -->
  <line x1="45" y1="560" x2="1155" y2="560" stroke="rgba(184,150,79,0.2)" stroke-width="1"/>
  <!-- Stylized Figure right side -->
  <g transform="translate(760, 95) scale(0.92)">
    <!-- Head -->
    <ellipse cx="140" cy="90" rx="28" ry="34" fill="#0C0E0D"/>
    <!-- Coat -->
    <path d="M100 135 L60 210 C45 310 40 460 48 495 C75 500 85 490 92 460 L92 570 L188 570 L188 460 C195 490 205 500 232 495 C240 460 235 310 220 210 L180 135 Z" fill="#D3CABE"/>
    <!-- Trousers & Shoes -->
    <rect x="94" y="565" width="38" height="70" fill="#0E100F"/>
    <rect x="148" y="565" width="38" height="70" fill="#0E100F"/>
    <rect x="86" y="628" width="48" height="12" rx="3" fill="#0A0B0B"/>
    <rect x="146" y="628" width="48" height="12" rx="3" fill="#0A0B0B"/>
    <!-- Buttons & Belt -->
    <circle cx="125" cy="245" r="5" fill="#3D372F"/>
    <circle cx="155" cy="245" r="5" fill="#3D372F"/>
    <circle cx="125" cy="285" r="5" fill="#3D372F"/>
    <circle cx="155" cy="285" r="5" fill="#3D372F"/>
    <rect x="88" y="325" width="104" height="24" fill="#A89F90"/>
    <rect x="128" y="320" width="24" height="34" rx="3" fill="#D7BE79"/>
  </g>
</svg>`;

// 12. hero-02.svg (1200x675)
const hero02 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <linearGradient id="heroBordeaux" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4E1A23"/>
      <stop offset="60%" stop-color="#2E0E14"/>
      <stop offset="100%" stop-color="#18070A"/>
    </linearGradient>
    <pattern id="h2pat" width="36" height="36" patternUnits="userSpaceOnUse">
      <rect x="8" y="8" width="20" height="20" fill="none" stroke="rgba(231,203,140,0.22)" stroke-width="1.2" transform="rotate(45 18 18)"/>
      <circle cx="18" cy="18" r="2" fill="rgba(231,203,140,0.3)"/>
    </pattern>
  </defs>
  <rect width="1200" height="675" fill="url(#heroBordeaux)"/>
  <rect x="45" y="45" width="1110" height="585" fill="none" stroke="rgba(231,203,140,0.28)" stroke-width="1.2"/>
  <!-- Draped shapes -->
  <circle cx="280" cy="400" r="260" fill="url(#h2pat)"/>
  <path d="M440 0 C440 300 750 480 1030 400 C1100 200 950 0 440 0 Z" fill="#CBB062"/>
  <path d="M660 440 C720 380 900 400 1200 520 L1200 675 L660 675 Z" fill="#8F2D3E"/>
</svg>`;

// 13. hero-03.svg (1200x675)
const hero03 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <defs>
    <radialGradient id="bgH3" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#F2ECE0"/>
      <stop offset="100%" stop-color="#DDD5C5"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bgH3)"/>
  <rect x="45" y="45" width="1110" height="585" fill="none" stroke="rgba(184,150,79,0.3)" stroke-width="1.2"/>
  <line x1="45" y1="500" x2="1155" y2="500" stroke="rgba(11,11,11,0.12)" stroke-width="1"/>
  <!-- Plinth & Items -->
  <g transform="translate(640, 60)">
    <!-- Halo ring -->
    <circle cx="200" cy="240" r="180" fill="none" stroke="rgba(184,150,79,0.4)" stroke-width="1.5"/>
    <!-- Pedestal -->
    <path d="M120 340 L280 340 L310 490 L90 490 Z" fill="#E8E2D4" stroke="#D3CBB9" stroke-width="1.5"/>
    <!-- Woven bag on top -->
    <rect x="135" y="180" width="130" height="135" rx="20" fill="#1C1814"/>
    <path d="M165 180 C165 125 235 125 235 180" fill="none" stroke="#221D18" stroke-width="14" stroke-linecap="round"/>
    <rect x="188" y="250" width="24" height="18" rx="3" fill="#D7BE79"/>
    <!-- Leaning pump -->
    <path d="M60 410 C50 350 85 340 120 340 L160 410 Z" fill="#6B1D28" transform="rotate(-30 110 375)"/>
    <!-- Loafer right -->
    <rect x="260" y="475" width="120" height="32" rx="16" fill="#1A120B"/>
  </g>
</svg>`;

// 14. atelier.svg (800x600)
const atelier = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bgAt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EFEAE0"/>
      <stop offset="100%" stop-color="#DDD6C7"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgAt)"/>
  <!-- Floor line -->
  <line x1="0" y1="460" x2="800" y2="460" stroke="#B8AD9C" stroke-width="1.5"/>
  <rect x="0" y="460" width="800" height="140" fill="#D6CDC0"/>
  <!-- Window left -->
  <rect x="75" y="60" width="200" height="250" fill="#F8F6F0" stroke="#B0A390" stroke-width="6"/>
  <line x1="175" y1="60" x2="175" y2="310" stroke="#B0A390" stroke-width="4"/>
  <line x1="75" y1="185" x2="275" y2="185" stroke="#B0A390" stroke-width="4"/>
  <!-- Dressmaker dummy -->
  <g transform="translate(180, 150)">
    <!-- Legs tripod -->
    <line x1="60" y1="310" x2="30" y2="440" stroke="#5E4E38" stroke-width="10" stroke-linecap="round"/>
    <line x1="60" y1="310" x2="60" y2="440" stroke="#5E4E38" stroke-width="10" stroke-linecap="round"/>
    <line x1="60" y1="310" x2="90" y2="440" stroke="#5E4E38" stroke-width="10" stroke-linecap="round"/>
    <!-- Torso -->
    <path d="M30 160 C30 80 50 20 60 20 C70 20 90 80 90 160 Z" fill="#D8CFBE"/>
    <!-- Half draped coat -->
    <path d="M30 160 C30 80 50 20 60 20 L60 160 Z" fill="#5E1B24"/>
    <circle cx="60" cy="15" r="10" fill="#D8CFBE"/>
  </g>
  <!-- Workbench right -->
  <g transform="translate(460, 310)">
    <!-- Bench legs & top -->
    <rect x="15" y="60" width="250" height="14" fill="#6A533E"/>
    <rect x="30" y="74" width="12" height="76" fill="#6A533E"/>
    <rect x="238" y="74" width="12" height="76" fill="#6A533E"/>
    <!-- Hat boxes -->
    <rect x="40" y="8" width="80" height="52" rx="10" fill="#2D3B2E"/>
    <rect x="130" y="24" width="75" height="36" rx="8" fill="#6A222B"/>
    <rect x="215" y="32" width="60" height="28" rx="8" fill="#E8DEC9"/>
    <!-- Tailor shears -->
    <line x1="42" y1="44" x2="120" y2="72" stroke="#221F1C" stroke-width="3"/>
    <line x1="42" y1="72" x2="120" y2="44" stroke="#221F1C" stroke-width="3"/>
  </g>
</svg>`;

// 15. lookbook-01.svg, 16. lookbook-02.svg, 17. lookbook-03.svg (600x750)
const lookbook01 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <rect width="600" height="750" fill="#1C271F"/>
  <rect x="35" y="35" width="530" height="680" fill="none" stroke="rgba(231,203,140,0.3)" stroke-width="1.2"/>
  <line x1="35" y1="620" x2="565" y2="620" stroke="rgba(231,203,140,0.18)" stroke-width="1"/>
  <!-- Figure center -->
  <g transform="translate(190, 110)">
    <circle cx="110" cy="50" r="30" fill="#0C0E0D"/>
    <path d="M70 95 L30 180 C15 280 10 440 20 480 C50 485 60 475 68 440 L68 550 L152 550 L152 440 C160 475 170 485 200 480 C210 440 205 280 190 180 L150 95 Z" fill="#D3CABE"/>
    <rect x="70" y="545" width="34" height="65" fill="#0D0E0E"/>
    <rect x="116" y="545" width="34" height="65" fill="#0D0E0E"/>
    <circle cx="95" cy="210" r="5" fill="#3A332B"/>
    <circle cx="125" cy="210" r="5" fill="#3A332B"/>
    <rect x="65" y="290" width="90" height="24" fill="#A89F90"/>
    <rect x="100" y="285" width="20" height="34" rx="2" fill="#D7BE79"/>
  </g>
</svg>`;

const lookbook02 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <rect width="600" height="750" fill="#381017"/>
  <rect x="35" y="35" width="530" height="680" fill="none" stroke="rgba(231,203,140,0.3)" stroke-width="1.2"/>
  <g transform="translate(60, 80)">
    <circle cx="200" cy="300" r="220" fill="#5C1F2B"/>
    <path d="M250 50 C250 250 480 380 500 200 C500 80 400 40 250 50 Z" fill="#C29F54"/>
    <path d="M50 420 C180 340 380 400 440 540 C340 600 120 580 50 420 Z" fill="#882C3C"/>
  </g>
</svg>`;

const lookbook03 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <rect width="600" height="750" fill="#EFE8DC"/>
  <rect x="35" y="35" width="530" height="680" fill="none" stroke="rgba(184,150,79,0.3)" stroke-width="1.2"/>
  <line x1="35" y1="550" x2="565" y2="550" stroke="rgba(11,11,11,0.12)" stroke-width="1"/>
  <g transform="translate(140, 100)">
    <circle cx="160" cy="260" r="150" fill="none" stroke="rgba(184,150,79,0.35)" stroke-width="1.5"/>
    <path d="M80 360 L240 360 L270 510 L50 510 Z" fill="#E5DECFA0" stroke="#C9BFA8" stroke-width="1.5"/>
    <rect x="95" y="210" width="130" height="135" rx="20" fill="#1A1612"/>
    <path d="M125 210 C125 155 195 155 195 210" fill="none" stroke="#221D18" stroke-width="14" stroke-linecap="round"/>
    <rect x="148" y="280" width="24" height="18" rx="3" fill="#D7BE79"/>
    <path d="M40 440 C30 380 65 370 100 370 L140 440 Z" fill="#6B1D28" transform="rotate(-30 70 405)"/>
  </g>
</svg>`;

const files = {
  'borsa-intreccio.svg': borsaIntreccio,
  'shopper-avorio.svg': shopperAvorio,
  'mocassino-roma.svg': mocassinoRoma,
  'decollate-veluto.svg': decollateVeluto,
  'cappotto-nebbia.svg': cappottoNebbia,
  'abito-seta-notte.svg': abitoSeta,
  'occhiale-vespri.svg': occhialeVespri,
  'foulard-aurora.svg': foulardAurora,
  'cintura-cuoio.svg': cinturaCuoio,
  'profumo-assoluto.svg': profumoAssoluto,
  'hero-01.svg': hero01,
  'hero-02.svg': hero02,
  'hero-03.svg': hero03,
  'atelier.svg': atelier,
  'lookbook-01.svg': lookbook01,
  'lookbook-02.svg': lookbook02,
  'lookbook-03.svg': lookbook03
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, filename), content.trim());
  console.log('Created ' + filename);
}
console.log('All 17 SVG assets generated successfully!');
