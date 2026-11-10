import Link from 'next/link';
import { Leaf, ShieldCheck, Tag, Truck } from 'lucide-react';
import { ProductGrid } from '@/components/product/product-grid';
import { SectionHeading } from '@/components/section-heading';
import { ReviewCard } from '@/components/review-card';
import { FaqAccordion } from '@/components/faq-accordion';
import {
  departments,
  faqs,
  getBestSellers,
  getProductsByDepartment,
  reviews,
  store,
} from '@/data/mock-data';

const WHY_CHOOSE = [
  {
    icon: Leaf,
    title: 'Farm Fresh',
    line: 'Picked in Kerala and packed the same morning.',
  },
  {
    icon: Tag,
    title: 'Best Prices',
    line: 'Sourced direct, so you skip the middleman markup.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Checked',
    line: 'Every crate is hand-graded before it ships.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    line: 'Same-day across Kochi, next morning elsewhere.',
  },
];

const FEATURED_DEPARTMENTS = ['vegetables', 'fruits', 'spices'] as const;

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="bg-accent-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-24">
          <h1 className="text-4xl font-semibold text-primary sm:text-5xl">
            {store.tagline}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Farm-fresh produce and Kerala staples, delivered to your door.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        {/* 2 — Shop by Category */}
        <section>
          <SectionHeading title="Shop by Category" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {departments.map((d) => (
              <Link
                key={d.slug}
                href={`/departments/${d.slug}`}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-8 transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span aria-hidden="true" className="text-5xl">
                  {d.icon}
                </span>
                <span className="font-semibold text-text">{d.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 3 — Best Sellers */}
        <section>
          <SectionHeading title="Best Sellers" href="/products" />
          <ProductGrid products={getBestSellers(8)} />
        </section>

        {/* 4 — One grid per featured department */}
        {FEATURED_DEPARTMENTS.map((slug) => {
          const department = departments.find((d) => d.slug === slug)!;
          return (
            <section key={slug}>
              <SectionHeading
                title={department.name}
                href={`/departments/${slug}`}
              />
              <ProductGrid products={getProductsByDepartment(slug).slice(0, 6)} />
            </section>
          );
        })}

        {/* 5 — Why Choose Groziq */}
        <section>
          <SectionHeading title={`Why Choose ${store.name}`} />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map(({ icon: Icon, title, line }) => (
              <div key={title} className="flex flex-col gap-2">
                <Icon aria-hidden="true" className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-text">{title}</h3>
                <p className="text-sm text-muted">{line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6 — Customer Reviews */}
        <section>
          <SectionHeading title="Customer Reviews" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>

        {/* 7 — FAQ */}
        <section>
          <SectionHeading title="Frequently Asked Questions" />
          <FaqAccordion items={faqs} />
        </section>
      </div>
    </>
  );
}
