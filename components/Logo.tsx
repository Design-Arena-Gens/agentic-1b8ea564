export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="60%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#g)" />
      <path d="M16 44c8-2 12-14 16-22 4 8 8 20 16 22-6 2-12 2-16-2-4 4-10 4-16 2z" fill="white" opacity="0.9" />
      <path d="M28 26c3 2 6 2 8 0-1-3-3-6-4-8-1 2-3 5-4 8z" fill="white" opacity="0.9" />
    </svg>
  );
}
