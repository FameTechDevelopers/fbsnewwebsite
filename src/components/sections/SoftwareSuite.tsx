import Link from "next/link";
import { getService } from "@/data/services";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

// Business software shown as cards next to the AI highlight.
const softwareSlugs = ["crm-development", "hrm-payroll-software", "lms-development", "erp-solutions"];

export function SoftwareSuite() {
  const ai = getService("ai-integration-automation")!;
  const software = softwareSlugs.map((s) => getService(s)!);

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-3/10 blur-[140px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="AI & Business Software"
          title={<>Automate your business with <span className="text-gradient">AI &amp; smart software</span></>}
          text="Custom-built CRM, HRM, LMS and ERP systems, plus AI chatbots and workflow automation, so your team spends less time on manual work and more time growing."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {/* AI highlight */}
          <Reveal className="lg:col-span-5">
            <Link
              href={`/services/${ai.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/25 via-ink-3 to-accent-3/25 p-8 md:p-10"
            >
              <div className="bg-grid absolute inset-0 opacity-70" />
              <div className="relative flex flex-1 flex-col">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent-2 via-accent to-accent-3 text-white shadow-[0_0_40px_-5px_rgba(59,130,246,0.8)]">
                  <Icon name={ai.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-8 text-3xl font-semibold md:text-4xl">{ai.title}</h3>
                <p className="mt-4 leading-relaxed text-mist">{ai.short}</p>
                <ul className="mt-8 grid flex-1 gap-3">
                  {ai.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-fg/90">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-accent-2" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {ai.tech.slice(0, 6).map((t) => (
                    <span key={t} className="rounded-full border border-fg/15 bg-ink/40 px-3 py-1 text-xs text-fg/80">{t}</span>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-2">
                  Explore AI solutions
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Software products */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {software.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link href={`/services/${s.slug}`} className="card card-hover group flex h-full flex-col p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-2 transition group-hover:bg-accent group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.short}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {s.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex gap-2 text-xs text-fg/75">
                        <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" /> {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    Learn more <Icon name="arrowUpRight" className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-ink-2/70 p-6 md:p-8">
          <p className="max-w-2xl text-fg/90">
            <span className="font-semibold text-accent-2">Not sure which system you need?</span> Book a free consultation and
            we&apos;ll map out the right CRM, HRM, LMS, ERP or AI solution for your workflow.
          </p>
          <Button href="/contact">Book a Free Consultation</Button>
        </div>
      </div>
    </section>
  );
}
