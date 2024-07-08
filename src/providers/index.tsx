"use client";

import React from "react";
import { ThemePreferenceProvider } from "./Theme";
import { ModalProvider, ModalContainer } from "@faceless-ui/modal";
import { ScrollInfoProvider } from "@faceless-ui/scroll-info";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemePreferenceProvider>
      <ScrollInfoProvider>
        <ModalProvider transTime={0} zIndex="var(--z-modal)">
          {children}
          <ModalContainer />
        </ModalProvider>
      </ScrollInfoProvider>
    </ThemePreferenceProvider>
  );
};
