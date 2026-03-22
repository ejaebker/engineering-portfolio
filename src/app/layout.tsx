import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SchematicBackground from './components/SchematicBackground';

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Eric Jaebker | Engineering Portfolio",
  description: "Sophisticated engineering portfolio of Eric Jaebker, focusing on intelligent systems, embedded hardware, and high-performance computing.",
  keywords: ["Electrical Engineering", "Machine Learning", "Embedded Systems", "Signal Processing", "Purdue University"],
  authors: [{ name: "Eric Jaebker" }],
  openGraph: {
    title: "Eric Jaebker | Engineering Portfolio",
    description: "Architecting intelligent systems through a blend of rigorous research and high-performance software engineering.",
    url: "https://jebkr.dev",
    siteName: "Eric Jaebker Portfolio",
    images: [
      {
        url: "/IMG_0741.jpg",
        width: 1200,
        height: 630,
        alt: "Eric Jaebker Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Jaebker | Engineering Portfolio",
    description: "Architecting intelligent systems through a blend of rigorous research and high-performance software engineering.",
    images: ["/IMG_0741.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[var(--text-primary)] focus:text-[var(--background)] focus:text-[10px] focus:font-black focus:tracking-[0.4em] focus:uppercase focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          SKIP_TO_CONTENT
        </a>
        <Providers>
          <SchematicBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
