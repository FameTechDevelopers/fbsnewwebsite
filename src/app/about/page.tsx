import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { WhyUs } from "@/components/sections/WhyUs";
import { Partners } from "@/components/sections/Partners";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Fame Business Solutions is a leading digital agency in Karachi, Pakistan — a team of creative minds and tech enthusiasts helping businesses thrive in the digital age.",
  path: "/about",
});

const blocks = [
  {
    icon: "diamond" as const,
    title: "Our Vision",
    text: "We envision a Pakistan where every business, regardless of its scale or industry, harnesses the power of digital technology to unlock its full potential and reach new heights of success.",
  },
  {
    icon: "rocket" as const,
    title: "Our Mission",
    text: "To empower businesses across Pakistan to thrive in the digital era — delivering innovative solutions that drive growth, enhance brand visibility and foster meaningful connections with audiences.",
  },
  {
    icon: "users" as const,
    title: "Our Values",
    text: "Collaboration, creativity and a relentless pursuit of excellence. We build long-term partnerships by understanding your goals, challenges and aspirations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Us"
        title={<>Your premier <span className="text-gradient">digital partner</span> in Pakistan</>}
        text="Welcome to Fame Business Solutions — a dynamic team of creative minds and tech enthusiasts dedicated to helping businesses thrive in the ever-evolving digital landscape."
      />

      <section className="section pt-0">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
              <Image src="/images/app-dev.jpg" alt="Digital product design at Fame Business Solutions" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-5 text-4xl leading-tight md:text-5xl">A leading digital agency, rooted in Karachi</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-mist">
              <p>
                With a deep understanding of local market dynamics and a commitment to excellence, we craft bespoke strategies
                and cutting-edge technology that help our clients thrive in the digital age.
              </p>
              <p>
                From web design and development to digital marketing, branding and consulting, we offer a comprehensive suite
                of solutions tailored to each client. Our seasoned professionals combine creativity, technical expertise and
                strategic insight to deliver results that drive growth, enhance visibility and maximise ROI.
              </p>
              <p>
                We believe in collaboration and long-term partnerships — taking the time to understand your goals, then
                devising customised solutions that exceed expectations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="card card-hover h-full p-9">
                <Icon name={b.icon} className="h-8 w-8 text-accent" />
                <h3 className="mt-6 text-3xl">{b.title}</h3>
                <p className="mt-4 leading-relaxed text-mist">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Partners />
      <WhyUs />
      <div className="pt-20 md:pt-28"><CtaBanner /></div>
    </>
  );
}
