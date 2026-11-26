"use client";

import Image from "next/image";
import { useState } from "react";
import { projectCategories, projects } from "@/data/projects";

export function PortfolioGrid({ limit, filters = true }: { limit?: number; filters?: boolean }) {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const list = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {filters && (
        <div role="tablist" aria-label="Filter projects" className="mb-12 flex flex-wrap gap-3">
          {projectCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                active === c ? "border-accent bg-accent text-white" : "border-line text-mist hover:border-accent hover:text-fg"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <figure key={p.title} className="card card-hover group overflow-hidden">
            <div className="relative aspect-[753/450] overflow-hidden bg-gradient-to-b from-ink-3 to-ink-2 p-4">
              <Image
                src={p.image}
                alt={`${p.title} — website by Fame Business Solutions`}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-contain p-4 transition duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="flex items-center justify-between border-t border-line px-6 py-5">
              <span className="font-display text-xl">{p.title}</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-accent">{p.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
