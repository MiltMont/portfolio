import React from "react";
import Link from "next/link";
import { Gutter } from "@components/Gutter";
import { FullLogo } from "@graphics/FullLogo";

import classes from "./classes.module.scss";

export const DesktopNavigation: React.FC<any> = () => {
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
              <button className={classes.tab}>Tab</button>
            </div>
          </div>
        </div>
        <div className={classes.background} />
      </Gutter>
    </div>
  );
};
