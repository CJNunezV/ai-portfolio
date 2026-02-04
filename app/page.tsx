export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "56px 24px",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: 64 }}>
        <h1 style={{ fontSize: 48, marginBottom: 12 }}>
          Your Name
        </h1>

        <p style={{ fontSize: 20, color: "#444", maxWidth: 720 }}>
          AI Engineer focused on building production-ready LLM systems,
          retrieval pipelines (RAG), and scalable ML infrastructure.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 24,
            flexWrap: "wrap",
          }}
        >
          <PrimaryButton href="mailto:you@email.com">
            Contact
          </PrimaryButton>

          <SecondaryButton href="https://github.com/yourhandle">
            GitHub
          </SecondaryButton>

          <SecondaryButton href="https://www.linkedin.com/in/yourhandle">
            LinkedIn
          </SecondaryButton>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle>About</SectionTitle>
        <p style={{ maxWidth: 800, lineHeight: 1.7, color: "#333" }}>
          I design and deploy AI systems that move beyond demos.
          My work spans LLM applications, retrieval-augmented generation,
          evaluation pipelines, and ML deployment with a strong focus on
          reliability, latency, and measurable business value.
        </p>
      </section>

      {/* PROJECTS */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle>Selected Projects</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          <ProjectCard
            title="RAG Knowledge Assistant"
            description="End-to-end retrieval system with vector search, reranking, citations, and monitoring."
            tech={["RAG", "Next.js", "pgvector", "OpenAI"]}
            link="https://github.com/yourhandle/rag-assistant"
          />

          <ProjectCard
            title="LLM Evaluation Framework"
            description="Automated evaluation, regression tests, and prompt versioning for production LLM apps."
            tech={["Python", "LLM Eval", "CI/CD"]}
            link="https://github.com/yourhandle/llm-eval"
          />

          <ProjectCard
            title="Computer Vision Pipeline"
            description="Training and inference pipeline for defect detection with model versioning."
            tech={["PyTorch", "CV", "ONNX"]}
            link="https://github.com/yourhandle/cv-pipeline"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle>Skills</SectionTitle>

        <ul style={{ lineHeight: 2, paddingLeft: 20 }}>
          <li>
            <b>LLMs:</b> Prompting, function calling, agents, RAG
          </li>
          <li>
            <b>MLOps:</b> Docker, CI/CD, monitoring, experiment tracking
          </li>
          <li>
            <b>Data:</b> SQL, vector databases, ETL pipelines
          </li>
          <li>
            <b>Stack:</b> Python, TypeScript, FastAPI, Next.js
          </li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #eee",
          paddingTop: 24,
          color: "#666",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} Your Name — AI Engineer
      </footer>
    </main>
  );
}

/* ---------- Components ---------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 28,
        marginBottom: 16,
      }}
    >
      {children}
    </h2>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  link,
}: {
  title: string;
  description: string;
  tech: string[];
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{
        padding: 20,
        border: "1px solid #eee",
        borderRadius: 16,
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s ease",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: "#333", lineHeight: 1.6 }}>{description}</p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 12,
              padding: "4px 10px",
              background: "#f5f5f5",
              borderRadius: 999,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        padding: "12px 20px",
        background: "#111",
        color: "#fff",
        borderRadius: 999,
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        padding: "12px 20px",
        border: "1px solid #ddd",
        borderRadius: 999,
        textDecoration: "none",
        color: "#111",
        fontWeight: 500,
      }}
    >
      {children}
    </a>
  );
}
