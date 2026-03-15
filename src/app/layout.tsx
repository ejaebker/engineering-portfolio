import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Make sure this path matches where you created the file!
import ParticleBackground from "./components/ParticleBackground"; 

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
  description: "Neon-themed engineering portfolio with projects and publications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* 1. The particles sit at the very bottom */}
        <ParticleBackground /> 

        {/* 2. Your content sits on top */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}