'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { searchProducts, type Product } from '@/data/mock-data';

export function SearchBox({ onNavigate }: { onNavigate?: () => void }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  // Suggestions are derived from the query, so compute them during render.
  const results = useMemo(() => searchProducts(query).slice(0, 6), [query]);

  // Close the suggestion list when focus moves elsewhere on the page.
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  function go(product: Product) {
    setOpen(false);
    setQuery('');
    onNavigate?.();
    router.push(`/products/${product.slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && active >= 0) {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  const showList = open && query.trim().length > 0;

  return (
    <div ref={containerRef} className="relative w-full">
      <label htmlFor={`${listId}-input`} className="sr-only">
        Search products
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
      />
      <input
        id={`${listId}-input`}
        type="search"
        role="combobox"
        aria-expanded={showList}
        aria-controls={listId}
        aria-autocomplete="list"
        autoComplete="off"
        value={query}
        placeholder="Search for rice, pepper, bananas…"
        onChange={(e) => {
          setQuery(e.target.value);
          setActive(-1);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        className="w-full rounded-lg border border-border bg-surface py-2.5 pl-10 pr-4 text-base text-text placeholder-muted focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      />

      {showList && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-border bg-surface py-1 shadow-md"
        >
          {results.length === 0 ? (
            <li className="px-4 py-3 text-sm text-muted">
              No matches for “{query}”.
            </li>
          ) : (
            results.map((product, i) => (
              <li key={product.id} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    go(product);
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm ${
                    i === active ? 'bg-accent-soft' : ''
                  }`}
                >
                  <span aria-hidden="true" className="text-xl">
                    {product.icon}
                  </span>
                  <span className="flex-1 text-text">{product.name}</span>
                  <span className="text-muted">₹{product.price}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
