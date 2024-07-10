import React from "react";
import Image from "next/image";
import { Gutter } from "@components/Gutter";
import Link from "next/link";

import classes from "./classes.module.scss";
import type { Post, Media } from "@types";

export const FeaturedPost: React.FC<Post> = (props) => {
  const { title, createdAt, summary, category, slug, image } = props;

  return (
    <section className={classes.featuredPostContainer}>
      <div className={classes.media}>
        <div className={classes.mediaWrapper}>
          <Link href={`/blog/${slug}`}>
            {typeof image !== "string" && (
              <Image
                src={`${process.env.NEXT_PUBLIC_CMS_URL}${image.url}`}
                alt={"sphere"}
                fill
                className={classes.image}
              />
            )}
          </Link>
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
          {category && <div className={classes.tag}>{category.title}</div>}
          <div className={classes.title}>{title}</div>
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
