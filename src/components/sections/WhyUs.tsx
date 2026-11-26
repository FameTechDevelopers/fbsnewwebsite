import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const points: { icon: IconName; title: string; text: string }[] = [
  { icon: "users", title: "Senior, dedicated team", text: "A project manager plus specialist designers and engineers on every engagement." },
  { icon: "rocket", title: "On-time delivery", text: "Clear milestones and weekly demos — your product ships when we say it will." },
  { icon: "shield", title: "100% ownership", text: "Full source files and rights, money-back guarantee and no hidden fees." },
  { icon: "chart", title: "Built to grow", text: "SEO-ready, scalable and backed by marketing that brings real customers." },
];

export function WhyUs() {
  return (
    <section className="section relative overflow-hidden bg-ink-2/60">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line">
            <Image src="/images/testimonials-bg.jpg" alt="Fame Business Solutions team at work" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/90 via-ink/30 to-transparent" />
          </div>
          <div className="card absolute right-4 bottom-4 left-4 p-6 sm:right-auto sm:max-w-xs">
            <p className="font-display text-5xl text-accent">250+</p>
            <p className="mt-1 text-sm text-mist">App & web projects delivered with 100% customer satisfaction.</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why Fame Business Solutions"
            title={<>Where innovation <span className="text-gradient">meets execution</span></>}
            text="As pioneers in app development, we craft seamless digital experiences tailored to your unique vision. From concept to launch, our team combines cutting-edge technology with creative flair to bring your ideas to life."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Icon name={p.icon} className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{p.text}</p>
              </Reveal>
            ))}
          </div>
          <Button href="/about" variant="outline" className="mt-12">About Us</Button>
        </div>
      </div>
    </section>
  );
}
