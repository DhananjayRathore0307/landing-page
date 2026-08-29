import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaCloud — Build Smarter. Scale Faster. Ship Confidently.",
  description:
    "Enterprise-grade cloud infrastructure, intelligent automation, and seamless DevOps solutions — all in one powerful SaaS platform.",
  keywords: [
    "SaaS",
    "Cloud",
    "DevOps",
    "Infrastructure",
    "Automation",
    "NovaCloud",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}