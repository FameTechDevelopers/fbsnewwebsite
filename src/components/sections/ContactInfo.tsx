import { site } from "@/data/site";
import { Icon, type IconName } from "@/components/ui/Icon";

export function ContactInfo() {
  const c = site.contact;
  const items: { icon: IconName; label: string; value: React.ReactNode; href?: string }[] = [
    { icon: "pin", label: "Address", value: <>{c.addressLine1}<br />{c.addressLine2}</>, href: c.mapLink },
    { icon: "phone", label: "Phone", value: c.phoneDisplay, href: `tel:${c.phone}` },
    { icon: "mail", label: "Email", value: c.email, href: `mailto:${c.email}` },
    { icon: "clock", label: "Office Hours", value: c.hours },
  ];

  return (
    <ul className="grid gap-4">
      {items.map((it) => {
        const inner = (
          <>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <Icon name={it.icon} />
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-mist">{it.label}</p>
              <p className="mt-1 break-words text-fg">{it.value}</p>
            </div>
          </>
        );
        return (
          <li key={it.label}>
            {it.href ? (
              <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card card-hover flex items-center gap-5 p-5">
                {inner}
              </a>
            ) : (
              <div className="card flex items-center gap-5 p-5">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-line">
      <iframe
        title="Fame Business Solutions location on Google Maps"
        src={site.contact.mapEmbed}
        className="h-[420px] w-full grayscale invert-[0.9] contrast-[0.9]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
