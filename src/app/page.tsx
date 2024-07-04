import { DefaultHero } from "@components/Hero/Default";
import { HomeHero } from "@components/Hero/Home";
import { FeaturedPost } from "@components/FeaturedPost";
import { CallToAction } from "@components/CallToAction";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedPost />
      <CallToAction />
    </>
  );
}
