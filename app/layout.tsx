import "./globals.css";

export const metadata = {
  title: "CJNunezV | AI Engineer",
  description: "AI Engineer portfolio — LLM apps, RAG, MLOps, and research.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
