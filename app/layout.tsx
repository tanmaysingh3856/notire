import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Icon } from "lucide-react";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notire",
  description: "Connected workspace where better , faster works happens",
  icons: {
    icon: [
      {
        media: "(prefer-color-scheme: light)",
        url: "/n-white.svg",
        href: "/n-white.svg",
      },
      {
        media: "(prefer-color-scheme: dark)",
        url: "/n-dark.svg",
        href: "/n-dark.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="notire-theme-2"
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
