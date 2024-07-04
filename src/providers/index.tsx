"use client";

import React from "react";
import { ThemePreferenceProvider } from "./Theme";
import { ModalProvider, ModalContainer } from "@faceless-ui/modal";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemePreferenceProvider>
      <ModalProvider transTime={250} zIndex="var(--z-modal)">
        {children}
        <ModalContainer />
      </ModalProvider>
    </ThemePreferenceProvider>
  );
};
