"use client";
import React from "react";
import Image from "next/image";
import { Post } from "@types";
import { Gutter } from "@components/Gutter";

import classes from "./classes.module.scss";
import { ContentBlock } from "@root/blocks/Content";
import { RenderBlocks } from "@components/RenderBlocks";

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
              <div className={classes.category}>Category</div>
              <div className={classes.postTitle}>{title}</div>
              <div className={classes.summaryContainer}>
                <div className={classes.date}>Published on {publishedOn}</div>
                <div
                  className={[
                    classes.postSummary,
                    "start-13 cols-4 start-m-1 cols-8",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                ></div>
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
          </div>
        </section>
      </Gutter>
    </>
  );
};

export default BlogPost;
