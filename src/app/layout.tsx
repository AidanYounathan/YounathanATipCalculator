import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const Space = Space_Mono({ 
  subsets: ['latin'],
  weight: ['700']
});

export const metadata: Metadata = {
  title: "Splitter",
  description: "Tip Splitting App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Space.className}>{children}</body>
    </html>
  );
}
