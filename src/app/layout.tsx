import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import logo from "@/../public/logown.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog by Kaviru Hapuarachchi",
  description: "Created using Notion API and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        <link rel="icon" href={logo.src} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
