export const metadata = {
  title: "Your Name | AI Engineer",
  description:
    "AI Engineer portfolio — LLM applications, RAG systems, MLOps, and applied machine learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: "#ffffff",
          color: "#111",
        }}
      >
        {children}
      </body>
    </html>
  );
}