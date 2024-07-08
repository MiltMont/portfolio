import React from "react";
import { Gutter } from "@components/Gutter";
import { FullLogo } from "@graphics/FullLogo";
import { MainMenu } from "@types";
import Link from "next/link";

import classes from "./classes.module.scss";

type NavItems = Pick<MainMenu, "tabs">;

export const DesktopNavigation: React.FC<NavItems> = ({ tabs }) => {
  return (
    <div className={classes.desktopNavigation} style={{ width: "100%" }}>
      <Gutter className={classes.desktopNavigation}>
        <div className={[classes.grid, "grid"].filter(Boolean).join(" ")}>
          <div className={[classes.logo, "cols-8"].filter(Boolean).join(" ")}>
            <Link href={"/"} className={classes.logo} aria-label="Logo">
              <FullLogo />
            </Link>
          </div>
          <div
            className={[classes.content, "cols-8"].filter(Boolean).join(" ")}
          >
            <div className={classes.tabs}>
              {(tabs || []).map((tab, tabIndex) => {
                const { enableDirectLink = false, enableDropdown = false } =
                  tab;
                return (
                  <div key={tabIndex}>
                    <button className={classes.tab}>
                      {enableDirectLink && tab.link?.url ? (
                        <Link href={tab.link.url}>{tab.label}</Link>
                      ) : (
                        <>{tab.label}</>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={classes.background} />
      </Gutter>
    </div>
  );
};
