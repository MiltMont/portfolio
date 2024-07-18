import DisplayPosts from "@layout/DisplayPosts";
import { fetchBlogPosts } from "@root/graphql";

const Blog = async () => {
  const blogPosts = await fetchBlogPosts();
  return (
    <>
      <DisplayPosts posts={blogPosts} />
    </>
  );
};

export default Blog;
