import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
        className={`${syne.variable} ${spaceGrotesk.variable} antialiased font-sans`}
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
