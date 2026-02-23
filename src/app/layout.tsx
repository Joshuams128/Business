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
        url: "/images/logo.png",
        type: "image/png",
      }
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="preload" as="image" href="/images/bg1.png" />
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
