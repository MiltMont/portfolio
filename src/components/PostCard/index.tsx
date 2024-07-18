import React from "react";
import { Post } from "@types";
import Image from "next/image";
import { ArrowRight } from "iconoir-react";
import { RichText } from "@components/Serialize";
import { formatDate } from "@utilities/format-date-time";

import classes from "./classes.module.scss";
import Link from "next/link";

const PostCard: React.FC<Post> = (props) => {
  const { title, publishedOn, image, summary, category, slug } = props;

  return (
    <div className={classes.cardContainer}>
      <div className={classes.postImage}>
        <Link href={`blog/${slug}`}>
          {typeof image !== "string" && (
            <Image
              src={`${process.env.NEXT_PUBLIC_CMS_URL}${image.url}`}
              alt={image.alt}
              width={image?.width ?? undefined}
              height={image?.height ?? undefined}
              className={classes.image}
            />
          )}
        </Link>
      </div>
      <div className={classes.postData}>
        <>
          <div className={classes.topContainer}>
            <time className={classes.date}>
              {formatDate({ date: publishedOn })}
            </time>
            {typeof category !== "string" && (
              <div className={classes.category}>{category.name}</div>
            )}
          </div>
          <h4 className={classes.title}>{title}</h4>
        </>
        <div className={classes.action}>
          Read
          <Link href={`blog/${slug}`}>
            <ArrowRight className={classes.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
