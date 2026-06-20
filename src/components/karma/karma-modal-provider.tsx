"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { KarmaModal } from "@/components/karma/karma-modal";

type KarmaModalContextValue = {
  openModal: () => void;
};

const KarmaModalContext = createContext<KarmaModalContextValue | null>(null);

export function KarmaModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openModal }), [openModal]);

  return (
    <KarmaModalContext.Provider value={value}>
      {children}
      <KarmaModal open={open} onClose={closeModal} />
    </KarmaModalContext.Provider>
  );
}

export function useKarmaModal() {
  const context = useContext(KarmaModalContext);

  if (!context) {
    throw new Error("useKarmaModal must be used within KarmaModalProvider");
  }

  return context;
}
