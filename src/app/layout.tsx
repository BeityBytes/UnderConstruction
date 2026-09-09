import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const AbrilFatface = localFont({
  variable: "--font-abril",
  src: "./AbrilFatface-Regular.woff2",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Under Construction",
  description: "Something is being built here. Check back soon.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${AbrilFatface.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
