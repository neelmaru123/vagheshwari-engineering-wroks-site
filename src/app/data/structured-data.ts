export const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer", "LocalBusiness", "HardwareStore"],
  "name": "Vagheshwari Engineering Works",
  "alternateName": "Vagheshwari Engineering",
  "url": "https://www.vagheshwariengineering.in",
  "logo": "https://www.vagheshwariengineering.in/logo.png",
  "description": "Leading bricks making machine manufacturer and engineering shop in Morbi, India. Specializing in fly-ash bricks making machines and hydraulic brick machines.",
  "foundingDate": "1995",
  "priceRange": "₹₹-₹₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8-A National Highway",
    "addressCountry": "IN",
    "addressRegion": "Gujarat",
    "addressLocality": "Morbi",
    "postalCode": "363641"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9879277425",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi", "Gujarati"]
  },
  "sameAs": [
    "https://www.facebook.com/vagheshwariengineering",
    "https://www.linkedin.com/company/vagheshwariengineering"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Brick Making Machines",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Hydraulic Brick Making Machine",
          "description": "High-quality hydraulic brick making machines for efficient brick production",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "120"
          }
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Product",
          "name": "Fly Ash Brick Machine",
          "description": "Eco-friendly fly ash brick machines for sustainable construction",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "95"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product", 
          "name": "Hydraulic Paver Machine",
          "description": "Complete automatic paver production lines for large-scale manufacturing",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "64"
          }
        }
      }
    ]
  }
};