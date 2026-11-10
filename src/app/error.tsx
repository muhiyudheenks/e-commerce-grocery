'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 text-muted">
        Please try again. If the problem continues, contact us.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}
