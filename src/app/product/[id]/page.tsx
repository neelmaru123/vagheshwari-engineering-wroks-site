import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { productCategories } from "../../data/products-data";
import ProductDetailsClient from "./ProductDetailsClient";

export async function generateStaticParams() {
  return productCategories.map((product: any) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = productCategories.find((p: any) => p.id === id);

  if (!product) {
    return { title: "Product Not Found | Vageshwari Engineering Works" };
  }

  const title = `${product.name} | Vageshwari Engineering Works`;
  const description = product.longDescription ?? product.description;
  const ogImage = product.images?.[0] ?? "/uploads/logo.png";
  const keywords = `${product.name}, brick making machine, hydraulic machine, construction equipment, ${product.category}`;
  const canonical = `https://www.vagheshwariengineering.com/product/${product.id}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = productCategories.find((p: any) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold mb-4">Product not found!</h2>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    );
  }

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDescription ?? product.description,
    brand: {
      "@type": "Brand",
      name: "Vageshwari Engineering Works",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Vageshwari Engineering Works",
    },
    category: "Industrial Machinery",
    image:
      product.images && product.images.length > 0
        ? product.images
        : ["/uploads/logo.png"],
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vagheshwariengineering.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.name,
        item: `https://www.vagheshwariengineering.com/product/${product.id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-background overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <ProductDetailsClient product={product} />
    </div>
  );
}

