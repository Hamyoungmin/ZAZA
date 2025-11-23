import type { Metadata } from "next";
import "./globals.css";
import LiveChat from "@/components/LiveChat";

export const metadata: Metadata = {
  title: "ZAZA",
  description: "Next.js 웹사이트",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <LiveChat />
      </body>
    </html>
  );
}

