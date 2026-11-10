import type { Metadata } from 'next';
import { store } from '@/data/mock-data';

export const metadata: Metadata = {
  title: 'About — Groziq',
  description: store.about,
};

const SECTIONS = [
  {
    id: 'delivery',
    title: 'Delivery Information',
    body: 'We deliver across Kochi, Thiruvananthapuram, Kozhikode and Thrissur. Orders placed before 2 PM in Kochi arrive the same day; other districts arrive the next morning. Delivery is free above ₹200, otherwise a flat ₹30 applies.',
  },
  {
    id: 'returns',
    title: 'Returns & Refunds',
    body: 'If an item arrives damaged or below standard, tell us within 24 hours and we will replace or refund it in full. Fresh produce needs no packaging or photographs — your word is enough.',
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    body: 'We collect only what we need to deliver your order: name, address and phone number. We never sell your data, and we do not share it beyond the delivery partner handling your order.',
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    body: 'Prices and availability can change with the day’s harvest. Where an item is unavailable after you order, we will contact you to substitute or refund it before dispatch.',
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
        About {store.name}
      </h1>

      <p className="mt-6 text-lg text-muted">{store.about}</p>

      <p className="mt-4 text-muted">
        We buy direct from farms in Wayanad, Idukki and Palakkad, grade every
        crate by hand, and pack it the same morning it is picked. No warehouse
        middlemen, no week-old stock, no surprise charges at checkout — just the
        rice, produce and spices a Kerala kitchen actually runs on.
      </p>

      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="mt-10 scroll-mt-24">
          <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
          <p className="mt-3 text-muted">{section.body}</p>
        </section>
      ))}
    </div>
  );
}
