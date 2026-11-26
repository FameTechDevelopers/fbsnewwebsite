import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";
import { Faq } from "@/components/sections/Faq";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

// Pre-build a page for every service (fast + SEO friendly)
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} in Karachi`,
    description: `${service.intro} ${service.short}`.slice(0, 160),
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "Pakistan",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero crumb={service.title} eyebrow="Service" title={service.title} text={service.intro} />

      <section className="section pt-0">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-4xl">What&apos;s included</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <Reveal key={f} delay={i * 60}>
                  <li className="card flex items-center gap-4 p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span>{f}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <h2 className="mt-16 text-4xl">Tools & technologies</h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {service.tech.map((t) => (
                <li key={t} className="rounded-full border border-line px-5 py-2 text-sm text-fg/85">{t}</li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="card sticky top-28 p-8">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent/15 text-accent">
                <Icon name={service.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-3xl">Ready to start?</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                Book a free consultation and receive a tailored proposal within 48 hours.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Button href="#enquire">Request a Proposal</Button>
                <Button href={`https://wa.me/${site.contact.whatsapp}`} variant="outline" arrow={false}>WhatsApp Us</Button>
              </div>
              <div className="mt-10 border-t border-line pt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-mist">Other services</p>
                <ul className="mt-4 space-y-3">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/services/${o.slug}`} className="flex items-center justify-between text-sm hover:text-accent">
                        {o.title} <Icon name="arrowUpRight" className="h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="enquire" className="section scroll-mt-20 bg-ink-2/60">
        <div className="container-x max-w-4xl">
          <h2 className="mb-10 text-center text-4xl md:text-5xl">
            Tell us about your <span className="text-gradient">{service.title.toLowerCase()}</span> project
          </h2>
          <ContactForm defaultService={service.title} />
        </div>
      </section>

      <Faq />
    </>
  );
}
