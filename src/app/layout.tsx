import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAZA",
  description: "Next.js 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

