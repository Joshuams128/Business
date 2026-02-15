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
    default: "MJ Scott Web Development | Greater Toronto Area",
    template: "%s | MJ Scott Web Development",
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
    "MJ Scott",
  ],
  authors: [{ name: "MJ Scott" }],
  creator: "MJ Scott",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "MJ Scott Web Development",
    title: "MJ Scott Web Development | Greater Toronto Area",
    description:
      "Professional web development for small businesses, churches, and construction companies. Performance, speed, and accessibility in every build.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJ Scott Web Development",
    description:
      "Professional web development for small businesses, churches, and construction companies in the GTA.",
  },
  robots: {
    index: true,
    follow: true,
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
