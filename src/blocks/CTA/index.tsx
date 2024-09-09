import React from "react";

import { RichText } from "@components/Serialize";
import { Gutter } from "@components/Gutter";
import { Page } from "@types";
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
import Link from "next/link";
import { ArrowUpRight } from "iconoir-react";
import classes from "./classes.module.scss";

type Props = Extract<Page["layout"][0], { blockType: "cta" }>;

export const CTABlock: React.FC<Props> = (props) => {
  const {
    ctaFields: { ctaContent, links },
  } = props;
  return (
    <Gutter>
      <div className={classes.ctaContainer}>
        <div className={classes.content}>
          <RichText content={ctaContent} />
        </div>
        <div className={classes.links}>
          {links?.map((link, index) => (
            <Link
              href={link.link.url as string}
              className={[classes.link, "cols-4"].filter(Boolean).join(" ")}
              key={index}
            >
              <>{link.link.label}</>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </div>
    </Gutter>
  );
};
