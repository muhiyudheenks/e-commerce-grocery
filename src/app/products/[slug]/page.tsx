import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star } from 'lucide-react';
import { AddToCart } from './add-to-cart';
import { ProductGrid } from '@/components/product/product-grid';
import { SectionHeading } from '@/components/section-heading';
import { ReviewCard } from '@/components/review-card';
import { formatPrice } from '@/lib/utils';
import {
  getDepartmentBySlug,
  getProductBySlug,
  getRelatedProducts,
  products,
  reviews,
} from '@/data/mock-data';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product not found' };
  return { title: `${product.name} — Groziq`, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const department = getDepartmentBySlug(product.department);
  const related = getRelatedProducts(product);
  const discount = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
        <Link href="/products" className="hover:text-primary">
          All Products
        </Link>
        {department && (
          <>
            <span aria-hidden="true"> / </span>
            <Link
              href={`/departments/${department.slug}`}
              className="hover:text-primary"
            >
              {department.name}
            </Link>
          </>
        )}
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-xl bg-accent-soft">
          <span aria-hidden="true" className="text-9xl">
            {product.icon}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
            {product.name}
          </h1>

          <div className="flex items-center gap-1.5 text-sm text-muted">
            <Star aria-hidden="true" className="h-4 w-4 fill-primary text-primary" />
            <span>{product.rating.toFixed(1)}</span>
            <span>({product.reviewCount} reviews)</span>
          </div>

          <p className="text-2xl text-text">
            <span className="font-semibold">{formatPrice(product.price)}</span>
            {product.mrp && (
              <span className="ml-3 text-lg text-muted line-through">
                {formatPrice(product.mrp)}
              </span>
            )}
            <span className="ml-2 text-base text-muted">/ {product.unit}</span>
            {discount > 0 && (
              <span className="ml-3 rounded-md bg-primary px-2 py-1 text-sm font-semibold text-white">
                {discount}% off
              </span>
            )}
          </p>

          <p className="text-muted">{product.description}</p>

          <div className="mt-2">
            <AddToCart product={product} />
          </div>
        </div>
      </div>

      <section className="mt-16">
        <SectionHeading title="What customers say" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-16">
          <SectionHeading
            title="You may also like"
            href={department ? `/departments/${department.slug}` : '/products'}
          />
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
