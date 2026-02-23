import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AcerSites | Web Development",
    template: "%s | AcerSites",
  },
  description:
    "Professional web development for small businesses, churches, and construction companies in the Greater Toronto Area. We prioritize performance, speed, and accessibility in every build.",
  keywords: [
    "web development",
    "web design",
    "Greater Toronto Area",
    "GTA",
    "small business website",
    "church website",
    "construction website",
    "Next.js",
    "AcerSites",
  ],
  authors: [{ name: "AcerSites" }],
  creator: "AcerSites",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "AcerSites",
    title: "AcerSites | Web Development",
    description:
      "Professional web development for small businesses, churches, and construction companies. Performance, speed, and accessibility in every build.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcerSites",
    description:
      "Professional web development for small businesses, churches, and construction companies in the GTA.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/images/android-chrome-512x512.png",
        type: "image/png",
      }
    ],
    shortcut: "/images/android-chrome-512x512.png",
    apple: "/images/android-chrome-512x512.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/png" href="/images/android-chrome-512x512.png" />
        <link rel="preload" as="image" href="/images/hero11.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
