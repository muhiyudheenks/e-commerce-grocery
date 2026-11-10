'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/components/cart/cart-provider';
import type { Product } from '@/data/mock-data';

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  if (!product.inStock) {
    return (
      <button
        type="button"
        disabled
        className="w-full cursor-not-allowed rounded-lg bg-border px-6 py-3 font-semibold text-muted sm:w-auto"
      >
        Sold Out
      </button>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center rounded-lg border border-border">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
          className="p-3 text-primary hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span aria-live="polite" className="w-10 text-center">
          {qty}
        </span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          aria-label="Increase quantity"
          className="p-3 text-primary hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <button
        type="button"
        onClick={() => add(product, qty)}
        className="flex-1 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:flex-none"
      >
        Add to Cart
      </button>
    </div>
  );
}
