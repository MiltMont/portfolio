"use client";

import React from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import {
  MobileNavigation,
  modalSlug as mobileNavigationModalSlug,
} from "./MobileNavigation";
import { useModal } from "@faceless-ui/modal";
import { MainMenu } from "@types";

import classes from "./classes.module.scss";

export const Header: React.FC<MainMenu> = ({ tabs }) => {
  const { isModalOpen } = useModal();
  const isMobileNavigationOpen = isModalOpen(mobileNavigationModalSlug);

  return (
    <div>
      <header
        className={[
          classes.header,
          isMobileNavigationOpen && classes.mobileNavigationOpen,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <DesktopNavigation />
        <MobileNavigation tabs={tabs} />
      </header>
    </div>
  );
};
