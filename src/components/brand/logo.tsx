import Link from 'next/link';
import { store } from '@/data/mock-data';

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`${store.name} home`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="32" height="32" rx="9" fill="#0B3D91" />
        <path
          d="M10 15C10 11.5 13.5 9 18 9C22.5 9 26 11.5 26 15"
          stroke="#7DD3FC"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M18 13C23 13 25 18 24 24C18 24 13 22 13 17C13 14.5 15.5 13 18 13Z"
          fill="#7DD3FC"
        />
      </svg>
      <span className="text-2xl font-semibold tracking-tight text-primary">
        {store.name}
      </span>
    </Link>
  );
}
