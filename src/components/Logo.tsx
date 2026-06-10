type Props = { variant?: 'dark' | 'light'; size?: number };

export default function Logo({ variant = 'dark', size = 36 }: Props) {
  const primary = variant === 'dark' ? '#1a3a5c' : '#ffffff';
  const accent = '#f97316';
  return (
    <div className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="30" stroke={primary} strokeWidth="3" />
        <circle cx="32" cy="32" r="22" stroke={primary} strokeWidth="1.5" strokeDasharray="3 4" />
        <circle cx="32" cy="32" r="8" fill={accent} />
        <circle cx="32" cy="32" r="3" fill={primary} />
        <g stroke={primary} strokeWidth="2.5" strokeLinecap="round">
          <line x1="32" y1="2" x2="32" y2="10" />
          <line x1="32" y1="54" x2="32" y2="62" />
          <line x1="2" y1="32" x2="10" y2="32" />
          <line x1="54" y1="32" x2="62" y2="32" />
        </g>
      </svg>
      <div className="leading-none">
        <div
          className="h-display text-[1.45rem] sm:text-2xl font-bold tracking-[0.18em]"
          style={{ color: primary }}
        >
          UNIFORT
        </div>
        <div
          className="text-[0.62rem] tracking-[0.4em] font-semibold mt-0.5"
          style={{ color: variant === 'dark' ? '#f97316' : '#fbbf24' }}
        >
          ABRASIVOS
        </div>
      </div>
    </div>
  );
}
