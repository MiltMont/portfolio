import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";

import { Providers } from "../providers";
import { Footer } from "@layout/Footer";
import { Header } from "@layout/Header";
import { fetchGlobals } from "@root/graphql";

import "../css/app.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const robotoMono = Roboto_Mono({
  weight: ["400"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MM | Porfolio",
  description: "Something Something",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { mainMenu, footer } = await fetchGlobals();
  console.log(footer);
  return (
    <html lang="en">
      <body className={[robotoMono.variable, inter.variable].join(" ")}>
        <Providers>
          <Header {...mainMenu} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
