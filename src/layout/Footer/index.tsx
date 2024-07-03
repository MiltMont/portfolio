"use client";
import React from "react";
import Link from "next/link";
import { dummyRoutes, dummySocial } from "../../../public/dummData";
import { Gutter } from "@components/Gutter";

import classes from "./classes.module.scss";

export const Footer: React.FC<any> = ({}) => {
  return (
    <Gutter className={classes.footerContainer}>
      <footer
        className={[classes.footerWrapper, "grid"].filter(Boolean).join(" ")}
      >
        <div
          className={[classes.footerColumn, "start-9 cols-4 start-m-1 cols-m-4"]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={classes.columnHeading}>Navigation</div>
          {dummyRoutes.map((route, i) => (
            <div className={classes.columnLabel} key={i}>
              <Link href={route.href} className={classes.link}>
                {route.name}
              </Link>
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
          <div className={classes.columnHeading}>Social Media</div>
          {dummySocial.map((route, i) => (
            <div className={classes.columnLabel} key={i}>
              <Link href={route.href} className={classes.link}>
                {route.name}
              </Link>
            </div>
          ))}
        </div>
      </footer>
    </Gutter>
  );
};
