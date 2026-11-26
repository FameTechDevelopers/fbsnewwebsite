import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { investment } from "@/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Startup Investment",
  description:
    "FBS Startup Investment connects early-stage Pakistani ventures with investors, facilitation services and an experienced advisory network.",
  path: "/investment",
});

const icons = ["chart", "layers", "users"] as const;

export default function InvestmentPage() {
  return (
    <>
      <PageHero crumb="Startup Investment" eyebrow="FBS Startup Investment" title={investment.heading} text={investment.sub} />

      <section className="section pt-0">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {investment.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="card card-hover h-full p-9">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/15 text-accent">
                  <Icon name={icons[i]} className="h-7 w-7" />
                </span>
                <h2 className="mt-6 text-3xl">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-mist">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-ink-2/60">
        <div className="container-x grid gap-16 md:grid-cols-2">
          {investment.details.map((d, i) => (
            <Reveal key={d.title} delay={i * 120}>
              <span className="font-display text-7xl text-accent/30">0{i + 1}</span>
              <h2 className="mt-2 text-4xl md:text-5xl">{d.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-mist">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBanner title="Have a startup idea? Let's fuel its growth together." />
      </div>
    </>
  );
}
