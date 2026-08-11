import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ember Coffee Co. — corner of 5th & Alder",
  description:
    "A small coffee bar pulling slow, dark roasts from 6am to 3pm. Espresso, drip, and pastries baked next door.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}