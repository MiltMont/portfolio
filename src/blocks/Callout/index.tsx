import React from "react";
import { Post } from "@types";
import { Gutter } from "@components/Gutter";
import classes from "./classes.module.scss";
import { RichText } from "@components/Serialize";

type Props = Extract<Post["content"][0], { blockType: "callout" }>;

export const CalloutBlock: React.FC<Props> = (props) => {
  const { calloutFields } = props;

  return (
    <Gutter>
      <div className="grid">
        <div
          className={[classes.container, "start-5 cols-8 start-m-1"]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={classes.wrapper}>
            {calloutFields?.enableCalloutHeading && (
              <div className={classes.heading}>
                <RichText
                  className={classes.title}
                  content={calloutFields.calloutHeading}
                />
              </div>
            )}
            <div className={classes.body}>
              <RichText content={calloutFields?.calloutBody} />
            </div>
          </div>
        </div>
      </div>
    </Gutter>
  );
};
