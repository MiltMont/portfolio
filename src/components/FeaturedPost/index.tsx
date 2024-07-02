import React from "react";
import Image from "next/image";
import { Gutter } from "../Gutter";

import classes from "./classes.module.scss";

export const FeaturedPost: React.FC<any> = ({}) => {
  return (
    <section className={classes.featuredPostContainer}>
      <div className={classes.media}>
        <div className={classes.mediaWrapper}>
          <Image
            src={"/sphere.png"}
            alt={"sphere"}
            fill
            className={classes.image}
          />
        </div>
      </div>
      <Gutter
        className={[classes.infoContainer, "grid"].filter(Boolean).join(" ")}
      >
        <div
          className={[classes.infoWrapper, "start-5 cols-8 start-m-1 cols-8"]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={classes.tag}>Topology</div>
          <div className={classes.title}>
            On the log-concavity of the Alexander polynomial
          </div>
          <div className={classes.summary}>
            Here we explore some open questions about a simple and famous
            invariant in Knot Theory. We explore a recent paper on the Fox
            Conjecture.
          </div>
        </div>
      </Gutter>
    </section>
  );
};
