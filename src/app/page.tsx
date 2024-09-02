import { Metadata } from "next";
import { HomeHero } from "@components/Hero/Home";
import { FeaturedPost } from "@components/FeaturedPost";
import { CallToAction } from "@components/CallToAction";
import { fetchBlogPosts, fetchPage } from "@root/graphql";
import { Media } from "@types";

export default async function Home() {
  const blogPosts = await fetchBlogPosts();
  const latestPost = blogPosts[0] ?? null;
  const home = await fetchPage("home");

  return (
    <>
      <HomeHero
        richText={home.hero.richText}
        description={home.hero.description}
        media={home.hero.media as Media}
      />
      {latestPost && <FeaturedPost {...latestPost} />}
      <CallToAction />
    </>
  );
}

export const metadata: Metadata = {
  title: "MM | Home",
  description: "Welcome to my portfolio.",
};
