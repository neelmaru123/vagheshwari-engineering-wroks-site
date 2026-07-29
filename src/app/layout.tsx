import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Hydraulic Brick Making Machine Manufacturer in Morbi | Vagheshwari Engineering",
  description:
    "Leading manufacturer of hydraulic brick making machine in Morbi, Gujarat. High quality fly ash brick machine, automatic block making machine India, and paver block machinery at best prices.",
  keywords: [
    "hydraulic brick making machine manufacturer morbi",
    "fly ash brick machine",
    "automatic block making machine India",
    "brick making machine manufacturer in morbi",
    "fly ash brick machine manufacturer Gujarat",
    "automatic fly ash brick machine price",
    "paver block making machine manufacturer",
    "concrete block machine supplier Morbi",
    "buy brick making machine India",
    "hydraulic brick press machine",
    "Vagheshwari Engineering Works",
  ],
  authors: [{ name: "Vagheshwari Engineering Works" }],
  creator: "Vagheshwari Engineering Works",
  publisher: "Vagheshwari Engineering Works",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vagheshwariengineering.in/",
    siteName: "Vagheshwari Engineering Works",
    title:
      "Hydraulic Brick Making Machine Manufacturer in Morbi | Vagheshwari Engineering",
    description:
      "Leading manufacturer of hydraulic brick making machine in Morbi, Gujarat. High quality fly ash brick machine, automatic block making machine India, and paver block machinery at best prices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vagheshwari Engineering - Brick Making Machine",
      },
    ],
  },
  alternates: {
    canonical: "https://www.vagheshwariengineering.in/",
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
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} antialiased text-slate-900 bg-background font-sans`}>
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
