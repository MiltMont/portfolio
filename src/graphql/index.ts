import type { MainMenu, Footer } from "@types";
import { GLOBALS } from "./globals";

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
    }
  ).then((res) => res.json());

  return {
    mainMenu: data.MainMenu,
    footer: data.Footer,
  };
};
