import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nidhi | MERN Stack Developer & Freelance Specialist",
  description:
    "Nidhi is a MERN Stack Developer specializing in responsive web applications, REST APIs, admin dashboards, and scalable backend architecture with React, Next.js, Node.js, Express, and MongoDB.",
  keywords: [
    "MERN Stack Developer",
    "Freelance Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js REST API",
    "TypeScript Developer",
    "Full-Stack Developer",
    "Admin Dashboard Developer",
  ],
  authors: [{ name: "Nidhi" }],
  openGraph: {
    title: "Nidhi | MERN Stack Developer & Freelance Specialist",
    description:
      "Building modern web experiences that turn ideas into working products. Responsive web apps, REST APIs, dashboards and scalable backend systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi | MERN Stack Developer",
    description:
      "Building modern web applications, REST APIs, and admin dashboards with React, Next.js, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F17] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
