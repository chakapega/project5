import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const inter = Roboto({weight: '500', subsets: ['latin']});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
