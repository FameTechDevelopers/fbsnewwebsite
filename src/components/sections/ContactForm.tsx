"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

// Sends the enquiry via WhatsApp (works without a backend).
// To use email instead, create an API route and POST the form data to it.
export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = [
      `New enquiry — ${site.name} website`,
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone")}`,
      `Service: ${d.get("service")}`,
      `Budget: ${d.get("budget")}`,
      `Message: ${d.get("message")}`,
    ].join("\n");
    window.open(`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="card grid gap-5 p-7 md:p-10 sm:grid-cols-2">
      <Field label="Full name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone / WhatsApp" name="phone" type="tel" />
      <div>
        <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-[0.2em] text-mist">Service</label>
        <select id="service" name="service" defaultValue={defaultService} className="input">
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Startup Investment">Startup Investment</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="budget" className="mb-2 block text-xs uppercase tracking-[0.2em] text-mist">Budget</label>
        <select id="budget" name="budget" className="input">
          <option>Under $500</option>
          <option>$500 – $1,500</option>
          <option>$1,500 – $5,000</option>
          <option>$5,000+</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-mist">Project details</label>
        <textarea id="message" name="message" rows={5} required placeholder="Tell us about your idea…" className="input resize-none" />
      </div>
      <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-mist">We reply within one business day.</p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-2 via-accent to-accent-3 px-8 py-3.5 text-sm font-semibold text-white transition hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)]"
        >
          Send Enquiry <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>
      {sent && (
        <p role="status" className="text-sm text-accent sm:col-span-2">
          Thank you! Your message has opened in WhatsApp — press send and our team will get back to you shortly.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs uppercase tracking-[0.2em] text-mist">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="input" />
    </div>
  );
}
