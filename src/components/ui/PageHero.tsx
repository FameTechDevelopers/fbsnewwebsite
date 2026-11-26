import Link from "next/link";
import type { ReactNode } from "react";

// Hero banner used at the top of every inner page.
export function PageHero({
  eyebrow,
  title,
  text,
  crumb,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-[0.25em] text-mist">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-3 text-accent">/</span>
          <span className="text-fg">{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[1.05] md:text-7xl">{title}</h1>
        {text && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">{text}</p>}
      </div>
    </section>
  );
}
