import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { store } from '@/data/mock-data';

export const metadata: Metadata = {
  title: 'Contact — Groziq',
  description: `Get in touch with ${store.name}.`,
};

export default function ContactPage() {
  const details = [
    { icon: MapPin, label: 'Address', value: store.address, href: null },
    {
      icon: Phone,
      label: 'Phone',
      value: store.phone,
      href: `tel:${store.phone.replace(/\s/g, '')}`,
    },
    { icon: Mail, label: 'Email', value: store.email, href: `mailto:${store.email}` },
    { icon: Clock, label: 'Hours', value: store.hours, href: null },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-4 text-muted">
        Questions about an order, or something not right with a delivery? Call
        or write — we answer during store hours.
      </p>

      <dl className="mt-10 space-y-6">
        {details.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex gap-4">
            <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="text-text">
                {href ? (
                  <a
                    href={href}
                    className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
