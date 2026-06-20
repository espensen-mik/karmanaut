"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, RotateCw } from "lucide-react";

import { AccentButton, PrimaryButton, SecondaryButton } from "@/components/ui/button";
import {
  getRandomKarmaStory,
  karmaStories,
  type KarmaStory,
} from "@/lib/constants/karma-stories";
import { siteConfig } from "@/lib/constants/site";

type KarmaModalProps = {
  open: boolean;
  onClose: () => void;
};

type ModalStep = "story" | "contact";
type FormStatus = "idle" | "loading" | "success" | "error";

export function KarmaModal({ open, onClose }: KarmaModalProps) {
  const [step, setStep] = useState<ModalStep>("story");
  const [story, setStory] = useState<KarmaStory>(() => karmaStories[0]);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (!open) return;

    setStep("story");
    setStory(karmaStories[0]);
    setFormStatus("idle");
    setFormError("");
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  function handleMoreKarma() {
    setStory((current) => getRandomKarmaStory(current.id));
  }

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("loading");
    setFormError("");

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
          website: formData.get("website"),
          source: "karma-modal",
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Kunne ikke sende beskeden.");
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
      setFormError(
        error instanceof Error
          ? error.message
          : "Kunne ikke sende beskeden. Prøv igen senere.",
      );
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Luk karma-vindue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/45 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="karma-modal-title"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[20px] bg-cream shadow-[0_24px_80px_rgb(26_50_63_/_18%)]"
          >
            <div className="bg-coral px-6 py-5 text-cream">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/80">
                    Karma
                  </p>
                  <h2
                    id="karma-modal-title"
                    className="mt-1 font-display text-3xl leading-none tracking-wide"
                  >
                    {step === "story"
                      ? "Verden er fyldt med karma"
                      : "Kontakt os for karma"}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Luk"
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-cream/15 text-cream transition-colors hover:bg-cream/25"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            <div className="max-h-[min(72vh,640px)] overflow-y-auto px-6 py-6">
              {step === "story" ? (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mx-auto max-w-[13rem] overflow-hidden rounded-[12px] sm:max-w-[15rem]">
                    <Image
                      src={siteConfig.photos.karmaVerden}
                      alt=""
                      width={480}
                      height={300}
                      aria-hidden="true"
                      className="aspect-[16/10] h-auto w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 font-display text-xl leading-tight text-navy sm:text-2xl">
                    {story.heading}
                  </p>
                  <p className="mt-3 text-base leading-[1.8] text-navy/75 sm:text-lg">
                    {story.body}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <AccentButton
                      type="button"
                      className="w-full sm:flex-1"
                      onClick={handleMoreKarma}
                    >
                      <RotateCw className="size-4" aria-hidden="true" />
                      Mere karma
                    </AccentButton>
                    <SecondaryButton
                      type="button"
                      className="w-full sm:flex-1"
                      onClick={() => {
                        setFormStatus("idle");
                        setFormError("");
                        setStep("contact");
                      }}
                    >
                      Kontakt os for karma
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </SecondaryButton>
                  </div>
                </motion.div>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => setStep("story")}
                    className="mb-5 text-sm font-medium text-coral transition-colors hover:text-coral-dark"
                  >
                    ← Tilbage til karma
                  </button>

                  {formStatus === "success" ? (
                    <div className="py-4 text-center">
                      <p className="font-display text-2xl text-navy">Tak for din besked</p>
                      <p className="mt-4 text-base leading-relaxed text-navy/70">
                        Vi vender tilbage hurtigst muligt. Må karma være med dig indtil da.
                      </p>
                      <AccentButton
                        type="button"
                        className="mt-8"
                        onClick={onClose}
                      >
                        Luk
                      </AccentButton>
                    </div>
                  ) : (
                    <form className="relative space-y-5" onSubmit={handleContactSubmit}>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
                      >
                        <label htmlFor="karma-website">Website</label>
                        <input
                          id="karma-website"
                          name="website"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          defaultValue=""
                        />
                      </div>

                      <p className="text-base leading-relaxed text-navy/70">
                        Fortæl os kort, hvad I er nysgerrige på — så vender vi tilbage med
                        karmanautisk karma.
                      </p>

                      <div className="space-y-2">
                        <label
                          htmlFor="karma-name"
                          className="text-sm font-medium text-navy/80"
                        >
                          Navn
                        </label>
                        <input
                          id="karma-name"
                          name="name"
                          type="text"
                          required
                          disabled={formStatus === "loading"}
                          className="h-11 w-full rounded-[10px] border border-navy/10 bg-white/70 px-3 text-navy outline-none transition-colors focus:border-coral disabled:opacity-60"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="karma-email"
                          className="text-sm font-medium text-navy/80"
                        >
                          E-mail
                        </label>
                        <input
                          id="karma-email"
                          name="email"
                          type="email"
                          required
                          disabled={formStatus === "loading"}
                          className="h-11 w-full rounded-[10px] border border-navy/10 bg-white/70 px-3 text-navy outline-none transition-colors focus:border-coral disabled:opacity-60"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="karma-message"
                          className="text-sm font-medium text-navy/80"
                        >
                          Besked
                        </label>
                        <textarea
                          id="karma-message"
                          name="message"
                          rows={4}
                          required
                          minLength={10}
                          disabled={formStatus === "loading"}
                          placeholder="Hvad kan vi hjælpe med?"
                          className="w-full rounded-[10px] border border-navy/10 bg-white/70 px-3 py-2.5 text-navy outline-none transition-colors focus:border-coral disabled:opacity-60"
                        />
                      </div>

                      {formStatus === "error" ? (
                        <p className="text-sm text-coral-dark" role="alert">
                          {formError}
                        </p>
                      ) : null}

                      <PrimaryButton
                        type="submit"
                        className="w-full"
                        disabled={formStatus === "loading"}
                      >
                        {formStatus === "loading" ? "Sender..." : "Send besked"}
                      </PrimaryButton>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
