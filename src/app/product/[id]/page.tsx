import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { productCategories } from "../../data/products-data";
import ProductDetailsClient from "./ProductDetailsClient";
import SchemaMarkup from "@/components/SchemaMarkup";

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
    return { title: "Product Not Found | Vagheshwari Engineering Works" };
  }

  const title = `${product.name} Manufacturer in India | Vagheshwari Engineering Works`;
  const description = `${product.name} manufacturer and supplier. High-quality bricks making machine for fly ash bricks, clay bricks, and paver blocks in Morbi, Gujarat, India.`;
  const ogImage = product.images?.[0] ?? "/uploads/logo.png";
  const keywords = `${product.name}, bricks making machine, paver block making machine, bricks making machine manufacturer, fly-ash bricks making machine morbi, hydraulic brick machine, construction equipment manufacturer, ${product.category}, Vagheshwari Engineering, India`;
  const canonical = `https://www.vagheshwariengineering.in/product/${product.id}`;

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

  const getPriceRange = (category: string) => {
    switch (category) {
      case "fully-automatic":
        return { low: "800000", high: "2500000" };
      case "semi-automatic":
        return { low: "300000", high: "800000" };
      case "clay-machine":
        return { low: "200000", high: "1200000" };
      case "auxiliary":
        return { low: "15000", high: "150000" };
      case "molds":
        return { low: "100", high: "2000" };
      default:
        return { low: "50000", high: "2000000" };
    }
  };

  const { low, high } = getPriceRange(product.category);

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDescription ?? product.description,
    brand: {
      "@type": "Brand",
      name: "Vagheshwari Engineering Works",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Vagheshwari Engineering Works",
    },
    category: "Industrial Machinery",
    image:
      product.images && product.images.length > 0
        ? product.images
        : ["/uploads/logo.png"],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: low,
      highPrice: high,
      offerCount: "1",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Vagheshwari Engineering Works",
        url: "https://www.vagheshwariengineering.in",
      },
      url: `https://www.vagheshwariengineering.in/product/${product.id}`,
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vagheshwariengineering.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.name,
        item: `https://www.vagheshwariengineering.in/product/${product.id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-background overflow-x-hidden">
      <SchemaMarkup
        pageType="product"
        data={{
          name: product.name,
          image: product.images?.[0] ?? "/uploads/logo.png",
          description: product.longDescription ?? product.description,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <ProductDetailsClient product={product} />
    </div>
  );
}

