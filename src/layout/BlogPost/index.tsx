"use client";
import React from "react";
import Image from "next/image";
import { Post } from "@types";
import { Gutter } from "@components/Gutter";
import { RichText } from "@components/Serialize";

import classes from "./classes.module.scss";
import { RenderBlocks } from "@components/RenderBlocks";
import { formatDate } from "@utilities/format-date-time";

const BlogPost: React.FC<Post> = (props) => {
  const { title, image, summary, content, publishedOn, category } = props;

  return (
    <>
      <Gutter className={classes.postContainer}>
        <section className={classes.heroContainer}>
          <div className="grid">
            <div
              className={[classes.postInfo, "start-3 cols-12 start-m-1 cols-8"]
                .filter(Boolean)
                .join(" ")}
            >
              {typeof category !== "string" && (
                <div className={classes.tag}>{category.name}</div>
              )}
              <div className={classes.postTitle}>{title}</div>
              <div className={classes.summaryContainer}>
                <div className={classes.date}>
                  Published on {formatDate({ date: publishedOn })}
                </div>
                <div
                  className={[
                    classes.postSummary,
                    "start-13 cols-4 start-m-1 cols-8",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <RichText content={summary} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <div className={classes.imageWrapper}>
              {typeof image !== "string" && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_CMS_URL}${image.url}`}
                  alt={image.alt}
                  width={image.width ?? undefined}
                  height={image.height ?? undefined}
                  className={classes.image}
                />
              )}
            </div>
            <figcaption className={classes.caption}>Caption</figcaption>
          </div>
        </section>
      </Gutter>
      {/* @ts-ignore */}
      <RenderBlocks blocks={[...(content || [])]} />
    </>
  );
};

export default BlogPost;
