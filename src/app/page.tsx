import { DefaultHero } from "../components/Hero/Default";
import { HomeHero } from "../components/Hero/Home";
import { FeaturedPost } from "../components/FeaturedPost";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedPost />
      <DefaultHero />
    </>
  );
}
