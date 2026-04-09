export const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer", "LocalBusiness"],
  "name": "Vageshwari Engineering Works",
  "url": "https://www.vagheshwariengineering.com",
  "logo": "https://www.vagheshwariengineering.com/logo.png",
  "description": "Leading manufacturer of hydraulic brick making machines, fly ash brick machines, automatic production lines & vibration tables in India.",
  "foundingDate": "1995",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "Gujarat",
    "addressLocality": "Morbi"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9879277425",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi", "Gujarati"]
  },
  "sameAs": [
    "https://www.facebook.com/vageshwariengineering",
    "https://www.linkedin.com/company/vageshwariengineering"
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
          "description": "High-quality hydraulic brick making machines for efficient brick production"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Product",
          "name": "Fly Ash Brick Machine",
          "description": "Eco-friendly fly ash brick machines for sustainable construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product", 
          "name": "Automatic Brick Production Line",
          "description": "Complete automatic brick production lines for large-scale manufacturing"
        }
      }
    ]
  }
};