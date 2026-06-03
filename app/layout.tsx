import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dave Patrick Bulaso | Full-Stack Developer & Automation Engineer",
  description:
    "Full-stack developer and automation engineer based in the Philippines. I ship real products: dashboards, mobile apps, automation pipelines, used daily by companies in the UK, US, and locally.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dave Patrick Bulaso",
  jobTitle: "Full-Stack Developer & Automation Engineer",
  url: "https://davepatrickbulaso.vercel.app",
  email: "davepatrickbulaso@gmail.com",
  sameAs: [
    "https://github.com/patrickpatrick27",
    "https://www.linkedin.com/in/dave-patrick-bulaso-169b7b307",
  ],
  knowsAbout: ["Next.js", "TypeScript", "Flutter", "Python", "Supabase", "PostgreSQL"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Cavite State University",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('theme')!=='light'){document.documentElement.classList.add('dark')}}catch(e){}` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
