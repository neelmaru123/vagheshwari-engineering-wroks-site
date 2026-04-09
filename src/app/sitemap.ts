import { MetadataRoute } from "next";
import { productCategories } from "./data/products-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vagheshwariengineering.com";

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Dynamic routes (products)
  const productRoutes: MetadataRoute.Sitemap = productCategories.map(
    (product) => ({
      url: `${baseUrl}/product/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...routes, ...productRoutes];
}
