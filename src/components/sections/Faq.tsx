import { faqs } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Native <details> accordion — no JavaScript needed. Also outputs FAQ schema for Google.
export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Questions, <span className="text-gradient">answered</span></>}
            text="Everything you need to know before starting your project. Can't find your answer? Call or WhatsApp us anytime."
          />
        </div>
        <div className="divide-y divide-line border-y border-line lg:col-span-7">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium md:text-xl">
                {f.q}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-accent transition group-open:rotate-45 group-open:border-accent">
                  <Icon name="plus" className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 pr-12 leading-relaxed text-mist">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
