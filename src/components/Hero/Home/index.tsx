import React from "react";
import Image from "next/image";
import classes from "./classes.module.scss";

export const HomeHero: React.FC<any> = ({}) => {
  return (
    <div className={classes.layout}>
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
    </div>
  );
};
