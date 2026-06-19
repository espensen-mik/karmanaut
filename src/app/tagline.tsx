"use client";

import { useEffect, useState } from "react";

const TAGLINE = "VI KOMMER MED KARMA";
const SUBLINE = "...lige om lidt!";
const START_DELAY_MS = 1000;
const CHAR_INTERVAL_MS = 55;

const taglineClassName =
  "text-[0.7rem] font-semibold tracking-[0.25em] text-accent sm:text-[0.7875rem]";

export function Tagline() {
  const [subline, setSubline] = useState("");

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      let index = 0;

      interval = setInterval(() => {
        index += 1;
        setSubline(SUBLINE.slice(0, index));

        if (index >= SUBLINE.length && interval) {
          clearInterval(interval);
        }
      }, CHAR_INTERVAL_MS);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  const isTyping = subline.length > 0 && subline.length < SUBLINE.length;

  return (
    <div className="mt-2 flex flex-col items-center gap-1 text-center">
      <p className={taglineClassName}>{TAGLINE}</p>
      <p
        className={`${taglineClassName} inline-grid text-center`}
        aria-live="polite"
      >
        <span
          className="invisible col-start-1 row-start-1 select-none"
          aria-hidden="true"
        >
          {SUBLINE}|
        </span>
        <span className="col-start-1 row-start-1">
          {subline}
          {isTyping ? (
            <span className="animate-pulse" aria-hidden="true">
              |
            </span>
          ) : null}
        </span>
      </p>
    </div>
  );
}
