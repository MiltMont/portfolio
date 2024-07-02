import Image from "next/image";
import { Gutter } from "../components/Gutter";
import classes from "./classes.module.scss";

export default function Home() {
  return (
    <Gutter>
      <h1>Welcome!</h1>
      <div className="grid">
        <h1
          className={["start-1 cols-8 start-m-1 cols-m-2", classes.col1].join(
            " "
          )}
        >
          A
        </h1>
        <h1
          className={["start-9 cols-8 start-m-5 cols-m-2", classes.col2].join(
            " "
          )}
        >
          B
        </h1>

        <h1 className={["start-1 cols-16", classes.col3].join(" ")}>C</h1>
      </div>
    </Gutter>
  );
}
