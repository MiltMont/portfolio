import { DefaultHero } from "@components/Hero/Default";
import { HomeHero } from "@components/Hero/Home";
import { FeaturedPost } from "@components/FeaturedPost";
import { CallToAction } from "@components/CallToAction";
import { fetchBlogPosts } from "@root/graphql";

export default async function Home() {
  const blogPosts = await fetchBlogPosts();
  console.log(blogPosts);
  return (
    <>
      <HomeHero />
      <FeaturedPost />
      <CallToAction />
    </>
  );
}
