export default function BeanDivider() {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden="true">
      <span className="h-px w-16 bg-line sm:w-28" />
      <svg viewBox="0 0 32 32" className="h-5 w-5 shrink-0">
        <path
          d="M16 4c7 0 12 5.5 12 12s-5 12-12 12S4 22.5 4 16 9 4 16 4Z"
          fill="none"
          stroke="var(--ember)"
          strokeWidth="1.6"
        />
        <path
          d="M16 6c-3 4-3 8 0 10s3 6 0 10"
          fill="none"
          stroke="var(--ember)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="h-px w-16 bg-line sm:w-28" />
    </div>
  );
}
