import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductGrid } from '@/components/product/product-grid';
import {
  departments,
  getDepartmentBySlug,
  getProductsByDepartment,
} from '@/data/mock-data';

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) return { title: 'Category not found' };
  return { title: `${department.name} — Groziq` };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) notFound();

  const items = getProductsByDepartment(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="text-5xl">
          {department.icon}
        </span>
        <div>
          <h1 className="text-3xl font-semibold text-primary sm:text-4xl">
            {department.name}
          </h1>
          <p className="mt-1 text-sm text-muted">
            {items.length} {items.length === 1 ? 'product' : 'products'}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <ProductGrid products={items} />
      </div>
    </div>
  );
}
