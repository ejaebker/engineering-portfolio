import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engineering Portfolio",
  description: "Sophisticated engineering portfolio with research and project index.",
};

import CustomCursor from './components/CustomCursor';
import FluidBackground from './components/FluidBackground';
import TelemetryCapsule from './components/TelemetryCapsule';
import SchematicBackground from './components/SchematicBackground';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <CustomCursor />
          <FluidBackground />
          <SchematicBackground />
          <TelemetryCapsule />
          <div className="bg-grid-lines" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
