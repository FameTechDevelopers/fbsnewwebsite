// Testimonials, process steps, FAQs, pricing and investment content.

export const testimonials = [
  {
    quote:
      "Thanks to Fame Business Solutions, my clinic now has a professional website that perfectly represents my services. Their team's expertise and attention to detail have made a significant impact on my online presence. Highly recommended!",
    name: "Dr. Kashif",
    role: "Cardiologist",
  },
  {
    quote:
      "Fame Business Solutions delivered exceptional websites for both my personal portfolio and clinic. Their understanding of my field and dedication to quality are evident in the outstanding results. I couldn't be happier with their services!",
    name: "Dr. Shohab",
    role: "Orthopedician",
  },
];

export const process = [
  {
    title: "Discovery",
    text: "We listen to understand your idea, audience and goals. Then our creative teams put their heads together and polish it into a shining diamond.",
  },
  {
    title: "Design & Build",
    text: "Skilled designers and engineers with state-of-the-art machines craft your product. Coming up with brilliant products is our habit.",
  },
  {
    title: "Review & Test",
    text: "Every screen, feature and device is reviewed and tested rigorously so you launch with confidence.",
  },
  {
    title: "Launch & Grow",
    text: "On-time delivery is our best service — then we stay by your side with support, marketing and continuous improvement.",
  },
];

export const faqs = [
  {
    q: "What methodology do you use to complete a project?",
    a: "We follow an Agile approach with weekly sprints, regular demos and a dedicated project manager, so you see progress continuously and can give feedback early.",
  },
  {
    q: "Can you help develop a custom product tailored to my needs?",
    a: "Absolutely. Most of our work is custom — from mobile apps and SaaS platforms to CRMs and ERPs. We start with discovery to shape the right solution for your business.",
  },
  {
    q: "How much does a custom software project cost?",
    a: "It depends on scope, features and platforms. Websites start from $199 and custom apps are quoted after a free consultation. Share your idea and we'll send a detailed proposal.",
  },
  {
    q: "How long will my project take to complete?",
    a: "A standard website takes 1–3 weeks, an e-commerce store 3–6 weeks and a mobile app 6–16 weeks depending on complexity. You'll get a clear timeline before we start.",
  },
  {
    q: "Do you offer code reviews?",
    a: "Yes. We audit existing code for quality, security and performance and give you a clear, prioritised improvement plan.",
  },
  {
    q: "Do you provide ongoing support after project completion?",
    a: "Yes — we offer flexible maintenance plans covering updates, security, monitoring, bug fixes and new features.",
  },
];

export type PricingPlan = {
  name: string;
  price: number;
  popular?: boolean;
  features: string[];
};

const guarantees = [
  "Dedicated Project Manager",
  "100% Ownership Rights",
  "100% Satisfaction Guarantee",
  "100% Money Back Guarantee",
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 199,
    features: [
      "3 Page Website",
      "Custom Layout Design",
      "Contact / Query Form",
      "1 Banner Design",
      "2 Stock Photos",
      "FREE Favicon Design",
      "Cross Browser Compatible",
      "Initial Concepts in 48 Hours",
      ...guarantees,
    ],
  },
  {
    name: "Startup",
    price: 699,
    features: [
      "5 Page Website",
      "Custom Layout Design",
      "Contact / Query Form",
      "3 Banner Designs",
      "5 Stock Photos",
      "FREE Google Friendly Sitemap",
      "Unlimited Revisions",
      "Initial Concepts in 48 Hours",
      ...guarantees,
    ],
  },
  {
    name: "Professional",
    price: 999,
    popular: true,
    features: [
      "Up to 10 Unique Pages",
      "CMS / Admin Panel Integration",
      "5+ Stock Photos & Banners",
      "FREE Social Media Integration",
      "FREE Google Friendly Sitemap",
      "Unlimited Revisions",
      "Custom, Interactive & Dynamic Design",
      "Expert Designers & Developers",
      ...guarantees,
    ],
  },
  {
    name: "E-Commerce",
    price: 1499,
    features: [
      "Custom E-Commerce Website",
      "Up to 200 Products",
      "CMS / Admin Panel",
      "Fully Mobile Responsive",
      "Shopping Cart & Payment Gateway",
      "Order Management & Tracking",
      "Search Engine Submission",
      "Unlimited Revisions",
      ...guarantees,
    ],
  },
  {
    name: "Corporate",
    price: 1999,
    features: [
      "Up to 15 Unique Pages",
      "Custom, Interactive & Dynamic Design",
      "Custom WordPress / PHP Development",
      "Fully Mobile Responsive",
      "Up to 10 Custom Banner Designs",
      "Content Management System",
      "Newsletter Signup & Search",
      "Up to 15 Professional Email IDs",
      ...guarantees,
    ],
  },
  {
    name: "Platinum",
    price: 3499,
    features: [
      "Everything in Corporate",
      "Premium Custom UI / UX",
      "Live Social Feeds Integration",
      "Advanced SEO Setup",
      "Search Engine Submission",
      "Complete Deployment",
      "Complete Source Files",
      "Priority Support",
      ...guarantees,
    ],
  },
];

export const investment = {
  heading: "Empowering Early-Stage Ventures for a Prosperous Pakistan",
  sub: "Access the capital, network and mentorship needed to fuel the growth of your venture.",
  pillars: [
    {
      title: "Investment Opportunities",
      text: "Connect with a network of investors eager to support groundbreaking startup ventures.",
    },
    {
      title: "Facilitation Services",
      text: "Enjoy a streamlined process that matches startups with investors and advisors.",
    },
    {
      title: "Advisory Network",
      text: "Gain valuable insights from seasoned advisors with diverse industry experience.",
    },
  ],
  details: [
    {
      title: "Diverse Investor Network",
      text: "At FBS Startup Investment, we offer early-stage ventures access to a diverse and dynamic investor network — from seasoned angels to forward-thinking venture capitalists.",
    },
    {
      title: "Tailored Mentorship",
      text: "Get advice on strategy, market positioning and operational excellence from seasoned mentors who've navigated similar paths, and propel your startup towards success.",
    },
  ],
};
