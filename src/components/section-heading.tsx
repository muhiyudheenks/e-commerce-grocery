import Link from 'next/link';

interface SectionHeadingProps {
  title: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeading({
  title,
  href,
  linkLabel = 'View all',
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-baseline justify-between gap-4">
      <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{title}</h2>
      {href && (
        <Link
          href={href}
          className="shrink-0 text-sm font-semibold text-primary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
