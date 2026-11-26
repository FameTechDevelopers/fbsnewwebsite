import type { IconName } from "@/components/ui/Icon";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  intro: string;
  features: string[];
  tech: string[];
};

// Every service gets its own SEO page at /services/[slug]
export const services: Service[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Native & cross-platform iOS and Android apps engineered to scale.",
    icon: "mobile",
    intro:
      "From idea to App Store, we design and build high-performance mobile apps that users love — the same team behind the FameWheels app trusted by thousands of car buyers and sellers.",
    features: [
      "iOS & Android native apps",
      "Cross-platform (React Native / Flutter)",
      "App Store & Play Store launch",
      "Real-time features, chat & live bidding",
      "Payment gateway integration",
      "Push notifications & analytics",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Lightning-fast websites and web apps built on modern stacks.",
    icon: "code",
    intro:
      "Corporate websites, portals and SaaS platforms built with Next.js and modern frameworks — fast, secure, SEO-ready and beautifully responsive on every screen.",
    features: [
      "Corporate & business websites",
      "Custom web applications & portals",
      "CMS / Admin panel integration",
      "API development & integrations",
      "Performance & Core Web Vitals tuning",
      "Hosting, deployment & maintenance",
    ],
    tech: ["Next.js", "React", "Node.js", ".NET", "Laravel", "WordPress"],
  },
  {
    slug: "ai-integration-automation",
    title: "AI Integration & Automation",
    short: "AI chatbots, agents and automated workflows that save hours every day.",
    icon: "sparkles",
    intro:
      "Put AI to work in your business. We integrate leading AI models into your website, apps and internal tools, and automate repetitive tasks — from answering customers on WhatsApp to processing documents and syncing data between systems.",
    features: [
      "AI chatbots for website & WhatsApp",
      "Custom AI agents & assistants",
      "Knowledge-base Q&A on your own documents",
      "Document, invoice & CV processing",
      "Workflow automation between your apps",
      "AI content, analytics & lead scoring",
    ],
    tech: ["OpenAI", "Claude", "Gemini", "LangChain", "n8n", "Zapier", "Make", "Python"],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    short: "Capture, track and convert every lead from one smart dashboard.",
    icon: "users",
    intro:
      "Custom CRM systems built around your sales process — capture leads from your website, ads and WhatsApp, assign them to your team, automate follow-ups and see your entire pipeline at a glance.",
    features: [
      "Lead capture from web, ads & WhatsApp",
      "Sales pipeline & deal tracking",
      "Automated follow-ups & reminders",
      "Customer history & documents",
      "Team roles, targets & performance",
      "Reports, dashboards & mobile access",
    ],
    tech: [".NET", "Node.js", "React", "Next.js", "SQL Server", "PostgreSQL"],
  },
  {
    slug: "hrm-payroll-software",
    title: "HRM & Payroll Software",
    short: "Attendance, leave, payroll and people management — automated.",
    icon: "briefcase",
    intro:
      "A complete HR management system for growing teams: track attendance, manage leave, run payroll with tax calculations and give every employee a self-service portal.",
    features: [
      "Attendance with biometric / mobile check-in",
      "Leave & shift management",
      "Payroll, salary slips & tax calculation",
      "Employee self-service portal",
      "Recruitment & onboarding",
      "Performance reviews & appraisals",
    ],
    tech: [".NET", "React", "React Native", "SQL Server", "Biometric devices"],
  },
  {
    slug: "lms-development",
    title: "LMS & E-Learning Platforms",
    short: "Online academies, school portals and corporate training platforms.",
    icon: "graduation",
    intro:
      "Launch your own learning platform — sell courses online, run live classes, test students and issue certificates, on web and mobile.",
    features: [
      "Course builder with video lessons",
      "Quizzes, assignments & grading",
      "Live classes (Zoom / Google Meet)",
      "Student, teacher & parent portals",
      "Certificates & progress tracking",
      "Course sales & payment gateway",
    ],
    tech: ["Next.js", "React Native", "Node.js", "Moodle", "Zoom API"],
  },
  {
    slug: "erp-solutions",
    title: "ERP & Inventory Systems",
    short: "Run inventory, sales, purchase and accounts from one system.",
    icon: "layers",
    intro:
      "ERP and inventory systems tailored to how your business actually works — with real-time stock, multi-branch operations, POS and accounting in one place.",
    features: [
      "Inventory & warehouse management",
      "Sales, purchase & invoicing",
      "Accounts & financial reports",
      "Point of sale (POS)",
      "Multi-branch & multi-user roles",
      "Dashboards & business intelligence",
    ],
    tech: [".NET", "Node.js", "React", "SQL Server", "PostgreSQL"],
  },
  {
    slug: "legal-corporate-consultancy",
    title: "Legal & Corporate Consultancy",
    short: "Corporate law, company registration, contracts and compliance — handled by experts.",
    icon: "scale",
    intro:
      "Start, run and protect your business with confidence. Our legal and corporate advisors guide you through company formation, SECP and FBR compliance, contracts, intellectual property and day-to-day corporate law matters, so you can focus on growth.",
    features: [
      "Company registration (SECP) & incorporation",
      "Corporate law advisory & governance",
      "Contracts, agreements & NDAs drafting",
      "Trademark, copyright & IP protection",
      "Tax registration & FBR compliance",
      "Partnership, shareholder & startup legal setup",
    ],
    tech: ["SECP", "FBR", "IPO Pakistan", "Companies Act 2017", "USA LLC"],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Solutions",
    short: "Online stores that convert browsers into loyal buyers.",
    icon: "cart",
    intro:
      "Custom stores and marketplaces with secure checkout, inventory, order tracking and local and international payment gateways.",
    features: [
      "Custom storefronts & marketplaces",
      "Shopify & WooCommerce",
      "Payment gateway integration",
      "Product, order & inventory management",
      "Multi-vendor platforms",
      "Conversion rate optimisation",
    ],
    tech: ["Shopify", "WooCommerce", "Next.js Commerce", "Stripe", "JazzCash", "Easypaisa"],
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    short: "Intuitive, elegant interfaces grounded in user research.",
    icon: "pen",
    intro:
      "Wireframes, prototypes and design systems that make complex products feel effortless and premium.",
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "Design systems & component libraries",
      "Usability testing",
      "App & web interface design",
      "Accessibility (WCAG) reviews",
    ],
    tech: ["Figma", "Adobe XD", "Framer", "Protopie"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Performance campaigns that drive measurable growth.",
    icon: "megaphone",
    intro:
      "Data-led campaigns across Google, Meta and TikTok that turn ad spend into qualified leads and sales — with transparent reporting.",
    features: [
      "Google Ads (Search, Display, YouTube)",
      "Meta & TikTok ads",
      "Lead generation funnels",
      "Email & WhatsApp marketing",
      "Analytics & conversion tracking",
      "Monthly performance reports",
    ],
    tech: ["Google Ads", "Meta Ads", "GA4", "Tag Manager", "HubSpot"],
  },
  {
    slug: "seo-services",
    title: "Search Engine Optimisation",
    short: "Rank higher on Google and own your market's search results.",
    icon: "search",
    intro:
      "Technical, on-page and local SEO that grows organic traffic month after month — and keeps it.",
    features: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page optimisation",
      "Local SEO & Google Business Profile",
      "Link building & digital PR",
      "Content strategy",
    ],
    tech: ["Search Console", "Ahrefs", "SEMrush", "Screaming Frog"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Management",
    short: "Content and community that builds a loyal following.",
    icon: "heart",
    intro:
      "We plan, create and publish scroll-stopping content, manage communities and grow your brand across every platform.",
    features: [
      "Content calendars & strategy",
      "Reels, shorts & post design",
      "Community management",
      "Influencer collaborations",
      "Paid social amplification",
      "Brand monitoring",
    ],
    tech: ["Instagram", "Facebook", "TikTok", "LinkedIn", "YouTube"],
  },
  {
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    short: "Distinctive identities that look as premium as you are.",
    icon: "diamond",
    intro:
      "Logos, brand identities and marketing collateral crafted with a sharp eye for detail.",
    features: [
      "Logo & visual identity",
      "Brand guidelines",
      "Stationery & packaging",
      "Social media creatives",
      "Brochures, flyers & billboards",
      "Pitch decks & presentations",
    ],
    tech: ["Illustrator", "Photoshop", "InDesign", "Figma"],
  },
  {
    slug: "2d-3d-animation",
    title: "2D / 3D Animation",
    short: "Explainer videos, product renders and motion graphics.",
    icon: "cube",
    intro:
      "Our studio with state-of-the-art rendering machines produces cinematic 2D and 3D animation that explains, sells and inspires.",
    features: [
      "2D explainer videos",
      "3D product modelling & renders",
      "Motion graphics & logo animation",
      "Architectural visualisation",
      "Character animation",
      "Ad films & social video",
    ],
    tech: ["Blender", "Cinema 4D", "After Effects", "Maya"],
  },
  {
    slug: "video-production",
    title: "Video Production",
    short: "Commercials, corporate films and content that tells your story.",
    icon: "play",
    intro:
      "From scripting and shooting to editing and colour grading — complete video production for brands and campaigns.",
    features: [
      "Scriptwriting & storyboarding",
      "Commercial & corporate shoots",
      "Product & real-estate videos",
      "Editing & colour grading",
      "Drone videography",
      "Podcast & interview production",
    ],
    tech: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software & SaaS",
    short: "Bespoke platforms and SaaS products built around your business.",
    icon: "workflow",
    intro:
      "Have an idea that doesn't fit an off-the-shelf tool? We design and build custom portals, booking systems, marketplaces and multi-tenant SaaS products from scratch.",
    features: [
      "SaaS products & subscription billing",
      "Customer & vendor portals",
      "Booking & reservation systems",
      "Third-party API integrations",
      "Admin dashboards & reporting",
      "Legacy system modernisation",
    ],
    tech: [".NET", "Node.js", "Next.js", "PostgreSQL", "AWS"],
  },
  {
    slug: "content-writing",
    title: "Content Writing & Copy",
    short: "Words that rank, persuade and convert.",
    icon: "doc",
    intro:
      "SEO blogs, website copy, ad copy and scripts written by specialists who understand your audience.",
    features: [
      "Website & landing page copy",
      "SEO blog articles",
      "Ad & social copy",
      "Product descriptions",
      "Video scripts",
      "Press releases",
    ],
    tech: ["English", "Urdu", "Arabic"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud, Hosting & DevOps",
    short: "Secure, scalable infrastructure that never sleeps.",
    icon: "cloud",
    intro:
      "Cloud architecture, CI/CD pipelines, monitoring and managed hosting so your product stays fast and online.",
    features: [
      "AWS, Azure & Vercel deployment",
      "CI/CD pipelines",
      "Domain, SSL & email setup",
      "Backups & disaster recovery",
      "Performance monitoring",
      "Security hardening",
    ],
    tech: ["AWS", "Azure", "Vercel", "Docker", "GitHub Actions"],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    short: "Ongoing care so your digital products keep improving.",
    icon: "shield",
    intro:
      "Bug fixes, updates, security patches and feature enhancements on a flexible monthly retainer.",
    features: [
      "24/7 uptime monitoring",
      "Security & plugin updates",
      "Bug fixing & enhancements",
      "Content updates",
      "Monthly health reports",
      "Dedicated account manager",
    ],
    tech: ["SLA based", "Monthly retainer", "Priority support"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
