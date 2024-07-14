import React from "react";

type children = {
  children: [children];
  detail: number;
  format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
  mode: "normal";
  style: string;
  text: string;
  type: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "paragraph";
};

type Node = {
  children?: Node[];
  type: string;
  tag?: string;
  text?: string;
};

type SerializeFunction = React.FC<{
  content?: Node[];
}>;

type root = {
  type: string;
  children: {
    type: string;
    version: number;
    [k: string]: unknown;
  }[];
  direction: ("ltr" | "rtl") | null;
  format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
  indent: number;
  version: number;
};

export const RichText: React.FC<{
  className?: string;
  content: any;
}> = ({ className, content }) => {
  if (!content) {
    return null;
  } else {
    return (
      <div>
        <Ser content={content.root.children} />
      </div>
    );
  }
};

export const Ser: SerializeFunction = ({ content }) => {
  return (
    <>
      {content?.map((node, i) => {
        if (!node) {
          return null;
        }
        console.log(node);
        switch (node.type) {
          case "root":
            return <div>Root element</div>;

          case "heading":
            switch (node.tag) {
              case "h1":
                return (
                  <h1 key={i}>
                    <Ser content={node.children} />
                  </h1>
                );
              case "h2":
                return (
                  <h2 key={i}>
                    <Ser content={node.children} />
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={i}>
                    <Ser content={node.children} />
                  </h3>
                );
              case "h4":
                return (
                  <h4 key={i}>
                    <Ser content={node.children} />
                  </h4>
                );
            }
          case "paragraph":
            return (
              <p>
                <Ser content={node.children} />{" "}
              </p>
            );

          case "text":
            return node.text;
        }
      })}
    </>
  );
};

export const Serialize: React.FC<children> = (props) => {
  const { children, type, tag, text } = props;
  switch (type) {
    case "heading":
      switch (tag) {
        case "h1":
          return (
            <h1>
              <Serialize {...children[0]} />
            </h1>
          );
        case "h2":
          return (
            <h2>
              <Serialize {...children[0]} />
            </h2>
          );
        case "h3":
          return (
            <h3>
              <Serialize {...children[0]} />
            </h3>
          );
        case "h4":
          return (
            <h4>
              <Serialize {...children[0]} />
            </h4>
          );
      }
    case "paragraph":
      return (
        <p>
          <Serialize {...children[0]} />
        </p>
      );
    case "text":
      return text;
    case "root":
      return <div>Root element</div>;
  }
};
