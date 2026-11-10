'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { useCart } from '@/components/cart/cart-provider';
import { formatPrice } from '@/lib/utils';

export function CartDrawer() {
  const {
    lines,
    subtotal,
    delivery,
    total,
    amountToFreeDelivery,
    isOpen,
    closeCart,
    setQty,
    remove,
    clear,
  } = useCart();
  const [placed, setPlaced] = useState(false);

  if (!isOpen) return null;

  function checkout() {
    clear();
    setPlaced(true);
  }

  function dismiss() {
    setPlaced(false);
    closeCart();
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-text/40"
        onClick={dismiss}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="relative flex h-full w-full max-w-md flex-col bg-surface"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <h2 className="text-lg font-semibold text-primary">Your Cart</h2>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Close cart"
            className="rounded-lg p-2 text-muted hover:bg-accent-soft hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {placed ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingCart aria-hidden="true" className="h-12 w-12 text-primary" />
            <p className="text-lg font-semibold text-primary">Order placed</p>
            <p className="text-muted">
              Thanks for shopping with Groziq. We will call you to confirm
              delivery.
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="rounded-lg bg-primary px-6 py-2.5 font-semibold text-white hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Continue shopping
            </button>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingCart aria-hidden="true" className="h-12 w-12 text-muted" />
            <p className="text-lg font-semibold text-text">Your cart is empty</p>
            <Link
              href="/products"
              onClick={dismiss}
              className="rounded-lg bg-primary px-6 py-2.5 font-semibold text-white hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Shop now
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-4">
              {lines.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3 py-4">
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-3xl"
                  >
                    {product.icon}
                  </span>

                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex justify-between gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={dismiss}
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
                        <span className="w-8 text-center text-sm">{qty}</span>
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

            <div className="border-t border-border px-4 py-4">
              {amountToFreeDelivery > 0 && (
                <p className="mb-3 rounded-lg bg-accent-soft px-3 py-2 text-sm text-primary">
                  Add {formatPrice(amountToFreeDelivery)} more for free delivery
                </p>
              )}

              <dl className="space-y-2 text-sm">
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
                onClick={checkout}
                className="mt-4 w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Checkout
              </button>

              <Link
                href="/cart"
                onClick={dismiss}
                className="mt-3 block text-center text-sm text-primary underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                View full cart
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
