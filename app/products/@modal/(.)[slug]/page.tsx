import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductModalProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Products | null> {
  const response = await fetch(`https://fakestoreapi.com/products/${slug}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ProductModal({ params }: ProductModalProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <Link
        href="/products"
        aria-label="Close product details"
        className="absolute inset-0 cursor-default"
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative z-10 grid w-full max-w-3xl gap-8 overflow-hidden rounded-2xl bg-white p-6 text-slate-900 shadow-2xl sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:p-8"
      >
        <Link
          href="/products"
          aria-label="Close product details"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-2xl leading-none text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
        >
          <span aria-hidden="true"> jjj</span>
        </Link>

        <div className="flex min-h-64 items-center justify-center rounded-xl bg-slate-50 p-8">
          <Image
            src={product.image}
            alt={product.title}
            width={320}
            height={320}
            className="max-h-64 w-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 pr-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            {product.category}
          </p>
          <h1
            id="product-modal-title"
            className="text-2xl font-bold sm:text-3xl"
          >
            {product.title}
          </h1>
          <p className="text-sm leading-6 text-slate-600">
            {product.description}
          </p>
          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <p className="text-2xl font-bold text-slate-950">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-amber-500">
                {product.rating.rate}/5
              </span>{" "}
              ({product.rating.count} reviews)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
