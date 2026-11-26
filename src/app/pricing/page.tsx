import { PageHero } from "@/components/ui/PageHero";
import { PricingCards } from "@/components/sections/PricingCards";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Website Packages & Pricing",
  description:
    "Website packages from $199 — Basic, Startup, Professional, E-Commerce, Corporate and Platinum. One-time pricing, full ownership and a money-back guarantee.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumb="Pricing"
        eyebrow="Packages"
        title={<>Transparent pricing, <span className="text-gradient">no hidden fees</span></>}
        text="Every package includes a dedicated project manager, complete source files, 100% ownership rights and a money-back guarantee. Mobile apps, animation and marketing are quoted on request."
      />
      <section className="section pt-0">
        <div className="container-x">
          <PricingCards />
          <p className="mt-10 text-center text-sm text-mist">
            Value-added services: Mobile responsive +$200 · CMS +$250 (Basic, Startup & Professional plans).
          </p>
        </div>
      </section>
      <Faq />
      <CtaBanner title="Need a custom app, animation or marketing package?" />
    </>
  );
}
