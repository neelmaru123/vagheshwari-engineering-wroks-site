import { MetadataRoute } from "next";
import { productCategories } from "./data/products-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vagheshwariengineering.in";

  const homeRoute: MetadataRoute.Sitemap[number] = {
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  };

  const productRoutes: MetadataRoute.Sitemap = productCategories.map(
    (product) => ({
      url: `${baseUrl}/product/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [homeRoute, ...productRoutes];
}
