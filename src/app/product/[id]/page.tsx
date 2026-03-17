import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SEO } from "../../components/SEO";
import { productCategories } from "../../data/products-data";
import ProductDetailsClient from "./ProductDetailsClient";

export async function generateStaticParams() {
  return productCategories.map((product: any) => ({ id: product.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productCategories.find((p: any) => p.id === params.id);

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
    keywords: "brick making machine, hydraulic machine, construction equipment",
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-background overflow-x-hidden">
      <SEO
        title={product.name}
        description={product.longDescription ?? product.description}
        keywords={`${product.name}, brick making machine, hydraulic machine, construction equipment, ${product.category}`}
        ogImage={product.images?.[0] ?? "/uploads/logo.png"}
        structuredData={productStructuredData}
      />
      <ProductDetailsClient product={product} />
    </div>
  );
}
