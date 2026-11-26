import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { SoftwareSuite } from "@/components/sections/SoftwareSuite";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingCards } from "@/components/sections/PricingCards";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <ServicesGrid limit={8} exclude={["ai-integration-automation", "crm-development", "hrm-payroll-software", "lms-development", "erp-solutions"]} />
      <SoftwareSuite />
      <WhyUs />
      <FeaturedProject />

      <section className="section pt-0">
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Our Work" title={<>Selected <span className="text-gradient">projects</span></>} />
            <Button href="/portfolio" variant="outline" className="shrink-0">Full Portfolio</Button>
          </div>
          <PortfolioGrid limit={6} filters={false} />
        </div>
      </section>

      <Process />
      <Testimonials />

      <section className="section">
        <div className="container-x">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Pricing"
              title={<>Transparent packages, <span className="text-gradient">premium results</span></>}
              text="One-time pricing with no monthly or hidden fees. Need something bespoke? We'll tailor a quote."
            />
            <Button href="/pricing" variant="outline" className="shrink-0">All Packages</Button>
          </div>
          <PricingCards plans={pricingPlans.slice(1, 4)} />
        </div>
      </section>

      <Faq />

      <section className="section bg-ink-2/60">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Get a Quote" title={<>Let&apos;s talk about <span className="text-gradient">your project</span></>} />
            <div className="mt-10"><ContactInfo /></div>
          </div>
          <div className="lg:col-span-7"><ContactForm /></div>
        </div>
      </section>

      <div className="pt-20 md:pt-28"><CtaBanner /></div>
    </>
  );
}
