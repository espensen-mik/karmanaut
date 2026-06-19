"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function InquiryForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send en forespørgsel</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-navy">
              Navn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Dit navn"
              className="h-11 w-full rounded-2xl border border-cream-dark bg-cream px-4 text-navy outline-none transition-colors focus:border-coral"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-navy">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="din@email.dk"
              className="h-11 w-full rounded-2xl border border-cream-dark bg-cream px-4 text-navy outline-none transition-colors focus:border-coral"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-navy">
              Besked
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Fortæl os kort, hvad I er nysgerrige på..."
              className="w-full rounded-2xl border border-cream-dark bg-cream px-4 py-3 text-navy outline-none transition-colors focus:border-coral"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Send forespørgsel
          </Button>
          <p className="text-sm text-navy/60">
            Frontend-formular uden backend endnu. Integration kommer i næste fase.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
