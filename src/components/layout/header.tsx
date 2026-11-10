'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Logo } from '@/components/brand/logo';
import { SearchBox } from '@/components/layout/search-box';
import { useCart } from '@/components/cart/cart-provider';
import { announcements } from '@/data/mock-data';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'All Products' },
  { href: '/departments/vegetables', label: 'Vegetables' },
  { href: '/departments/fruits', label: 'Fruits' },
  { href: '/departments/rice-grains', label: 'Rice & Grains' },
  { href: '/departments/spices', label: 'Spices' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface">
      {/* Announcement bar */}
      <div className="bg-primary text-white">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs sm:text-sm">
          {announcements.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4">
          {/* Main bar */}
          <div className="flex h-16 items-center gap-4">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="rounded-lg p-2 text-primary hover:bg-accent-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <Logo />

            <div className="hidden flex-1 md:block">
              <SearchBox />
            </div>

            <button
              type="button"
              onClick={openCart}
              className="ml-auto flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:ml-0"
            >
              <ShoppingCart aria-hidden="true" className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              <span
                aria-label={`${count} items in cart`}
                className="rounded-md bg-white px-1.5 py-0.5 text-xs font-semibold text-primary"
              >
                {count}
              </span>
            </button>
          </div>

          {/* Search on mobile */}
          <div className="pb-3 md:hidden">
            <SearchBox />
          </div>

          {/* Nav — inline on desktop */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-6 pb-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Nav — drawer on mobile */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-b border-border bg-surface lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base text-text hover:bg-accent-soft hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
