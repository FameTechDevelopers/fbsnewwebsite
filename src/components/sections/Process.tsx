import { process } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="How We Work"
          title={<>A refined process, <span className="text-gradient">flawless results</span></>}
          text="Empowering positive change, one client at a time."
        />
        <ol className="relative mt-20 grid gap-10 md:grid-cols-4">
          <div className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent md:block" />
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 120} className="relative text-center">
              <li className="list-none">
                <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-accent/50 bg-ink font-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-mist">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
