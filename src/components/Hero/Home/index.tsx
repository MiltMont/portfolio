import React from "react";
import Image from "next/image";
import classes from "./classes.module.scss";
import { Media } from "@types";
import { RichText } from "@components/Serialize";

type Props = {
  richText: any;
  description: any;
  media: Media;
};

export const HomeHero: React.FC<Props> = ({ richText, description, media }) => {
  return (
    <div className={classes.layout}>
      <div className={classes.content}>
        <div className={classes.heading}>
          <RichText content={richText} />
        </div>
        <div className={classes.legend}>
          <RichText content={description} />
        </div>
      </div>
      <div className={classes.media}>
        <div className={classes.mediaWrapper}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CMS_URL}${encodeURI(
              media.url as string
            )}`}
            alt={"triangulation"}
            className={classes.image}
            fill
          />
        </div>
      </div>
    </div>
  );
};
