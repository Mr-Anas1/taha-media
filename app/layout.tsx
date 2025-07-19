import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taha Media - Digital Agency",
  description:
    "Professional digital agency offering video editing, social media management, digital marketing, web development, and app development services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        {/* SEO Meta Tags */}
        <meta property="og:title" content="Taha Media - Digital Agency" />
        <meta
          property="og:description"
          content="Professional digital agency offering video editing, social media management, digital marketing, web development, and app development services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />{" "}
        {/* Optional: if you have one */}
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taha Media - Digital Agency" />
        <meta
          name="twitter:description"
          content="Professional digital agency offering video editing, social media management, digital marketing, web development, and app development services."
        />
        <meta name="twitter:image" content="/og-image.png" />{" "}
        {/* Optional: if you have one */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
