import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Check-in | Qoomlee Airline",
  description:
    "Check in online and save time at the airport. Fly Smart. Fly Qoomlee.",
};

export const viewport: Viewport = {
  themeColor: "#1a6a8a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
