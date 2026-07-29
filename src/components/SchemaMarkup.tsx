import React from "react";

export interface SchemaMarkupProps {
  pageType: "home" | "product";
  data?: {
    name?: string;
    image?: string | string[];
    imageUrl?: string | string[];
    images?: string[];
    description?: string;
    longDescription?: string;
    [key: string]: any;
  };
}

export default function SchemaMarkup({ pageType, data }: SchemaMarkupProps) {
  let schemaData: Record<string, any> = {};

  if (pageType === "home") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Vagheshwari Engineering Works",
      image: "https://www.vagheshwariengineering.in/og-image.jpg",
      telephone: "+919879277425",
      url: "https://www.vagheshwariengineering.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8-A National Highway",
        addressLocality: "Morbi",
        addressRegion: "Gujarat",
        postalCode: "363641",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.8173,
        longitude: 70.8335,
      },
    };
  } else if (pageType === "product") {
    const rawImage =
      data?.imageUrl ||
      data?.image ||
      (Array.isArray(data?.images) && data.images.length > 0
        ? data.images[0]
        : data?.images) ||
      "/og-image.jpg";

    const imageList = Array.isArray(rawImage) ? rawImage : [rawImage];

    schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: data?.name || "",
      image: imageList,
      description: data?.description || data?.longDescription || "",
      brand: {
        "@type": "Brand",
        name: "Vagheshwari Engineering Works",
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
