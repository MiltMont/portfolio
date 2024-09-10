import { fetchPage } from "@root/graphql";
import Home from "../page";
import { Gutter } from "@components/Gutter";
import { RenderBlocks } from "@components/RenderBlocks";
import { notFound } from "next/navigation";
import { DefaultHero } from "@components/Hero/Default";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

const Page = async (props: Props) => {
  const {
    params: { slug },
  } = props;

  const page = await fetchPage(slug);

  if (slug === "home") {
    return Home();
  }

  if (page) {
    return (
      <Gutter>
        <DefaultHero {...page.hero} />
        <RenderBlocks blocks={page.layout} />
      </Gutter>
    );
  } else {
    return notFound();
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await fetchPage(params.slug);

  if (page) {
    return {
      title: `MM | ${page.title}`,
    };
  } else {
    return {
      title: "Not Found",
    };
  }
}

export default Page;
