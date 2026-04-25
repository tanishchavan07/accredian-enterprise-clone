import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise — Upskill Your Workforce at Scale",
  description:
    "Partner with IITs, IIMs, and global universities to upskill your enterprise teams with curated programs, live mentorship, and real-time analytics that deliver measurable ROI.",
  keywords: [
    "enterprise learning",
    "corporate training",
    "upskilling",
    "IIT programs",
    "IIM programs",
    "L&D platform",
    "Accredian Enterprise",
  ],
  openGraph: {
    title: "Accredian Enterprise — Upskill Your Workforce at Scale",
    description:
      "India's most trusted enterprise learning platform. Co-created programs with IITs & IIMs, live mentorship, and an analytics dashboard that delivers measurable ROI.",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise — Upskill Your Workforce at Scale",
    description:
      "Partner with IITs, IIMs, and global universities to upskill your enterprise teams.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
