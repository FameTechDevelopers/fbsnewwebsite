import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

// WhatsApp + call buttons pinned to the bottom-right on every page.
export function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col gap-3">
      <a
        href={`tel:${site.contact.phone}`}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full border border-accent/40 bg-ink-2/90 text-accent shadow-xl backdrop-blur transition hover:bg-accent hover:text-white"
      >
        <Icon name="phone" />
      </a>
      <a
        href={`https://wa.me/${site.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
      >
        <Icon name="whatsapp" className="h-6 w-6" strokeWidth={1.8} />
      </a>
    </div>
  );
}
