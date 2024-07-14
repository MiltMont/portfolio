import React from "react";

import { RichText } from "@components/Serialize";
import { Gutter } from "@components/Gutter";
import { Page } from "@types";
import classes from "./index.module.scss";

type Props = Extract<Page["layout"][0], { blockType: "content" }>;

const Columns: React.FC<Props> = (props) => {
  switch (props.contentFields?.layout) {
    case "centered": {
      console.log(props.contentFields.columnOne);
      return (
        <div
          className={["start-5 cols-8 start-m-1", classes.centered]
            .filter(Boolean)
            .join(" ")}
        >
          {/* @ts-ignore */}
          <RichText {...props.contentFields.columnOne.root} />
        </div>
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
