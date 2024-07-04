import React from "react";
import Link from "next/link";

import { Gutter } from "@components/Gutter";
import { MainMenu } from "@types";

import classes from "./classes.module.scss";
import { FullLogo } from "@graphics/FullLogo";
import { MenuIcon } from "@graphics/Menu";

type NavItems = Pick<MainMenu, "tabs">;

export const MobileNavigation: React.FC<NavItems> = (props) => {
  return (
    <div className={classes.mobileNav}>
      <div className={classes.menuBar}>
        <Gutter>
          <div className={"grid"}>
            <div
              className={[classes.menuBarContainer, "cols-16 cols-m-8"]
                .filter(Boolean)
                .join(" ")}
            >
              <Link href={"/"} className={classes.logo} aria-label={"logo"}>
                <FullLogo />
              </Link>
              <div className={classes.icons}>
                <MenuIcon />
              </div>
            </div>
          </div>
        </Gutter>
      </div>
    </div>
  );
};
