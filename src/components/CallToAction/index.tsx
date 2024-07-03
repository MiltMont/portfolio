import React from "react";
import { Gutter } from "../Gutter";
import classes from "./classes.module.scss";

export const CallToAction: React.FC<any> = ({}) => {
  return (
    <Gutter className={classes.ctaWrapper}>
      <div className={[classes.ctaContainer, "grid"].filter(Boolean).join(" ")}>
        <div
          className={[classes.content, "start-1 cols-8 start-m-1 cols-m-4"]
            .filter(Boolean)
            .join(" ")}
        >
          Read all my posts
        </div>
        <div
          className={[classes.actions, "start-13 cols-4 start-m-5 cols-4"]
            .filter(Boolean)
            .join(" ")}
        >
          &rarr;
        </div>
      </div>
    </Gutter>
  );
};
