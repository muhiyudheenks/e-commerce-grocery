import Link from 'next/link';
import { Logo } from '@/components/brand/logo';
import { departments, store } from '@/data/mock-data';

const QUICK_LINKS = [
  { href: '/products', label: 'All Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const POLICY_LINKS = [
  { href: '/about#delivery', label: 'Delivery Information' },
  { href: '/about#returns', label: 'Returns & Refunds' },
  { href: '/about#privacy', label: 'Privacy Policy' },
  { href: '/about#terms', label: 'Terms of Service' },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-accent-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted">{store.about}</p>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-primary">Shop</h2>
          <ul className="space-y-2 text-sm">
            {departments.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/departments/${d.slug}`}
                  className="text-text hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-primary">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[...QUICK_LINKS, ...POLICY_LINKS].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-text hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-primary">Get in Touch</h2>
          <address className="space-y-2 text-sm not-italic text-text">
            <p className="text-muted">{store.address}</p>
            <p>
              <a
                href={`tel:${store.phone.replace(/\s/g, '')}`}
                className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {store.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${store.email}`}
                className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {store.email}
              </a>
            </p>
            <p className="text-muted">{store.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted">
          © {new Date().getFullYear()} {store.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
