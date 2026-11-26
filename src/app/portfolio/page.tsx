import { PageHero } from "@/components/ui/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Explore apps, websites and e-commerce stores crafted by Fame Business Solutions — including FameWheels, healthcare, real-estate and retail brands.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumb="Portfolio"
        eyebrow="Our Work"
        title={<>Empowering positive change, <span className="text-gradient">one client at a time</span></>}
        text="A selection of the 250+ apps and websites we've designed, built and launched."
      />
      <FeaturedProject />
      <section className="section pt-0">
        <div className="container-x">
          <PortfolioGrid />
        </div>
      </section>
      <Testimonials />
      <div className="pt-20 md:pt-28"><CtaBanner title="Your project could be next." /></div>
    </>
  );
}
