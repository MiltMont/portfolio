import { Metadata } from "next";
import { HomeHero } from "@components/Hero/Home";
import { fetchPage } from "@root/graphql";
import { Media } from "@types";
import { RenderBlocks } from "@components/RenderBlocks";

export default async function Home() {
  const home = await fetchPage("home");
  return (
    <>
      <HomeHero
        richText={home.hero.richText}
        description={home.hero.description}
        media={home.hero.media as Media}
      />

      <RenderBlocks blocks={home.layout} />
    </>
  );
}

export const metadata: Metadata = {
  title: "MM | Home",
  description: "Welcome to my portfolio.",
};
