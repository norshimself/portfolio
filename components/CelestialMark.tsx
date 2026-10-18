/** Original decorative twilight orbit for the About section. */
export default function CelestialMark() {
  return (
    <div className="about-celestial" aria-hidden="true">
      <svg viewBox="0 0 290 280" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
        <circle cx="150" cy="139" r="79" stroke="#FFAB80" strokeOpacity=".50" />
        <circle cx="150" cy="139" r="104" stroke="#D69AAA" strokeOpacity=".33" strokeDasharray="2 7" />
        <ellipse cx="150" cy="139" rx="141" ry="57" stroke="#FFC4A0" strokeOpacity=".58" transform="rotate(-27 150 139)" />
        <ellipse cx="150" cy="139" rx="134" ry="82" stroke="#BE789A" strokeOpacity=".28" transform="rotate(27 150 139)" />
        <circle cx="150" cy="139" r="32" fill="#F76E56" fillOpacity=".13" />
        <circle cx="150" cy="139" r="31" stroke="#FFB08B" strokeOpacity=".86" />
        <circle cx="150" cy="139" r="5" fill="#FFD7AB" />
        <path d="M150 94V184 M105 139H195" stroke="#FFB58E" strokeOpacity=".50" />
        <circle cx="264" cy="78" r="5" fill="#FFD3A4" />
        <circle cx="264" cy="78" r="13" stroke="#FFD3A4" strokeOpacity=".45" />
        <circle cx="49" cy="218" r="3" fill="#E79FC0" />
        <path d="M39 38L39 52 M32 45H46 M239 220L239 234 M232 227H246" stroke="#FFE2C4" strokeOpacity=".65" />
        <path d="M29 250H261" stroke="#FFE2C4" strokeOpacity=".16" />
      </svg>
    </div>
  );
}
