import React from "react";
import Link from "next/link";
import Image from "next/image";
import { productCategories } from "../app/data/products-data";

interface RelatedProductsProps {
  currentProductId?: string;
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Filter out the current product and pick up to 3 cards
  const relatedProducts = productCategories
    .filter((product) => product.id !== currentProductId)
    .slice(0, 3);

  return (
    <section className="bg-gray-50 py-12 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Related Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => {
            const image = product.images?.[0] ?? "/uploads/logo.png";
            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                <div className="relative h-48 w-full bg-white p-4">
                  <Image
                    src={image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`transition-transform duration-300 group-hover:scale-105 p-2 ${
                      product.category === "molds"
                        ? "object-contain"
                        : "object-cover"
                    }`}
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
