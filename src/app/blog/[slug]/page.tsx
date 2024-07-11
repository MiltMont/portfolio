import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchBlogPost } from "@root/graphql";
import BlogPost from "./BlogPost";

const Post = async ({ params }: any) => {
  const { slug } = params;

  const blogPost = await fetchBlogPost(slug);

  if (!blogPost) return notFound();

  return <BlogPost {...blogPost} />;
};

export default Post;
