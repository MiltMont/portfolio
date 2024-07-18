import KatexSpan from "@components/KatexSpan";
import { Post } from "@types";
import React from "react";

import classes from "./classes.module.scss";

type Props = { content: any };

const EquationBlock: React.FC<Props> = ({ content }) => {
  return (
    <div className={classes.container}>
      <KatexSpan text={`$$ ${content} $$`} />
    </div>
  );
};

export default EquationBlock;
