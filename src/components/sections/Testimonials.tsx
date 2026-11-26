import { testimonials } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="section bg-ink-2/60">
      <div className="container-x">
        <SectionHeading center eyebrow="Testimonials" title={<>Words from our <span className="text-gradient">clients</span></>} />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <blockquote className="card flex h-full flex-col p-8 md:p-12">
                <Icon name="quote" className="h-10 w-10 text-accent" strokeWidth={1.2} />
                <div className="mt-4 flex gap-1 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Icon key={k} name="star" className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <p className="mt-6 flex-1 font-display text-2xl leading-snug text-fg/90">“{t.quote}”</p>
                <footer className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent/15 font-display text-xl text-accent">
                    {t.name.replace("Dr. ", "").charAt(0)}
                  </span>
                  <div>
                    <cite className="not-italic font-semibold">{t.name}</cite>
                    <p className="text-xs uppercase tracking-[0.2em] text-mist">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
