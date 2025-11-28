import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Figma Circle",
  description:
    "A minimalist Figma app clone built with Fabric.js, Liveblocks and Next.js for real-time collaboration.",
  keywords: [
    "Figma",
    "design",
    "Fabric.js",
    "Next.js",
    "Liveblocks",
    "collaboration",
  ],
  authors: [{ name: "Dereje Masresha", url: "https://derejemasresha.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} min-h-screen bg-primary-grey-200 text-primary-grey-300`}
      >
        <Room>{children}</Room>
      </body>
    </html>
  );
}
