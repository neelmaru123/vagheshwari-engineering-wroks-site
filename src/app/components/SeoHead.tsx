import React from "react";
import Head from "next/head";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  structuredData,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        {ogImage && (
          <>
            <meta property="og:image" content={ogImage} />
            <meta name="twitter:image" content={ogImage} />
          </>
        )}
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
};
