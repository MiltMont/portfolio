"use client";

import React, { useEffect, useState } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import {
  MobileNavigation,
  modalSlug as mobileNavigationModalSlug,
} from "./MobileNavigation";
import { useModal } from "@faceless-ui/modal";
import { MainMenu } from "@types";

import classes from "./classes.module.scss";
import { useScrollInfo } from "@faceless-ui/scroll-info";

export const Header: React.FC<MainMenu> = ({ tabs }) => {
  const { isModalOpen } = useModal();
  const isMobileNavigationOpen = isModalOpen(mobileNavigationModalSlug);
  const { y } = useScrollInfo();
  const [hideBackground, setHideBackground] = useState(true);

  useEffect(() => {
    if (isMobileNavigationOpen) {
      setHideBackground(false);
    } else {
      setHideBackground(y < 30);
    }
  }, [y, isMobileNavigationOpen]);

  console.log(hideBackground);

  return (
    <div>
      <header
        className={[
          classes.header,
          classes.headerTheme,
          isMobileNavigationOpen && classes.mobileNavigationOpen,
          hideBackground && classes.hideBackground,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <DesktopNavigation tabs={tabs} />
        <MobileNavigation tabs={tabs} />
      </header>
    </div>
  );
};
