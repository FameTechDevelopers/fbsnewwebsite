import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBanner({
  title = "Get top-rated, industry-recognised professionals for your project.",
}: {
  title?: string;
}) {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-accent/30 px-8 py-16 text-center md:px-16 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-ink-2 to-ink" />
            <div className="bg-grid absolute inset-0 opacity-60" />
            <div className="relative mx-auto max-w-3xl">
              <span className="eyebrow">Let&apos;s Build Together</span>
              <h2 className="mt-6 text-4xl leading-tight font-medium md:text-6xl">{title}</h2>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/contact">Get a Free Quote</Button>
                <Button href={`tel:${site.contact.phone}`} variant="outline" arrow={false}>
                  Call {site.contact.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
