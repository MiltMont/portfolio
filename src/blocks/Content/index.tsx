import React from "react";

import { RichText } from "@components/Serialize";
import { Gutter } from "@components/Gutter";
import { Page } from "@types";
import classes from "./index.module.scss";

type Props = Extract<Page["layout"][0], { blockType: "content" }>;

const Columns: React.FC<Props> = (props) => {
  switch (props.contentFields?.layout) {
    case "centered": {
      return (
        <div
          className={["start-5 cols-8 start-m-1", classes.centered]
            .filter(Boolean)
            .join(" ")}
        >
          <RichText content={props.contentFields.columnOne} />
        </div>
      );
    }
    case "twoColumns": {
      return (
        <>
          <RichText
            content={props.contentFields.columnOne}
            className="cols-8"
          />

          <RichText
            content={props.contentFields.columnTwo}
            className="cols-8"
          />
        </>
      );
    }
    default: {
      return null;
    }
  }
};

export const ContentBlock: React.FC<Props> = (props) => {
  return (
    <Gutter>
      <div className="grid">
        <Columns {...props} />
      </div>
    </Gutter>
  );
};
