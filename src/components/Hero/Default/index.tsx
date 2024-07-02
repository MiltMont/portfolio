import React from "react";
import classes from "./classes.module.scss";
import { Gutter } from "@components/Gutter";
import Image from "next/image";

export const DefaultHero: React.FC<any> = ({}) => {
  return (
    <Gutter className={classes.hero}>
      <div className={classes.content}>
        <div className={classes.heading}>
          Im Milton, a software developer, mathematician and AI Enthusiast.
        </div>
        <div className={classes.legend}>
          You can find updates on my latest activity in this site.
        </div>
      </div>
      <div className={classes.media}>
        <div className={classes.mediaWrapper}>
          <Image
            src={"/triangulation.png"}
            alt={"triangulation"}
            className={classes.image}
            fill
          />
        </div>
      </div>
    </Gutter>
  );
};

/*
<div className={classes.content}>
        <div className={classes.heading}>
          <h1>
            Im Milton, a software developer, mathematician and AI Enthusiast.
          </h1>
        </div>
        <div className={classes.legend}>
          <h3 className="">
            You can find updates on my latest activity in this site.
          </h3>
        </div>
      </div>
      <div className={classes.media}>
        <div className={classes.mediaWrapper}>
          <Image
            src={"/triangulation.png"}
            alt={"triangulation"}
            className={classes.image}
            fill
          />
        </div>
      </div>
*/
/*

<div
        className={[classes.heroContainer, "grid"].filter(Boolean).join(" ")}
      >
        <div
          className={[
            classes.contentWrapper,
            "start-1 cols-8 start-m-1 cols-m-8",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <h1>
            Im Milton, a software developer, mathematician and AI Enthusiast.
          </h1>
          <h3 className="">
            You can find updates on my latest activity in this site.
          </h3>
        </div>
        <div
          className={[
            classes.imageWrapper,
            "start-col-9 cols-8 start-m-col-2 cols-m-8",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          hi
        </div>
      </div>
    */
