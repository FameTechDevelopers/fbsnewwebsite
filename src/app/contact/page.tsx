import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo, MapEmbed } from "@/components/sections/ContactInfo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get a free quote from Fame Business Solutions. Visit us at Plot FL, A-5, 3 Nehr-e-Khayyam St, Clifton Block 5, Karachi, call +92 326 2226222 or email info@famebusinesssolutions.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get a Quote"
        title={<>Let&apos;s create something <span className="text-gradient">remarkable</span></>}
        text="Share your idea and our team will respond within one business day with next steps and a tailored proposal."
      />
      <section className="section pt-0">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><ContactInfo /></div>
          <div className="lg:col-span-7"><ContactForm /></div>
        </div>
      </section>
      <section className="pb-20 md:pb-28">
        <div className="container-x"><MapEmbed /></div>
      </section>
    </>
  );
}
