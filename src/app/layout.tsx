import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title:
    "Vagheshwari Engineering Works | Bricks Making Machine Manufacturer in India",
  description:
    "Leading manufacturer of bricks making machines, paver block making machines & fly ash brick machines in India. Buy automatic & manual brick machine at best price. Serving Gujarat, Maharashtra, Rajasthan & all India.",
  keywords: [
    "bricks making machine",
    "paver block making machine",
    "brick machine manufacturer India",
    "fly ash brick machine",
    "automatic brick making machine",
    "concrete block making machine",
    "interlocking paver block machine",
    "brick machine price India",
    "bricks machine manufacturer Gujarat",
    "paver block machine manufacturer",
  ],
  authors: [{ name: "Vagheshwari Engineering Works" }],
  creator: "Vagheshwari Engineering Works",
  publisher: "Vagheshwari Engineering Works",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vagheshwariengineering.com",
    siteName: "Vagheshwari Engineering Works",
    title:
      "Bricks Making Machine & Paver Block Machine Manufacturer | Vagheshwari Engineering",
    description:
      "Top manufacturer of bricks & paver block making machines in India. Durable, affordable, high-capacity machines for all block types.",
    images: [
      {
        url: "/og-image.jpg", // Add a real product photo (1200x630px)
        width: 1200,
        height: 630,
        alt: "Vagheshwari Engineering - Brick Making Machine",
      },
    ],
  },
  alternates: {
    canonical: "https://www.vagheshwariengineering.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vagheshwari Engineering Works",
              url: "https://www.vagheshwariengineering.com",
              logo: "https://www.vagheshwariengineering.com/logo.png",
              description:
                "Manufacturer of bricks making machines and paver block making machines in India",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Gujarat",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9879277425",
                contactType: "sales",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
            }),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
