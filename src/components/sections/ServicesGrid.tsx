import Link from "next/link";
import { services } from "@/data/services";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ServicesGrid({
  limit,
  showHeading = true,
  exclude = [],
}: {
  limit?: number;
  showHeading?: boolean;
  exclude?: string[]; // slugs to hide (e.g. ones already shown elsewhere on the page)
}) {
  const visible = services.filter((s) => !exclude.includes(s.slug));
  const list = limit ? visible.slice(0, limit) : visible;
  return (
    <section className="section">
      <div className="container-x">
        {showHeading && (
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title={<>Full-service digital, <span className="text-gradient">crafted to perfection</span></>}
              text="From innovative mobile apps to dynamic e-commerce and beyond — every discipline a modern brand needs, under one roof."
            />
            {limit && <Button href="/services" variant="outline" className="shrink-0">All Services</Button>}
          </div>
        )}

        <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${showHeading ? "mt-16" : ""}`}>
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 90}>
              <Link href={`/services/${s.slug}`} className="card card-hover group flex h-full flex-col p-7">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-lg text-mist/50">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Explore <Icon name="arrowUpRight" className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
