import React from "react";

import { RichTextLexicalRenderer } from "@webiny/react-rich-text-lexical-renderer";
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
          <RichTextLexicalRenderer value={props.contentFields.columnOne} />
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
