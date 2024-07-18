import MinimalHero from "@components/Hero/Minimal";
import DisplayPosts from "@layout/DisplayPosts";
import { fetchBlogPosts } from "@root/graphql";

import classes from "./classes.module.scss";

const Blog = async () => {
  const blogPosts = await fetchBlogPosts();
  return (
    <div className={classes.container}>
      <MinimalHero
        content={"Read all my posts"}
        description={
          "I try to write as much as posible, it usually helps me to understand a subject better."
        }
      />
      <DisplayPosts posts={blogPosts} />
    </div>
  );
};

export default Blog;
