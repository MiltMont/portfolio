import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchBlogPost } from "@root/graphql";
import BlogPost from "@layout/BlogPost";

type Props = {
  params: { slug: string };
};

const Post = async (props) => {
  const {
    params: { slug },
  } = props;

  const blogPost = await fetchBlogPost(slug);

  if (!blogPost) return notFound();

  return <BlogPost {...blogPost} />;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogPost = await fetchBlogPost(params.slug);

  return {
    title: `MM | ${blogPost.title}`,
  };
}

export default Post;
