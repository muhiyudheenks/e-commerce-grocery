import { Star } from 'lucide-react';
import type { Review } from '@/data/mock-data';

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-5">
      <div
        className="flex gap-0.5"
        aria-label={`Rated ${review.rating} out of 5`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={`h-4 w-4 ${
              i < review.rating ? 'fill-primary text-primary' : 'text-border'
            }`}
          />
        ))}
      </div>
      <blockquote className="flex-1 text-text">“{review.text}”</blockquote>
      <figcaption className="text-sm text-muted">
        {review.name} · {review.location}
      </figcaption>
    </figure>
  );
}
