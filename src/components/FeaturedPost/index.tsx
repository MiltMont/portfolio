"use client";
import React from "react";
import Image from "next/image";
import { Gutter } from "@components/Gutter";
import Link from "next/link";
import { RichTextLexicalRenderer } from "@webiny/react-rich-text-lexical-renderer";

import classes from "./classes.module.scss";
import type { Post, Media } from "@types";
import { RichText } from "@components/Serialize";

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
          {typeof category !== "string" && (
            <div className={classes.tag}>{category.name}</div>
          )}
          <div className={classes.title}>{title}</div>
          <div className={classes.summary}>
            <RichText content={summary} />
          </div>
        </div>
      </Gutter>
    </section>
  );
};
