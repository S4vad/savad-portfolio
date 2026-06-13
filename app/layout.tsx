import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";
import { ErrorBoundary } from "@/components/error-boundary";
import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll";
import { NekoCat } from "@/components/neko-cat";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "Muhammed Savad - Software Engineer | Portfolio",
  description:
    "Software Engineer building full-stack web applications and production-grade systems. Experienced in React, Next.js, Node.js, and Shopify app development.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Portfolio",
    "India",
    "Muhammed Savad",
    "Savad",
    "Helixo",
    "Shopify Developer",
    "Next.js Developer",
    "Best Portfolio",
    "Minimalist Portfolio",
    "Developer Portfolio",
    "Student Portfolio",
    "Tech Portfolio",
    "Modern Portfolio",
    "Clean Portfolio",
    "Professional Portfolio",
    "Portfolio Website",
    "Personal Website",
    "Developer Website",
  ],
  authors: [{ name: "Muhammed Savad" }],
  creator: "Muhammed Savad",
  publisher: "Muhammed Savad",
  generator: "Next.js",
  applicationName: "Muhammed Savad Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://savad.vercel.app",
    siteName: "Muhammed Savad Portfolio",
    title: "Muhammed Savad - Software Engineer",
    description:
      "Software Engineer building full-stack web applications and production-grade systems. Experienced in React, Next.js, Node.js, and Shopify app development.",
    images: [
      {
        url: "/facedemo.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhammed Savad - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sava__d",
    creator: "@sava__d",
    title: "Muhammed Savad - Software Engineer",
    description:
      "Software Engineer building full-stack web applications and production-grade systems. Experienced in React, Next.js, Node.js, and Shopify app development.",
    images: ["/facedemo.jpeg"],
  },
  icons: {
    icon: "/favicon?v=1",
    shortcut: "/favicon?v=1",
    apple: "/favicon?v=1",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "1745savad@gmail.com",
    "contact:country_name": "India",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:image:alt": "Muhammed Savad - Software Engineer Portfolio",
    "og:site_name": "Muhammed Savad Portfolio",
    "og:locale": "en_US",
    "og:type": "website",
    "og:url": "https://savad.vercel.app",
    "og:title": "Muhammed Savad - Software Engineer",
    "og:description":
      "Software Engineer building full-stack web applications and production-grade systems.",
    "twitter:image:alt": "Muhammed Savad - Software Engineer Portfolio",
    "twitter:domain": "savad.vercel.app",
    "twitter:url": "https://savad.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LenisSmoothScroll />
            <NekoCat />
            <div className="min-h-dvh">
              {children}
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
