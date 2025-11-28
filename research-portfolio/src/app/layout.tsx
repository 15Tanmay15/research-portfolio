import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.output.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: "Tanmay Gupta | CS Researcher & AI Specialist",
    template: "%s | Tanmay Gupta"
  },
  description: "Research portfolio showcasing my work in Computer Science, Artificial Intelligence, Machine Learning, and Quantum Computing",
  keywords: ["research", "computer science", "artificial intelligence", "machine learning", "quantum computing", "NLP", "computer vision", "portfolio"],
  authors: [{ name: "Tanmay Gupta" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
