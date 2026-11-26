import type { Metadata } from "next";
import { site } from "@/data/site";

// One helper for every page's SEO tags.
// Usage: export const metadata = buildMetadata({ title: "About", description: "...", path: "/about" });
export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  image = "/images/og-image.jpg",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: title ? `${title} | ${site.name}` : site.name,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${site.name}` : site.name,
      description,
      images: [image],
    },
  };
}

// Structured data (JSON-LD) so Google understands the business.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}/images/og-image.jpg`,
  description: site.description,
  email: site.contact.email,
  telephone: site.contact.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.contact.addressLine1}, ${site.contact.addressLine2}`,
    addressLocality: site.contact.city,
    addressCountry: "PK",
  },
  areaServed: "Pakistan",
  sameAs: site.social.map((s) => s.href),
};
