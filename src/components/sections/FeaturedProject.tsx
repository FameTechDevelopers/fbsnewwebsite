"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { featuredProjects, type FeaturedProject as Project } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const AUTOPLAY_MS = 7000;

// Slider of featured projects (order = order in data/projects.ts → featuredProjects).
export function FeaturedProject() {
  const count = featuredProjects.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => go(index - 1);

  // Autoplay (off when paused, tab hidden, or user prefers reduced motion)
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) next();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, next, index]);

  // Keep the active tab visible in the scrollable tab row (mobile)
  const tabsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const row = tabsRef.current;
    const tab = row?.children[index] as HTMLElement | undefined;
    if (row && tab) row.scrollTo({ left: tab.offsetLeft - row.offsetLeft - 16, behavior: "smooth" });
  }, [index]);

  // Swipe on touch / drag with mouse
  const onPointerDown = (e: PointerEvent) => (dragStart.current = e.clientX);
  const onPointerUp = (e: PointerEvent) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(dx) > 60) (dx < 0 ? next : prev)();
  };

  return (
    <section className="section" aria-labelledby="featured-heading">
      <div className="container-x">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Featured Projects</span>
              <h2 id="featured-heading" className="mt-5 text-4xl font-semibold md:text-5xl">
                Our flagship <span className="text-gradient">projects</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <SliderButton label="Previous project" onClick={prev} icon="left" />
              <SliderButton label="Next project" onClick={next} icon="right" />
            </div>
          </div>

          {/* Project tabs */}
          <div ref={tabsRef} role="tablist" aria-label="Featured projects" className="mb-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {featuredProjects.map((p, i) => (
              <button
                key={p.title}
                role="tab"
                aria-selected={i === index}
                aria-controls={`featured-slide-${i}`}
                onClick={() => go(i)}
                className={`relative shrink-0 overflow-hidden rounded-full border px-5 py-2.5 text-sm transition ${
                  i === index ? "border-accent/70 bg-accent/15 text-fg" : "border-line text-mist hover:border-accent/50 hover:text-fg"
                }`}
              >
                {p.title}
                {i === index && !paused && (
                  <span
                    key={index}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-2 to-accent-3 motion-reduce:hidden"
                    style={{ animation: `slider-progress ${AUTOPLAY_MS}ms linear forwards` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Slides */}
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured projects"
            className="relative touch-pan-y overflow-hidden rounded-[2.5rem]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") next();
              if (e.key === "ArrowLeft") prev();
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {featuredProjects.map((p, i) => (
                <div
                  key={p.title}
                  id={`featured-slide-${i}`}
                  role="tabpanel"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}: ${p.title}`}
                  aria-hidden={i !== index}
                  inert={i !== index}
                  className="w-full shrink-0"
                >
                  <ProjectCard project={p} priority={i === 0} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {featuredProjects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => go(i)}
                aria-label={`Show ${p.title}`}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-accent" : "w-2 bg-line hover:bg-mist"}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SliderButton({ label, onClick, icon }: { label: string; onClick: () => void; icon: "left" | "right" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-full border border-line text-fg transition hover:border-accent hover:bg-accent hover:text-white"
    >
      <Icon name="arrow" className={`h-5 w-5 ${icon === "left" ? "rotate-180" : ""}`} />
    </button>
  );
}

function ProjectCard({ project: p, priority }: { project: Project; priority: boolean }) {
  return (
    <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-line bg-gradient-to-br from-ink-3 via-ink-2 to-ink select-none">
      <div className="absolute -right-20 -bottom-24 h-[440px] w-[440px] rounded-full opacity-25 blur-[120px]" style={{ backgroundColor: p.glow }} />
      <div className="relative grid items-center gap-10 p-7 md:p-14 lg:grid-cols-2 lg:p-16">
        <div>
          <h3 className="text-3xl font-semibold md:text-5xl">{p.title}</h3>
          <p className="mt-3 font-display text-lg text-accent-2 md:text-2xl">{p.subtitle}</p>
          <p className="mt-6 leading-relaxed text-mist">{p.description}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm">
                <Icon name="check" className="h-4 w-4 shrink-0 text-accent" /> {h}
              </li>
            ))}
          </ul>
          <Button href={p.href} className="mt-10">{p.cta}</Button>
        </div>

        <div className={`relative mx-auto w-full ${p.imageStyle === "floating" ? "max-w-md" : "max-w-xl"}`}>
          <ProjectVisual project={p} priority={priority} />
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project: p, priority }: { project: Project; priority: boolean }) {
  if (p.imageStyle === "graphic") return <GraphicPanel project={p} />;
  if (!p.image) return null;

  if (p.imageStyle === "floating") {
    return (
      <Image
        src={p.image.src}
        alt={p.image.alt}
        width={p.image.width}
        height={p.image.height}
        priority={priority}
        draggable={false}
        sizes="(min-width:1024px) 450px, 90vw"
        className="h-auto w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
      />
    );
  }

  return (
    <div className="relative pb-6">
      <div className="overflow-hidden rounded-3xl border border-line shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        <Image
          src={p.image.src}
          alt={p.image.alt}
          width={p.image.width}
          height={p.image.height}
          draggable={false}
          sizes="(min-width:1024px) 560px, 90vw"
          className="h-auto w-full"
        />
      </div>
      {p.logo && (
        <div className="absolute bottom-0 left-6 rounded-2xl bg-white px-5 py-3 shadow-xl">
          <Image src={p.logo} alt={`${p.title} logo`} width={600} height={180} draggable={false} className="h-9 w-auto md:h-11" />
        </div>
      )}
    </div>
  );
}

// Designed visual for projects without a photo (city skyline + key facts)
function GraphicPanel({ project: p }: { project: Project }) {
  const towers = [
    [8, 55], [16, 80], [26, 45], [34, 92], [46, 62], [56, 100], [68, 70], [78, 85], [88, 50],
  ];
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line p-7"
      style={{ background: `linear-gradient(160deg, ${p.glow}33 0%, #0a1024 55%, #050816 100%)` }}
    >
      <div className="bg-grid absolute inset-0 opacity-60" />
      {/* Skyline */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-3/4 w-full" aria-hidden="true">
        {towers.map(([x, h], i) => (
          <g key={i}>
            <rect x={x - 4} y={100 - h} width="8" height={h} fill={i % 2 ? "#101a35" : "#1d2a4d"} />
            {Array.from({ length: Math.floor(h / 9) }).map((_, k) => (
              <rect key={k} x={x - 2} y={100 - h + 4 + k * 9} width="1.6" height="2.4" fill={p.glow} opacity={(k + i) % 3 ? 0.25 : 0.8} />
            ))}
          </g>
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative flex h-full flex-col justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: p.glow }}>
          <Icon name="building" className="h-7 w-7" />
        </span>
        {p.stats && (
          <div className="grid grid-cols-3 gap-2">
            {p.stats.map((s) => (
              <div key={s.value} className="rounded-xl border border-fg/10 bg-ink/70 p-3 backdrop-blur">
                <p className="text-sm font-semibold text-fg md:text-base">{s.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-mist">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
