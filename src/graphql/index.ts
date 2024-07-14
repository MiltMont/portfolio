import type { MainMenu, Footer, Post } from "@types";
import { GLOBALS } from "./globals";
import { POST, POSTS } from "./posts";

export const fetchGlobals = async (): Promise<{
  mainMenu: MainMenu;
  footer: Footer;
}> => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?globals`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GLOBALS,
      }),
      next: { revalidate: 1000 },
    }
  ).then((res) => res.json());

  return {
    mainMenu: data.MainMenu,
    footer: data.Footer,
  };
};

export const fetchBlogPosts = async (): Promise<Post[]> => {
  const currentDate = new Date();
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?blogPosts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: POSTS,
        variables: {
          publishedOn: currentDate,
        },
      }),
      next: { revalidate: 1000 },
    }
  ).then((res) => res.json());

  return data?.Posts?.docs;
};

export const fetchBlogPost = async (slug: string): Promise<Post> => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?post=${slug}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: POST,
        variables: {
          slug,
        },
      }),
      next: { revalidate: 1000 },
    }
  ).then((res) => res.json());

  return data?.Posts?.docs[0];
};
