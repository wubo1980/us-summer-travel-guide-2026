import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Script from "next/script";


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
  metadataBase: new URL("https://us-summer-travel-guide-2026.vercel.app"),
  title: "Summer Budget Travel 2026: Cheap Trips &amp; Smart Planning",
  description:
    "A practical guide to cheap flights, affordable destinations, and smarter summer travel planning in the US.",
  openGraph: {
    title: "Summer Budget Travel 2026: Cheap Trips &amp; Smart Planning",
    description: "A practical guide to cheap flights, affordable destinations, and smarter summer travel planning in the US.",
    url: "https://us-summer-travel-guide-2026.vercel.app/",
    siteName: "Summer Budget Travel 2026",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summer Budget Travel 2026: Cheap Trips &amp; Smart Planning",
    description: "A practical guide to cheap flights, affordable destinations, and smarter summer travel planning in the US.",
  },
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
        <Script src={"https://www.googletagmanager.com/gtag/js?id=G-HVWBK3967C"} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-HVWBK3967C");
          `}
        </Script>
    </html>
  );
}
