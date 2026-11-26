import { services } from "./services";

// ─────────────────────────────────────────────────────────────
// Global company info. Edit here → updates everywhere on the site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Fame Business Solutions",
  shortName: "FBS",
  tagline: "Digital Agency & Software House in Karachi, Pakistan",
  description:
    "Fame Business Solutions is a digital agency and software house in Karachi, Pakistan — building mobile apps, websites, AI automation, CRM, HRM, LMS and ERP systems, plus digital marketing, SEO, branding and 2D/3D animation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://famebusinesssolutions.com",
  logo: "/images/logo-white.png",

  contact: {
    phone: "+923262226222",
    phoneDisplay: "+92 326 2226222",
    whatsapp: "923262226222",
    email: "info@famebusinesssolutions.com",
    addressLine1: "Plot FL, A-5, 3 Nehr-e-Khayyam St",
    addressLine2: "Clifton Block 5, Karachi",
    city: "Karachi",
    country: "Pakistan",
    hours: "Mon – Sat · 10:00 AM – 7:00 PM",
    mapEmbed:
      "https://www.google.com/maps?q=Nehr-e-Khayyam+Street+Clifton+Block+5+Karachi&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Nehr-e-Khayyam+Street+Clifton+Block+5+Karachi",
  },

  social: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],

  keywords: [
    "digital agency Karachi",
    "AI integration Pakistan",
    "AI chatbot development",
    "business automation Pakistan",
    "CRM software Pakistan",
    "HRM payroll software Pakistan",
    "LMS development",
    "ERP software Karachi",
    "corporate law consultancy Karachi",
    "company registration SECP",
    "app development Pakistan",
    "web development Karachi",
    "software house Karachi",
    "digital marketing agency Pakistan",
    "SEO services Karachi",
    "e-commerce website Pakistan",
    "2D 3D animation studio",
    "graphic design Karachi",
    "Fame Business Solutions",
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Startup Investment", href: "/investment" },
] as const;

export const stats = [
  { value: 250, suffix: "+", label: "App & Web Projects" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
  { value: services.length, suffix: "", label: "Services Under One Roof" },
  { value: 48, suffix: "h", label: "Initial Concepts" },
] as const;
