import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata = {
  title: "CJNunezV | Portfolio",
  description: "Civil Engineer specializing in BIM automation, Scan-to-BIM, Digital Twins, and Revit API development. Researcher in 3D reconstruction, robotics, and sustainable construction.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
