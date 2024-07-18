import React from "react";
import classes from "./classes.module.scss";

type Node = {
  children?: Node[];
  type: string;
  tag?: string;
  text?: string;
  listType?: string;
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
            return node.text;
          case "root":
            return <div key={i}>Root element</div>;

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
        }
      })}
    </>
  );
};
