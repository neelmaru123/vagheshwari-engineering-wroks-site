import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title:
    "Vagheshwari Engineering Works | Bricks Making Machine Manufacturer in India",
  description:
    "Leading manufacturer of bricks making machines, paver block making machines & fly ash brick machines in India. Buy automatic & manual brick machine at best price. Serving Gujarat, Maharashtra, Rajasthan & all India.",
  keywords: [
    "bricks making machine manufacturer",
    "fly-ash bricks making machine morbi",
    "engineering shop near me",
    "engineering works in morbi",
    "bricks making machine price",
    "hydraulic brick machine manufacturer India",
    "paver block making machine manufacturer",
    "fly ash brick machine manufacturer",
    "automatic brick making machine manufacturer",
    "concrete block making machine",
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
    url: "https://www.vagheshwariengineering.in",
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
    canonical: "https://www.vagheshwariengineering.in",
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
              url: "https://www.vagheshwariengineering.in",
              logo: "https://www.vagheshwariengineering.in/logo.png",
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
        <Analytics />
        <SpeedInsights />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
