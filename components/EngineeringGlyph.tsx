type GlyphKind = 'backend' | 'data' | 'fullstack' | 'cloud';

/** Original decorative engineering line art; animation lives in sunset.css. */
export default function EngineeringGlyph({ kind }: { kind: GlyphKind }) {
  return (
    <svg className={'engineering-glyph glyph-' + kind}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 148"
      fill="none" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="226" height="144" rx="17" className="glyph-frame" />
      <path d="M18 125H212 M18 19H212" className="glyph-faint" />
      <circle cx="17" cy="19" r="2" className="glyph-star" />
      <circle cx="214" cy="125" r="2" className="glyph-star" />
      {kind === 'backend' && (
        <g>
          <rect x="20" y="36" width="82" height="76" rx="9" className="glyph-outline" />
          <path d="M20 60H102 M20 86H102" className="glyph-outline" />
          <circle cx="37" cy="48" r="3" className="glyph-node" />
          <circle cx="37" cy="73" r="3" className="glyph-node" />
          <circle cx="37" cy="99" r="3" className="glyph-node" />
          <path d="M102 74H135V40H158 M135 74V109H158" className="glyph-flow" />
          <rect x="157" y="23" width="51" height="35" rx="7" className="glyph-outline" />
          <rect x="157" y="92" width="51" height="35" rx="7" className="glyph-outline" />
          <path d="M168 40H197 M168 109H197" className="glyph-detail" />
          <circle cx="157" cy="40" r="4" className="glyph-node" />
          <circle cx="157" cy="109" r="4" className="glyph-node" />
        </g>
      )}
      {kind === 'data' && (
        <g>
          <path d="M40 36H79 M40 74H79 M40 111H79" className="glyph-flow" />
          <circle cx="30" cy="36" r="10" className="glyph-outline" />
          <circle cx="30" cy="74" r="10" className="glyph-outline" />
          <circle cx="30" cy="111" r="10" className="glyph-outline" />
          <rect x="79" y="41" width="70" height="67" rx="11" className="glyph-outline" />
          <path d="M93 64H134 M93 77H126 M93 90H134" className="glyph-detail" />
          <path d="M149 74H180" className="glyph-flow" />
          <path d="M190 49L210 61V88L190 100L170 88V61Z" className="glyph-outline" />
          <circle cx="190" cy="74" r="7" className="glyph-node-outline" />
          <circle cx="149" cy="74" r="4" className="glyph-node" />
        </g>
      )}
      {kind === 'fullstack' && (
        <g>
          <rect x="20" y="29" width="126" height="90" rx="10" className="glyph-outline" />
          <path d="M20 50H146" className="glyph-outline" />
          <circle cx="34" cy="40" r="2.5" className="glyph-node" />
          <circle cx="45" cy="40" r="2.5" className="glyph-star" />
          <circle cx="56" cy="40" r="2.5" className="glyph-star" />
          <path d="M68 70L56 83L68 96 M97 70L109 83L97 96 M91 66L78 101" className="glyph-detail" />
          <path d="M147 75H171" className="glyph-flow" />
          <rect x="171" y="54" width="39" height="48" rx="6" className="glyph-outline" />
          <path d="M178 67H201 M178 78H201 M178 89H192" className="glyph-detail" />
          <circle cx="147" cy="75" r="4" className="glyph-node" />
        </g>
      )}
      {kind === 'cloud' && (
        <g>
          <path d="M83 78H164C180 78 190 70 190 58C190 46 180 38 167 38C162 23 150 16 137 16C120 16 108 25 103 40C86 36 72 45 72 59C72 70 77 78 83 78Z" className="glyph-outline" />
          <path d="M131 79V99 M60 99H202" className="glyph-flow" />
          <path d="M60 100V111 M132 99V111 M202 99V111" className="glyph-flow" />
          <rect x="40" y="110" width="40" height="25" rx="5" className="glyph-outline" />
          <rect x="111" y="110" width="40" height="25" rx="5" className="glyph-outline" />
          <rect x="182" y="110" width="40" height="25" rx="5" className="glyph-outline" />
          <circle cx="60" cy="122" r="4" className="glyph-node" />
          <circle cx="131" cy="122" r="4" className="glyph-node" />
          <circle cx="202" cy="122" r="4" className="glyph-node" />
        </g>
      )}
    </svg>
  );
}
