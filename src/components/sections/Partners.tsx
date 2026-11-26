import Image from "next/image";
import { partners } from "@/data/projects";

const items = [
  "AI Automation", "CRM", "HRM & Payroll", "LMS", "ERP", "Mobile Apps", "Web Development", "E-Commerce", "UI / UX", "Digital Marketing",
  "SEO", "Branding", "2D / 3D Animation", "Video Production", "Legal Consultancy",
];

export function Partners() {
  return (
    <section aria-label="Certifications and capabilities" className="border-y border-line bg-ink-2/60">
      {/* Scrolling capability ribbon */}
      <div className="overflow-hidden py-6">
        <div className="animate-marquee flex w-max gap-12">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-2xl text-fg/60 md:text-3xl">
              {t} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-x flex flex-col items-center gap-8 border-t border-line py-10 md:flex-row md:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mist">Registered & Recognised</p>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {partners.map((p) => (
            <li key={p.name} className="grid h-16 w-28 place-items-center rounded-xl bg-fg/95 p-3">
              <Image src={p.image} alt={p.name} width={100} height={48} className="max-h-10 w-auto object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
