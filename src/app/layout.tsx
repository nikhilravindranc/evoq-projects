import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVOQ — One Suite. Endless Potential.",
  description: "EVOQ brings every department into one connected suite — projects, CRM, support, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
