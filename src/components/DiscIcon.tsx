type Props = {
  accent?: 'orange' | 'gold' | 'red' | 'navy';
  rim?: 'turbo' | 'segmentado' | 'continuo' | 'turbo-fino';
  size?: number;
  spinning?: boolean;
};

const ACCENT_COLORS: Record<string, { face: string; ring: string; rim: string }> = {
  orange: { face: '#f97316', ring: '#c2410c', rim: '#0f2238' },
  gold: { face: '#fbbf24', ring: '#d97706', rim: '#1a3a5c' },
  red: { face: '#dc2626', ring: '#991b1b', rim: '#0a1626' },
  navy: { face: '#2563eb', ring: '#1a3a5c', rim: '#0a1626' },
};

export default function DiscIcon({ accent = 'orange', rim = 'turbo', size = 220, spinning = false }: Props) {
  const c = ACCENT_COLORS[accent];

  // Build segments based on rim type
  let segments: React.ReactNode = null;
  if (rim === 'segmentado') {
    segments = Array.from({ length: 16 }).map((_, i) => {
      const a = (i / 16) * 360;
      return (
        <rect
          key={i}
          x="98"
          y="6"
          width="4"
          height="14"
          fill="#e5e7eb"
          transform={`rotate(${a} 100 100)`}
        />
      );
    });
  } else if (rim === 'turbo' || rim === 'turbo-fino') {
    segments = Array.from({ length: 28 }).map((_, i) => {
      const a = (i / 28) * 360;
      return (
        <rect
          key={i}
          x="99"
          y="4"
          width="2"
          height={rim === 'turbo-fino' ? 10 : 14}
          fill="#cbd5e1"
          transform={`rotate(${a} 100 100)`}
        />
      );
    });
  } else {
    // continuo - smooth ring
    segments = <circle cx="100" cy="100" r="93" stroke="#e5e7eb" strokeWidth="6" fill="none" />;
  }

  // Cooling slots
  const slots = Array.from({ length: 6 }).map((_, i) => {
    const a = (i / 6) * 360;
    return (
      <rect
        key={i}
        x="60"
        y="98"
        width="22"
        height="4"
        rx="2"
        fill={c.rim}
        opacity="0.95"
        transform={`rotate(${a} 100 100)`}
      />
    );
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={spinning ? 'animate-spin-slow' : ''}
    >
      <defs>
        <radialGradient id={`face-${accent}`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="40%" stopColor={c.face} stopOpacity="1" />
          <stop offset="100%" stopColor={c.ring} stopOpacity="1" />
        </radialGradient>
        <radialGradient id="hub-grad" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>
        <linearGradient id={`rim-${accent}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="50%" stopColor={c.rim} />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>

      {/* Outer rim */}
      <circle cx="100" cy="100" r="98" fill={`url(#rim-${accent})`} />
      {segments}

      {/* Color face */}
      <circle cx="100" cy="100" r="80" fill={`url(#face-${accent})`} />

      {/* Brand text band */}
      <circle cx="100" cy="100" r="72" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />

      {/* Cooling slots */}
      {slots}

      {/* Inner steel ring */}
      <circle cx="100" cy="100" r="42" fill="#0a1626" />
      <circle cx="100" cy="100" r="38" fill="url(#hub-grad)" />

      {/* Center mount hole */}
      <circle cx="100" cy="100" r="14" fill="#0a1626" />
      <circle cx="100" cy="100" r="11" fill="#020617" />

      {/* Brand wordmark */}
      <text
        x="100"
        y="56"
        textAnchor="middle"
        fontFamily="Bebas Neue, Impact, sans-serif"
        fontSize="11"
        fill="#ffffff"
        letterSpacing="2"
      >
        UNIFORT
      </text>
      <text
        x="100"
        y="148"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="7"
        fill="#ffffff"
        opacity="0.85"
        letterSpacing="3"
      >
        DIAMANTADO
      </text>

      {/* Subtle highlight arc */}
      <path
        d="M30 70 A 80 80 0 0 1 100 20"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
