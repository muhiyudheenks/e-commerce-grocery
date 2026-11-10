'use client';

import { useMemo, useState } from 'react';
import { ProductGrid } from '@/components/product/product-grid';
import { departments, products } from '@/data/mock-data';

type Sort = 'default' | 'price_asc' | 'price_desc';

export default function ProductsPage() {
  const [department, setDepartment] = useState('all');
  const [sort, setSort] = useState<Sort>('default');

  const visible = useMemo(() => {
    const filtered =
      department === 'all'
        ? products
        : products.filter((p) => p.department === department);

    if (sort === 'price_asc') {
      return [...filtered].sort((a, b) => a.price - b.price);
    }
    if (sort === 'price_desc') {
      return [...filtered].sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [department, sort]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
        All Products
      </h1>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setDepartment('all')}
            aria-pressed={department === 'all'}
            className={`rounded-lg border px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              department === 'all'
                ? 'border-primary bg-primary text-white'
                : 'border-border bg-surface text-text hover:border-primary'
            }`}
          >
            All
          </button>
          {departments.map((d) => (
            <button
              key={d.slug}
              type="button"
              onClick={() => setDepartment(d.slug)}
              aria-pressed={department === d.slug}
              className={`rounded-lg border px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                department === d.slug
                  ? 'border-primary bg-primary text-white'
                  : 'border-border bg-surface text-text hover:border-primary'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-muted">
            Sort by
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <option value="default">Featured</option>
            <option value="price_asc">Price: low to high</option>
            <option value="price_desc">Price: high to low</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted">
        {visible.length} {visible.length === 1 ? 'product' : 'products'}
      </p>

      <div className="mt-4">
        <ProductGrid products={visible} />
      </div>
    </div>
  );
}
