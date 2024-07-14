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

export const RichText: React.FC<root> = (props) => {
  const { children, direction, format, indent, type } = props;

  return children.map((child, childIndex) => {
    return <Serialize {...child} key={childIndex} />;
  });
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
  }
};
