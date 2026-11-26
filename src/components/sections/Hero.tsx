import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 lg:min-h-screen lg:pb-28">
      {/* Background glow + grid */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute top-20 -left-40 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-3/15 blur-[140px]" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="eyebrow">Digital Agency &amp; Software House · Karachi</span>
          <h1 className="mt-7 text-[2.1rem] leading-[1.12] font-semibold sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]">
            Your One-Stop Solution for{" "}
            <span className="text-gradient">Exceptional</span> Digital Products
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg">
            Searching for a guaranteed way to bring your business idea to life? Fame Business Solutions designs, builds and
            markets apps, websites, AI automation and business software that help you grow faster.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Start Your Project</Button>
            <Button href="/portfolio" variant="outline" arrow={false}>
              View Our Work
            </Button>
          </div>

          <dl className="mt-16 grid max-w-xl grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl text-fg md:text-5xl">
                  <Counter to={s.value} />
                  <span className="text-accent">{s.suffix}</span>
                </dd>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-mist">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line">
            <Image
              src="/images/app-dev.jpg"
              alt="Mobile app interface designed by Fame Business Solutions"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="card absolute -bottom-6 -left-4 flex items-center gap-4 p-5 sm:-left-10">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent/15 text-accent">
              <Icon name="star" />
            </span>
            <div>
              <p className="font-display text-2xl">Top Rated</p>
              <p className="text-xs text-mist">Industry-recognised professionals</p>
            </div>
          </div>
          <div className="absolute -top-5 -right-3 hidden rounded-full border border-accent/40 bg-ink/80 px-5 py-2 text-xs tracking-[0.2em] text-accent uppercase backdrop-blur sm:block">
            Karachi · Pakistan
          </div>
        </div>
      </div>
    </section>
  );
}
