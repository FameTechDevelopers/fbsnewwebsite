"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line/70 bg-ink/85 py-3 backdrop-blur-xl"
          : "py-6"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Image
            src={site.logo}
            alt={site.name}
            width={110}
            height={63}
            loading="eager"
            fetchPriority="high"
            className="h-11 w-auto md:h-16"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-[13px] font-medium uppercase tracking-[0.16em] transition hover:text-accent ${
                isActive(l.href) ? "text-accent" : "text-fg/80"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-accent-2 via-accent to-accent-3 px-6 py-2.5 text-sm font-semibold text-white transition hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)] sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-fg lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${open ? "max-h-[calc(100vh-70px)]" : "max-h-0"}`}
      >
        <nav
          aria-label="Mobile"
          onClick={() => setOpen(false)}
          className="container-x flex flex-col gap-1 pt-6 pb-10"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`border-b border-line/60 py-4 font-display text-3xl ${isActive(l.href) ? "text-accent" : "text-fg"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-b border-line/60 py-4 font-display text-3xl text-fg"
          >
            Contact
          </Link>
          <a
            href={`tel:${site.contact.phone}`}
            className="mt-6 flex items-center gap-3 text-mist"
          >
            <Icon name="phone" className="h-4 w-4 text-accent" />{" "}
            {site.contact.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
