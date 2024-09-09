"use client";
import React from "react";
import Image from "next/image";
import { Gutter } from "@components/Gutter";
import Link from "next/link";

import classes from "./classes.module.scss";
import type { Post, Media, Page } from "@types";
import { RichText } from "@components/Serialize";
import { formatDate } from "@utilities/format-date-time";

type Props = Extract<Page["layout"][0], { blockType: "featuredPost" }>;

export const FeaturedPost: React.FC<Props> = (props) => {
  const {
    featuredPostFields: { featuredPost },
  } = props;
  if (typeof featuredPost != "string") {
    const { slug, image, category, title, publishedOn, summary } = featuredPost;
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
            {typeof category !== "string" && (
              <div className={classes.tag}>{category.name}</div>
            )}
            <div className={classes.title}>{title}</div>
            <div className={classes.date}>
              {" "}
              {formatDate({ date: publishedOn })}
            </div>

            <RichText className={classes.summary} content={summary} />
          </div>
        </Gutter>
      </section>
    );
  } else {
    return;
  }
};
