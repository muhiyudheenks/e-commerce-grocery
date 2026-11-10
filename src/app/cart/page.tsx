'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/components/cart/cart-provider';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const {
    lines,
    subtotal,
    delivery,
    total,
    amountToFreeDelivery,
    setQty,
    remove,
    openCart,
  } = useCart();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
        Your Cart
      </h1>

      {lines.length === 0 ? (
        <div className="mt-10 flex flex-col items-start gap-4">
          <p className="text-muted">Your cart is empty.</p>
          <Link
            href="/products"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <ul className="divide-y divide-border border-y border-border">
            {lines.map(({ product, qty }) => (
              <li key={product.id} className="flex gap-4 py-5">
                <span
                  aria-hidden="true"
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-4xl"
                >
                  {product.icon}
                </span>

                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex justify-between gap-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-text hover:text-primary"
                    >
                      {product.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => remove(product.id)}
                      aria-label={`Remove ${product.name}`}
                      className="shrink-0 rounded p-1 text-muted hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="text-sm text-muted">
                    {formatPrice(product.price)} / {product.unit}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-lg border border-border">
                      <button
                        type="button"
                        onClick={() => setQty(product.id, qty - 1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                        className="p-2 text-primary hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-sm">{qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(product.id, qty + 1)}
                        aria-label={`Increase quantity of ${product.name}`}
                        className="p-2 text-primary hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-semibold text-text">
                      {formatPrice(product.price * qty)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-xl border border-border p-5">
            <h2 className="font-semibold text-primary">Order Summary</h2>

            {amountToFreeDelivery > 0 && (
              <p className="mt-4 rounded-lg bg-accent-soft px-3 py-2 text-sm text-primary">
                Add {formatPrice(amountToFreeDelivery)} more for free delivery
              </p>
            )}

            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Subtotal</dt>
                <dd className="text-text">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Delivery</dt>
                <dd className="text-text">
                  {delivery === 0 ? 'Free' : formatPrice(delivery)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-border pt-2 text-base font-semibold">
                <dt className="text-text">Total</dt>
                <dd className="text-primary">{formatPrice(total)}</dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={openCart}
              className="mt-5 w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
