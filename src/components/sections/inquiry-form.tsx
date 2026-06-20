"use client";

import { useState } from "react";

import { PrimaryButton } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

type FormStatus = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Kunne ikke sende beskeden.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Kunne ikke sende beskeden. Prøv igen senere.",
      );
    }
  }

  return (
    <div className="py-4">
      <p className="eyebrow mb-4">Skriv til os</p>
      <h2 className="mb-8 font-display text-display-lg text-navy">
        Send en forespørgsel
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-navy/80">
            Navn
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={status === "loading"}
            placeholder="Dit navn"
            className="h-12 w-full border-b border-navy/15 bg-transparent px-1 text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-coral disabled:opacity-60"
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
            required
            disabled={status === "loading"}
            placeholder="din@email.dk"
            className="h-12 w-full border-b border-navy/15 bg-transparent px-1 text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-coral disabled:opacity-60"
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
            required
            minLength={10}
            disabled={status === "loading"}
            placeholder="Fortæl os kort, hvad I er nysgerrige på..."
            className="w-full border-b border-navy/15 bg-transparent px-1 py-3 text-navy outline-none transition-all duration-200 placeholder:text-navy/30 focus:border-coral disabled:opacity-60"
          />
        </div>
        <PrimaryButton
          type="submit"
          className="mt-4"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sender..." : "Send forespørgsel"}
        </PrimaryButton>
        {status === "success" ? (
          <p className="text-sm text-coral" role="status">
            Tak for din besked. Vi vender tilbage hurtigst muligt.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-coral-dark" role="alert">
            {errorMessage}
          </p>
        ) : null}
        <p
          className={cn(
            "text-sm text-navy/50",
            (status === "success" || status === "error") && "hidden",
          )}
        >
          Vi svarer normalt inden for et par hverdage.
        </p>
      </form>
    </div>
  );
}
