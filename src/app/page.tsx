import { Metadata } from "next";
import { HomeHero } from "@components/Hero/Home";
import { FeaturedPost } from "@components/FeaturedPost";
import { CallToAction } from "@components/CallToAction";
import { fetchBlogPosts, fetchPages } from "@root/graphql";

export default async function Home() {
  const blogPosts = await fetchBlogPosts();
  const latestPost = blogPosts[0] ?? null;
  const pages = await fetchPages();

  console.log(pages);
  return (
    <>
      <HomeHero />
      {latestPost && <FeaturedPost {...latestPost} />}
      <CallToAction />
    </>
  );
}

export const metadata: Metadata = {
  title: "MM | Home",
  description: "Welcome to my portfolio.",
};
