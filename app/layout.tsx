import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Summer Budget Travel 2026",
  description:
    "A practical guide to cheap flights, affordable destinations, and smarter summer travel planning in the US.",
  other: {
    "google-site-verification": "N21K5VoxWUyIIwGf5NZjvhvU2Ty_JC2EoVhMWPL-iro",
  },
};

/**
 * 提供站点根布局和全局字体配置。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Analytics mode="production" /></body>
    </html>
  );
}
