import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";
import { Icon } from "@/components/ui/Icon";
import { NewsletterForm } from "./NewsletterForm";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  const c = site.contact;
  return (
    <footer className="relative border-t border-line bg-ink-2">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="container-x grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src={site.logo} alt={site.name} width={120} height={69} className="h-14 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">{site.description}</p>
          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Newsletter</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-5 text-xl text-fg">Company</h3>
          <ul className="space-y-3 text-sm text-mist">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-accent">{l.label}</Link>
              </li>
            ))}
            <li><Link href="/contact" className="transition hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-xl text-fg">Services</h3>
          <ul className="space-y-3 text-sm text-mist">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition hover:text-accent">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-xl text-fg">Get in Touch</h3>
          <ul className="space-y-5 text-sm text-mist">
            <li>
              <a href={c.mapLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-accent">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{c.addressLine1}<br />{c.addressLine2}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${c.phone}`} className="flex gap-3 hover:text-accent">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-accent" /> {c.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${c.email}`} className="flex gap-3 break-all hover:text-accent">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-accent" /> {c.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="h-4 w-4 shrink-0 text-accent" /> {c.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-mist md:flex-row">
          <p>© <CurrentYear /> {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="uppercase tracking-[0.2em] hover:text-accent">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
