"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to your email provider (Mailchimp, Brevo, etc.)
    setDone(true);
    e.currentTarget.reset();
  };

  if (done) return <p className="text-sm text-accent">Thank you — you&apos;re subscribed.</p>;

  return (
    <form onSubmit={onSubmit} className="flex max-w-sm overflow-hidden rounded-full border border-line bg-ink focus-within:border-accent">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input id="newsletter-email" type="email" required placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-mist/60" />
      <button type="submit" aria-label="Subscribe" className="m-1 grid h-10 w-10 place-items-center rounded-full bg-accent text-white transition hover:bg-accent-2">
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}
