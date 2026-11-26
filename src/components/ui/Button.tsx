import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "outline" | "ghost";
  arrow?: boolean;
  external?: boolean;
  className?: string;
};

const styles = {
  accent: "bg-gradient-to-r from-accent-2 via-accent to-accent-3 text-white hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)]",
  outline: "border border-accent/60 text-fg hover:bg-accent hover:text-white",
  ghost: "text-fg hover:text-accent",
};

export function Button({ href, children, variant = "accent", arrow = true, external, className = "" }: Props) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition duration-300 ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
