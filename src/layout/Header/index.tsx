"use client";

import React from "react";
import Link from "next/link";
import { Gutter } from "@components/Gutter";

import classes from "./classes.module.scss";
import { DesktopNavigation } from "./DesktopNavigation";

export const Header: React.FC<any> = ({}) => {
  return (
    <div>
      <header className={[classes.header].filter(Boolean).join(" ")}>
        <DesktopNavigation />
      </header>
    </div>
  );
};
