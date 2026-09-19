import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.tagline,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
  keywords: [
    "Power BI Developer",
    "Power BI",
    "Business Intelligence",
    "Data Visualisation",
    "DAX",
    "Power Query",
    "Data Analyst",
    "Dashboard Development",
    "Austin Akhigbe",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.tagline,
    description: siteConfig.metaDescription,
    siteName: siteConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.tagline,
    description: siteConfig.metaDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
