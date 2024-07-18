import { Post } from "@types";
import React from "react";
import { Gutter } from "@components/Gutter";
import PostCard from "@components/PostCard";

import classes from "./classes.module.scss";
import { FeaturedPost } from "@components/FeaturedPost";

type Props = {
  posts: Post[];
};

const DisplayPosts: React.FC<Props> = (props) => {
  const { posts } = props;
  console.log(posts);
  // Handle case for 0 and 1 post!
  if (posts.length == 0) {
    return null;
  }
  if (posts.length == 1) {
    return <FeaturedPost {...posts[0]} />;
  }

  if (posts.length == 2) {
    return (
      <>
        <FeaturedPost {...posts[0]} />
        <Gutter className={classes.postsList}>
          <div className="grid">
            <div className="cols-8">
              <PostCard {...posts[1]} />
            </div>
          </div>
        </Gutter>
      </>
    );
  }
  // Assuming there are more than two posts.
  return (
    <>
      <FeaturedPost {...posts[0]} />
      <Gutter className={classes.postsList}>
        <div
          className={["grid", classes.listContainer].filter(Boolean).join(" ")}
        >
          {posts.slice(1).map((post, i) => (
            <div key={i} className="cols-8">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Gutter>
    </>
  );
};

export default DisplayPosts;
