import "./globals.css";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Santiago Monroy | Data, Econ & Policy</title>
        <meta name="description" content="Santiago Monroy - Dana Analysis, Economics, and Policy Research" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href=".site.webmanifest" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-textDark`}>
        {children}
      </body>
    </html>
  );
}