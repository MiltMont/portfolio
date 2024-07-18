import Image from "next/image";
import React from "react";
import { Post } from "@types";
import { Gutter } from "@components/Gutter";
import { RichText } from "@components/Serialize";

import classes from "./classes.module.scss";

type Props = Extract<Post["content"][0], { blockType: "mediaBlock" }>;

const MediaBlock: React.FC<Props> = (props) => {
  const {
    mediaBlockFields: { position, media, caption },
  } = props;
  switch (position) {
    case "default":
      return (
        <Gutter className={classes.defaultMediaContainer}>
          {typeof media !== "string" && (
            <Image
              src={`${process.env.NEXT_PUBLIC_CMS_URL}${media.url}`}
              alt={media.alt}
              width={media?.width ?? undefined}
              height={media?.height ?? undefined}
              className={classes.defaultMedia}
            />
          )}
          <div className="grid">
            <label className="start-9 cols-4 start-m-1 cols-m-8">
              <RichText content={caption} className={classes.caption} />
            </label>
          </div>
        </Gutter>
      );
    case "wide":
      return (
        <div className={classes.wideMediaContainer}>
          {typeof media !== "string" && (
            <Image
              src={`${process.env.NEXT_PUBLIC_CMS_URL}${media.url}`}
              alt={media.alt}
              width={media?.width ?? undefined}
              height={media?.height ?? undefined}
              className={classes.wideMedia}
            />
          )}
          <Gutter>
            <div className="grid">
              <label className="start-9 cols-4 start-m-1 cols-m-8">
                <RichText content={caption} className={classes.caption} />
              </label>
            </div>
          </Gutter>
        </div>
      );
  }
};

export default MediaBlock;
