'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import { useCart } from '@/components/cart/cart-provider';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/data/mock-data';

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  const discount = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  return (
    <div className="flex flex-col rounded-xl border border-border bg-surface transition-shadow hover:shadow-md">
      <Link
        href={`/products/${product.slug}`}
        className="relative flex aspect-square items-center justify-center rounded-t-xl bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span aria-hidden="true" className="text-6xl">
          {product.icon}
        </span>
        {discount > 0 && (
          <span className="absolute left-2 top-2 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-white">
            {discount}% off
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link
          href={`/products/${product.slug}`}
          className="text-base text-text hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-1.5 text-sm text-muted">
          <Star
            aria-hidden="true"
            className="h-4 w-4 fill-primary text-primary"
          />
          <span>{product.rating.toFixed(1)}</span>
          <span>({product.reviewCount})</span>
        </div>

        <p className="mt-auto text-base text-text">
          <span className="font-semibold">{formatPrice(product.price)}</span>
          {product.mrp && (
            <span className="ml-2 text-sm text-muted line-through">
              {formatPrice(product.mrp)}
            </span>
          )}
          <span className="ml-1 text-sm text-muted">/ {product.unit}</span>
        </p>

        <button
          type="button"
          onClick={() => add(product)}
          disabled={!product.inStock}
          className="mt-2 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-border disabled:text-muted"
        >
          {product.inStock ? 'Add to Cart' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
}
