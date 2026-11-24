import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Providers from "./components/Providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL in your hosting env (e.g. https://your-domain.com) so
// social previews get absolute URLs. On Vercel the deployment URL is used automatically.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "Christopher Nuñez | BIM Automation & AI Research";
const description =
  "Civil Engineer and Research Analyst specializing in Scan-to-BIM, point clouds and AI, BIM automation with the Revit and Navisworks APIs, and digital twins. 7 peer-reviewed papers, 4 at ISARC.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Scan-to-BIM",
    "BIM automation",
    "Revit API",
    "Navisworks API",
    "point clouds",
    "digital twins",
    "ISARC",
    "civil engineering",
  ],
  authors: [{ name: "Christopher Nuñez" }],
  openGraph: {
    type: "profile",
    title,
    description,
    url: "/",
    images: [{ url: "/avatar.jpg", alt: "Christopher Nuñez" }],
  },
  twitter: { card: "summary", title, description, images: ["/avatar.jpg"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f17" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: next-themes sets data-theme on <html> before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
