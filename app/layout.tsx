import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://igoroliveira.dev"),
  title: {
    default: "Igor Oliveira | Software Engineer | Front-End Specialist",
    template: "%s | Igor Oliveira",
  },
  description:
    "Software Engineer especializado em Front-End e Fluig (TOTVS). Desenvolvedor de soluções corporativas enterprise com expertise em React, Next.js e sistemas BPMN.",
  keywords: [
    "Software Engineer",
    "Front-End Developer",
    "Fluig",
    "TOTVS",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Enterprise Solutions",
  ],
  authors: [{ name: "Igor Oliveira" }],
  creator: "Igor Oliveira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://igoroliveira.dev",
    title: "Igor Oliveira | Software Engineer | Front-End Specialist",
    description:
      "Software Engineer especializado em Front-End e Fluig (TOTVS). Desenvolvedor de soluções corporativas enterprise.",
    siteName: "Igor Oliveira Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor Oliveira | Software Engineer",
    description:
      "Software Engineer especializado em Front-End e Fluig (TOTVS).",
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
