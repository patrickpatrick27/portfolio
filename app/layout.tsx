import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dave Patrick Bulaso — Full-Stack Developer & Automation Engineer",
  description:
    "Full-stack developer and automation engineer based in the Philippines. I ship real products — dashboards, mobile apps, automation pipelines — used daily by companies in the UK, US, and locally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
