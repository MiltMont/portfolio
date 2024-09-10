import React from "react";
import classes from "./classes.module.scss";
import { Gutter } from "@components/Gutter";
import Image from "next/image";
import { Media, Page } from "@types";
import { RichText } from "@components/Serialize";

type Props = Page["hero"];

export const DefaultHero: React.FC<Props> = (props) => {
  const { description, richText, media } = props;
  {
    /*
    TODO: Implement default Hero component. 
    */
  }
  return (
    <Gutter className={classes.layout}>
      <div className={classes.content}>
        <RichText content={richText} className={classes.richText} />
        <RichText content={description} className={classes.description} />
      </div>

      <div className={classes.media}>
        <div className={classes.mediaWrapper}>
          {media && typeof media != "string" && (
            <Image
              src={`${process.env.NEXT_PUBLIC_CMS_URL}${encodeURI(
                media.url as string
              )}`}
              alt={media.alt}
              className={classes.image}
              fill
            />
          )}
        </div>
      </div>
    </Gutter>
  );
};
