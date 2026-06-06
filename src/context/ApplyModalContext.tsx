"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import ApplyModal from "@/components/ApplyModal";

type ApplyModalContextValue = {
  openApplyModal: () => void;
};

const ApplyModalContext = createContext<ApplyModalContextValue | null>(null);

export function ApplyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openApplyModal = useCallback(() => setIsOpen(true), []);
  const closeApplyModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ openApplyModal }), [openApplyModal]);

  return (
    <ApplyModalContext.Provider value={value}>
      {children}
      <ApplyModal isOpen={isOpen} onClose={closeApplyModal} />
    </ApplyModalContext.Provider>
  );
}

export function useApplyModal() {
  const context = useContext(ApplyModalContext);
  if (!context) {
    throw new Error("useApplyModal must be used within ApplyModalProvider");
  }
  return context;
}
