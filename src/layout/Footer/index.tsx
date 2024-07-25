"use client";
import React from "react";
import { Gutter } from "@components/Gutter";
import { FullLogo } from "@graphics/FullLogo";
import { Footer as FooterType } from "@types";

import classes from "./classes.module.scss";
import { CMSLink } from "@components/CMSLink";

export const Footer: React.FC<FooterType> = (props) => {
  const { columns } = props;
  const [navigation, social] = columns ?? [];

  return (
    <Gutter className={classes.footerContainer}>
      <footer
        className={[classes.footerWrapper, "grid"].filter(Boolean).join(" ")}
      >
        <div
          className={[classes.logoLg, "start-1 cols-8"]
            .filter(Boolean)
            .join(" ")}
        >
          <FullLogo size={"lg"} />
        </div>
        <div
          className={[classes.footerColumn, "start-9 cols-4 start-m-1 cols-m-4"]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={classes.columnHeading}>{navigation.label}</div>
          {navigation?.navItems?.map(({ link }, i) => (
            <div className={classes.columnLabel} key={i}>
              <CMSLink className={classes.link} {...link} />
            </div>
          ))}
        </div>
        <div
          className={[
            classes.footerColumn,
            "start-13 cols-4 start-m-5 cols-m-4",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={classes.columnHeading}>{social.label}</div>
          {social?.navItems?.map(({ link }, i) => (
            <div className={classes.columnLabel} key={i}>
              <CMSLink className={classes.link} {...link} />
            </div>
          ))}
        </div>
      </footer>
    </Gutter>
  );
};
