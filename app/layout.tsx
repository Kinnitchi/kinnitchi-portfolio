import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://igoroliveira.dev"),
  title: {
    default: "Igor Oliveira | Software Engineer",
    template: "%s | Igor Oliveira",
  },
  description:
    "Software Engineer especializado em Front-End e soluções enterprise. Expertise em React, Next.js e TypeScript. Desenvolvedor de interfaces modernas e performáticas.",
  keywords: [
    "Software Engineer",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Fluig",
    "TOTVS",
    "JavaScript",
    "Enterprise Solutions",
  ],
  authors: [{ name: "Igor Oliveira", url: "https://igoroliveira.dev" }],
  creator: "Igor Oliveira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://igoroliveira.dev",
    title: "Igor Oliveira | Software Engineer",
    description:
      "Software Engineer especializado em Front-End e soluções enterprise.",
    siteName: "Igor Oliveira Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor Oliveira | Software Engineer",
    description:
      "Software Engineer especializado em Front-End e soluções enterprise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen">
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
