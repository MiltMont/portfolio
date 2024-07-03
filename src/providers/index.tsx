"use client";

import React from "react";
import { ThemePreferenceProvider } from "./Theme";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemePreferenceProvider>{children}</ThemePreferenceProvider>;
};
