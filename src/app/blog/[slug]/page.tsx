import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchBlogPost } from "@root/graphql";

const Post = async ({ params }) => {
  const { slug } = params;

  const blogPost = await fetchBlogPost(slug);

  if (!blogPost) return notFound();

  return <div>Testing!</div>;
};

export default Post;
