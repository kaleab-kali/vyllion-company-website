export function VyllionLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25 20 L50 75 L75 20"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 28 L50 55 L62 28"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 40 L85 10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <polygon points="80,12 88,5 88,15" fill="currentColor" />
    </svg>
  )
}
