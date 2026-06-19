"use client";

import { PrimaryButton } from "@/components/ui/button";

export function InquiryForm() {
  return (
    <div className="py-4">
      <p className="eyebrow mb-4">Skriv til os</p>
      <h2 className="mb-8 font-display text-display-lg text-navy">
        Send en forespørgsel
      </h2>
      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-navy/80">
            Navn
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Dit navn"
            className="h-12 w-full border-b border-navy/15 bg-transparent px-1 text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-coral"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-navy/80">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="din@email.dk"
            className="h-12 w-full border-b border-navy/15 bg-transparent px-1 text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-coral"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-navy/80">
            Besked
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Fortæl os kort, hvad I er nysgerrige på..."
            className="w-full border-b border-navy/15 bg-transparent px-1 py-3 text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-coral"
          />
        </div>
        <PrimaryButton type="submit" className="mt-4">
          Send forespørgsel
        </PrimaryButton>
        <p className="text-sm text-navy/50">
          Frontend-formular uden backend endnu. Integration kommer i næste fase.
        </p>
      </form>
    </div>
  );
}
