import AmbientEmbers from '@/components/AmbientEmbers';

/**
 * SVG-only sunset composition. No remote image, Three.js, or canvas required.
 * Decorative: the hero headline and CTAs are real, selectable HTML above it.
 */
export default function SunsetHeroArt() {
  return (
    <div className="sunset-hero-art" aria-hidden="true">
      <svg viewBox="0 0 760 760" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
        <defs>
          <radialGradient id="afterglow-bloom" cx="0" cy="0" r="1" gradientTransform="translate(482 315) rotate(90) scale(306)">
            <stop stopColor="#FFB478" stopOpacity=".38" />
            <stop offset=".48" stopColor="#F66555" stopOpacity=".15" />
            <stop offset="1" stopColor="#EB6076" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="afterglow-disk" x1="480" y1="160" x2="480" y2="464" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE5B1" />
            <stop offset=".33" stopColor="#FFB579" />
            <stop offset=".72" stopColor="#FE785E" />
            <stop offset="1" stopColor="#D54A71" />
          </linearGradient>
          <linearGradient id="afterglow-grid" x1="390" y1="483" x2="390" y2="748" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FC9C76" stopOpacity=".49" />
            <stop offset="1" stopColor="#FB8B75" stopOpacity="0" />
          </linearGradient>
          <clipPath id="afterglow-disc-clip">
            <circle cx="482" cy="303" r="142" />
          </clipPath>
        </defs>

        {/* Orbital architecture: orbit paths, calibration ticks, and signal nodes. */}
        <g className="afterglow-orbits" stroke="#F3AF9B">
          <ellipse cx="482" cy="307" rx="279" ry="151" transform="rotate(-28 482 307)" strokeOpacity=".19" strokeWidth="1.1" />
          <ellipse cx="482" cy="307" rx="313" ry="224" transform="rotate(21 482 307)" strokeOpacity=".12" strokeWidth="1" strokeDasharray="4 10" />
          <circle cx="482" cy="307" r="199" strokeOpacity=".12" strokeWidth=".9" strokeDasharray="2 11" />
          <path d="M151 307H185 M662 307H706 M482 50V77" strokeOpacity=".38" strokeWidth="1.5" />
        </g>

        <circle cx="482" cy="303" r="296" fill="url(#afterglow-bloom)" />

        {/* Graphic sun with horizontal breaks near the horizon. */}
        <circle cx="482" cy="303" r="142" fill="url(#afterglow-disk)" />
        <circle cx="482" cy="303" r="147" stroke="#FFD2A2" strokeOpacity=".27" strokeWidth="1" />
        <g clipPath="url(#afterglow-disc-clip)">
          <path d="M317 360H648" stroke="#51203C" strokeWidth="5" strokeOpacity=".85" />
          <path d="M317 386H648" stroke="#51203C" strokeWidth="9" strokeOpacity=".87" />
          <path d="M317 414H648" stroke="#51203C" strokeWidth="15" strokeOpacity=".89" />
          <path d="M317 443H648" stroke="#51203C" strokeWidth="24" strokeOpacity=".9" />
        </g>

        {/* The horizon anchors the composition and becomes a perspective grid. */}
        <path d="M52 475H716" stroke="#F5A284" strokeOpacity=".65" strokeWidth="1.2" />
        <path d="M90 475L15 742 M174 475L150 742 M259 475L280 742 M345 475L410 742 M429 475L538 742 M514 475L678 742 M597 475L757 682" stroke="url(#afterglow-grid)" strokeWidth=".95" />
        <path d="M58 506H713 M24 551H743 M0 613H760 M0 701H760" stroke="url(#afterglow-grid)" strokeWidth="1" />

        {/* A few small technical waypoints keep the image engineering-oriented. */}
        <g className="afterglow-signal">
          <circle cx="229" cy="212" r="5" fill="#FFCB9C" />
          <circle cx="229" cy="212" r="13" stroke="#FFCB9C" strokeOpacity=".4" />
          <path d="M229 194V170 M243 212H273" stroke="#FFCB9C" strokeOpacity=".45" strokeWidth="1" />
          <circle cx="684" cy="365" r="4" fill="#FFB082" />
          <circle cx="684" cy="365" r="13" stroke="#FFB082" strokeOpacity=".42" />
          <path d="M685 384V411 M672 365H646" stroke="#FFB082" strokeOpacity=".5" strokeWidth="1" />
        </g>
        <g className="afterglow-stars" fill="#FFE1C0">
          <circle cx="123" cy="114" r="1.4" />
          <circle cx="657" cy="125" r="1.6" />
          <circle cx="342" cy="94" r=".9" />
          <circle cx="728" cy="247" r="1.1" />
          <circle cx="135" cy="392" r="1.1" />
          <circle cx="603" cy="64" r=".8" />
        </g>
        <path d="M102 164H167 M112 173H148 M614 545H690" stroke="#F9B991" strokeOpacity=".20" strokeWidth="1" />
      </svg>
      <AmbientEmbers />
    </div>
  );
}
