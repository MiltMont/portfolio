import React from "react";

import classes from "./classes.module.scss";
import { RichText } from "@components/Serialize";
import { Gutter } from "@components/Gutter";

type Props = {
  content: string;
  description: string;
};

const MinimalHero: React.FC<Props> = ({ content, description }) => {
  return (
    <Gutter className={classes.heroContainer}>
      <div className="grid">
        <div
          className={["start-1 cols-8", classes.content]
            .filter(Boolean)
            .join(" ")}
        >
          {content}
        </div>
        <div
          className={[classes.description, "start-9 cols-4 start-m-1 cols-4"]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </div>
      </div>
    </Gutter>
  );
};

export default MinimalHero;
