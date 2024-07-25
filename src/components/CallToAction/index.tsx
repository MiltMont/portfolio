import React from "react";
import { Gutter } from "@components/Gutter";
import classes from "./classes.module.scss";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "iconoir-react";
import Link from "next/link";

export const CallToAction: React.FC<any> = ({}) => {
  return (
    <Gutter>
      <div className={classes.ctaContainer}>
        <div className={classes.content}>Feel free to read all of my posts</div>
        <div className={classes.links}>
          <Link
            href={"/blog"}
            className={[classes.link, "cols-4"].filter(Boolean).join(" ")}
          >
            <div className={classes.linkLabel}>Check them out</div>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </Gutter>
  );
};
