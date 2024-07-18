"use client";
import React from "react";
import classes from "./classes.module.scss";
import { Media } from "@types";
import Image from "next/image";
import KatexSpan from "@components/KatexSpan";
import EquationBlock from "@root/blocks/Equation";

type Node = {
  children?: Node[];
  type: string;
  tag?: string;
  text?: string;
  listType?: string;
  value?: Media;
  format?: number;
  fields?: {
    blockType?: string;
    equationFields?: {
      richText?: string;
    };
  };
};

type SerializeFunction = React.FC<{
  content?: Node[];
}>;

export const RichText: React.FC<{
  className?: string;
  content: any;
}> = ({ className, content }) => {
  if (!content || !content.root.children) {
    return null;
  } else {
    return (
      <div className={[className].filter(Boolean).join(" ")}>
        {content.root?.children && (
          <Serialize content={content.root?.children} />
        )}
      </div>
    );
  }
};

export const Serialize: SerializeFunction = ({ content }) => {
  return (
    <>
      {content?.map((node, i) => {
        if (!node) {
          return null;
        }

        switch (node.type) {
          case "text":
            return <KatexSpan text={node.text} key={i} />;

          case "block":
            if (node.fields?.blockType === "equation") {
              return (
                <EquationBlock content={node.fields.equationFields?.richText} />
              );
            }
          case "heading":
            switch (node.tag) {
              case "h1":
                return (
                  <h1 key={i}>
                    <Serialize content={node.children} />
                  </h1>
                );
              case "h2":
                return (
                  <h2 key={i}>
                    <Serialize content={node.children} />
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={i}>
                    <Serialize content={node.children} />
                  </h3>
                );
              case "h4":
                return (
                  <h4 key={i}>
                    <Serialize content={node.children} />
                  </h4>
                );
            }
          case "paragraph":
            return (
              <p key={i}>
                <Serialize content={node.children} />
              </p>
            );

          case "horizontalrule":
            return <hr key={i} className={classes.horizontalRule} />;

          case "quote":
            return (
              <div key={i} className={classes.quote}>
                <Serialize content={node.children} />
              </div>
            );
          case "listitem":
            return (
              <li key={i}>
                {" "}
                <Serialize content={node.children} />{" "}
              </li>
            );
          case "list":
            if (node.listType == "number") {
              return (
                <ol key={i}>
                  <Serialize content={node.children} />
                </ol>
              );
            }
            if (node.listType == "bullet") {
              return (
                <ul key={i}>
                  <Serialize content={node.children} />
                </ul>
              );
            }
          case "upload":
            return (
              <div key={i}>
                {node.value?.url && typeof node.value !== "string" && (
                  <Image
                    key={i}
                    src={`${process.env.NEXT_PUBLIC_CMS_URL}${node.value.url}`}
                    alt={node.value.alt}
                    width={node.value?.width ?? undefined}
                    height={node.value?.height ?? undefined}
                    className={classes.image}
                  />
                )}
              </div>
            );
        }
      })}
    </>
  );
};
