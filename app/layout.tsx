import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Icon } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notire",
  description: "Connected workspace where better , faster works happens",
  icons: {
    icon: [
    { 
      media: "(prefers-color-scheme: dark)",
      url: "/n-white.svg",
      href: "/n-white.svg",
    },
    { 
      media: "(prefers-color-scheme: light)",
      url: "/n-white.svg",
      href: "/n-white.svg",
    },
  ],
},
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
