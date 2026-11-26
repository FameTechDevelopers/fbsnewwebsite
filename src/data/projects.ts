export type ProjectCategory = "Web Development" | "E-Commerce" | "Healthcare" | "Real Estate";

export type Project = {
  title: string;
  category: ProjectCategory;
  image: string;
};

export type FeaturedProject = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image?: { src: string; width: number; height: number; alt: string };
  imageStyle: "floating" | "framed" | "graphic"; // floating = transparent PNG mockup, framed = photo in a rounded frame, graphic = designed panel (no photo needed)
  stats?: { value: string; label: string }[]; // shown on the "graphic" panel
  logo?: string;                     // optional brand logo shown on the image
  glow: string;                      // brand color for the background glow
  href: string;
  cta: string;                       // button text
};

// Big showcase cards on Home & Portfolio. Add another object to feature more products.
export const featuredProjects: FeaturedProject[] = [
  {
    title: "FameWheels",
    subtitle: "Revolutionizing the Automotive Industry",
    description:
      "Launched in Pakistan, FameWheels is reshaping the car buying and selling experience with cutting-edge technology. We're expanding into UAE, North America and Canada to bring seamless car solutions to a global audience — live bidding, car inspections, featured ads and more.",
    highlights: ["Live Bidding", "Car Inspections", "Featured Ads", "iOS & Android Apps"],
    image: { src: "/images/famewheels-banner.png", width: 399, height: 347, alt: "FameWheels mobile app screens" },
    imageStyle: "floating",
    glow: "#c4161c",
    href: "https://www.famewheels.com/",
    cta: "Visit FameWheels",
  },
  {
    title: "Fame Lease & Financing",
    subtitle: "Vehicle Leasing Made Simple & Affordable",
    description:
      "Fame Lease & Financing makes vehicle ownership simple, affordable and accessible across Pakistan. Customers compare cars, calculate monthly installments with a live car loan calculator and apply online — backed by flexible financing, insurance facilitation, GPS tracking and quick approval.",
    highlights: ["Car Loan Calculator", "Online Application", "Insurance & GPS Tracking", "Quick Approval"],
    image: { src: "/images/famelease-car.jpg", width: 1200, height: 731, alt: "Car available on Fame Lease & Financing" },
    imageStyle: "framed",
    logo: "/images/famelease-logo.png",
    glow: "#1ab1e0",
    href: "https://www.famelease.com/",
    cta: "Visit FameLease",
  },
  {
    title: "Elite Financial & Taxation Group",
    subtitle: "Grow Your Business. We'll Handle the Numbers.",
    description:
      "Elite Financial & Taxation Group offers smart financial and business solutions in Pakistan and the USA — from income tax returns and NTN registration to company formation, trademarks and US LLC filing. Clients book consultations directly through the website and WhatsApp.",
    highlights: ["Income Tax Returns", "NTN & Sales Tax Registration", "Company & Trademark Registration", "USA LLC & Tax Filing"],
    image: { src: "/images/elite-office.jpg", width: 1060, height: 760, alt: "Elite Financial & Taxation consultants at work" },
    imageStyle: "framed",
    logo: "/images/elite-logo.png",
    glow: "#f26b21",
    href: "https://www.elitetaxation.pk/",
    cta: "Visit Elite Taxation",
  },
  {
    title: "Fame Builders & Developers",
    subtitle: "Building Modern Spaces to Live & Work",
    description:
      "Fame Builders & Developers delivers residential and commercial real-estate projects, managing every stage from planning and approvals through construction and handover, with a focus on quality, transparency and on-time delivery.",
    highlights: ["Residential Projects", "Commercial Developments", "Planning & Approvals", "Construction & Handover"],
    imageStyle: "graphic",
    stats: [
      { value: "Residential", label: "Apartments & homes" },
      { value: "Commercial", label: "Offices & retail" },
      { value: "Turnkey", label: "Plan → build → handover" },
    ],
    glow: "#d4a017",
    href: "/contact",
    cta: "Enquire Now",
  },
];

// Add a new project: drop the image in /public/images/projects and add a line below.
export const projects: Project[] = [
  { title: "Cleveland Clinic", category: "Healthcare", image: "/images/projects/project-1.png" },
  { title: "MedExpress", category: "Healthcare", image: "/images/projects/project-2.png" },
  { title: "True Linkswear", category: "E-Commerce", image: "/images/projects/project-3.png" },
  { title: "Maison Labiche", category: "E-Commerce", image: "/images/projects/project-4.png" },
  { title: "The Altman Brothers", category: "Real Estate", image: "/images/projects/project-5.png" },
  { title: "Tim Davis Hamptons", category: "Real Estate", image: "/images/projects/project-6.png" },
  { title: "Sunnyside Auto Repair", category: "Web Development", image: "/images/projects/project-7.png" },
  { title: "The Everywhereist", category: "Web Development", image: "/images/projects/project-8.png" },
  { title: "CrossFit", category: "Web Development", image: "/images/projects/project-9.png" },
  { title: "T Nation", category: "E-Commerce", image: "/images/projects/project-10.png" },
  { title: "Pro Housekeepers", category: "Web Development", image: "/images/projects/project-11.png" },
  { title: "Maid to Shine", category: "Web Development", image: "/images/projects/project-12.png" },
  { title: "Incredibles", category: "E-Commerce", image: "/images/projects/project-13.png" },
  { title: "Hanselmann Pottery", category: "E-Commerce", image: "/images/projects/project-14.png" },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web Development",
  "E-Commerce",
  "Healthcare",
  "Real Estate",
];

export const partners = [
  { name: "FBR", image: "/images/partners/fbr.png" },
  { name: "P@SHA", image: "/images/partners/pasha.webp" },
  { name: "PSEB", image: "/images/partners/pseb.png" },
  { name: "SECP", image: "/images/partners/secp.webp" },
  { name: "Top Rated", image: "/images/partners/top-rated.png" },
];
