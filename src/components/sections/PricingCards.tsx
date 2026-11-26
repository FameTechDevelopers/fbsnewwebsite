import Link from "next/link";
import { pricingPlans } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function PricingCards({ plans = pricingPlans }: { plans?: typeof pricingPlans }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={(i % 3) * 100}>
          <div
            className={`card relative flex h-full flex-col p-8 md:p-10 ${
              plan.popular ? "border-accent/70 bg-gradient-to-b from-accent/10 to-ink-3/60" : "card-hover"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-8 rounded-full bg-accent px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-3xl">{plan.name} Website</h3>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-lg text-accent">$</span>
              <span className="font-display text-6xl">{plan.price.toLocaleString()}</span>
              <span className="ml-1 text-sm text-mist">one-time</span>
            </p>
            <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-8 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3 text-fg/85">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-mist">No monthly or hidden fees.</p>
            <Link
              href="/contact"
              className={`mt-6 rounded-full py-3.5 text-center text-sm font-semibold transition ${
                plan.popular
                  ? "bg-gradient-to-r from-accent-2 via-accent to-accent-3 text-white"
                  : "border border-accent/60 hover:bg-accent hover:text-white"
              }`}
            >
              Get Started
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
