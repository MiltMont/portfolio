import type { MainMenu, Footer, Post, Page } from "@types";
import { GLOBALS } from "./globals";
import { POST, POSTS } from "./posts";
import { PAGES } from "./pages";

export const fetchPages = async (): Promise<Page[]> => {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql?pages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: PAGES,
      }),
      next: { revalidate: 100 },
    }
  ).then((res) => res.json());

  return data?.Pages?.docs;
};

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
      next: { revalidate: 100 },
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
      next: { revalidate: 100 },
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
      next: { revalidate: 100 },
    }
  ).then((res) => res.json());

  return data?.Posts?.docs[0];
};
