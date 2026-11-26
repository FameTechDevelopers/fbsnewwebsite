import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: "Digital Agency Services",
  description:
    "AI integration & automation, CRM, HRM, LMS, ERP, mobile apps, web development, e-commerce, UI/UX, digital marketing, SEO, social media, branding, 2D/3D animation, video production and custom software — all from Fame Business Solutions, Karachi.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title={<>Everything your brand needs, <span className="text-gradient">beautifully executed</span></>}
        text={`${services.length} disciplines — from AI automation and business software to apps, marketing and animation — one dedicated team. Pick a single service or let us run your entire digital presence end-to-end.`}
      />
      <div className="-mt-10"><ServicesGrid showHeading={false} /></div>
      <Process />
      <CtaBanner />
    </>
  );
}
