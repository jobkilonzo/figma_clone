import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const work_Sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A minimalist clone using Fabris.js and Liveblocks for real-time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
