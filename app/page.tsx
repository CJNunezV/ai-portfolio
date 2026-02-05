"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  Youtube,
  Twitter,
  Moon,
  Sun,
} from "lucide-react";

type Theme = "light" | "dark";

export default function Page() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // load saved theme
    const saved = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="nav">
        <div className="container">
          <div className="navInner">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, var(--primary), #22c55e)",
                  border: "1px solid var(--border)",
                }}
              />
              <div>
                <div style={{ fontWeight: 900, letterSpacing: 0.2 }}>CJNunezV</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>AI Engineer</div>
              </div>
            </div>

            <div className="navLinks">
              <a href="#about">About</a>
              <a href="#expertise">Expertise</a>
              <a href="#research">Research</a>
              <a href="#projects">Projects</a>
              <a href="#publications">Publications</a>
              <a href="#videos">Videos</a>
              <a href="#recommendations">Recommendations</a>

              <button className="btn" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="container">
        <div className="grid">
          {/* LEFT PROFILE */}
          <aside className="card profile">
            <div className="avatar">
              <Image
                src="/avatar.jpg"
                alt="Profile photo"
                width={220}
                height={220}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>

            <h1 className="h1">Christopher Núñez</h1>
            <div className="role">AI Engineer</div>

            <div className="subtitle">
              Engineer • Researcher • Builder <br />
              Generative AI • RAG • MLOps
            </div>

            <div style={{ marginTop: 14, textAlign: "center" }}>
              <span className="pill">A human passionate about technology, business, and science.</span>
            </div>

            <div className="iconRow">
              <a className="iconBtn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
              </a>
              <a className="iconBtn" href="https://github.com/CJNunezV" target="_blank" rel="noreferrer">
                <Github size={18} />
              </a>
              <a className="iconBtn" href="mailto:you@email.com">
                <Mail size={18} />
              </a>
              <a className="iconBtn" href="#" target="_blank" rel="noreferrer" aria-label="Resume">
                <FileDown size={18} />
              </a>
              <a className="iconBtn" href="https://youtube.com" target="_blank" rel="noreferrer">
                <Youtube size={18} />
              </a>
              <a className="iconBtn" href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter size={18} />
              </a>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <section className="card content">
            {/* ABOUT */}
            <div id="about">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">About me</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <div className="sectionText" style={{ maxWidth: 820, margin: "0 auto" }}>
                <p>
                  IT professional with experience building data-driven products and generative AI solutions.
                  I specialize in designing scalable systems with a holistic view of business strategy,
                  delivery, and engineering.
                </p>
                <p>
                  My mission is to empower organizations through AI and data, translating complex needs into
                  high-value, measurable solutions that drive innovation.
                </p>
                <p>
                  If you want to collaborate or hire me, you can <a href="mailto:you@email.com" style={{ color: "var(--primary)", fontWeight: 700 }}>write me</a>.
                </p>
              </div>
            </div>

            {/* EXPERTISE */}
            <div className="sectionBlock" id="expertise">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Expertise</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <div className="cards3">
                <MiniCard title="LLM Apps" items={["Tools / Function calling", "Agents", "Prompting + guardrails"]} />
                <MiniCard title="RAG Systems" items={["Vector search", "Reranking", "Citations + eval"]} />
                <MiniCard title="MLOps" items={["Docker", "CI/CD", "Monitoring + quality checks"]} />
              </div>
            </div>

            {/* RESEARCH */}
            <div className="sectionBlock" id="research">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Research</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <div style={{ maxWidth: 900, margin: "16px auto 0" }}>
                <Paper
                  venue="ISARC 2026"
                  title="An automated framework to quantify exposure of informal urban settlements using UAV and Scan-to-BIM"
                  year="2026"
                  doi="In process"
                  link="https://doi.org/10.22260/ISARC2025/0194"
                  tags={["Scan-to-BIM", "Urban Digitalization", "UAV"]}
                  logo="/conferences/ISARC-2026.png"
                />

                <Paper
                  venue="ISARC 2025"
                  title="Algorithm development for automatic detection of progressive damage in tunnel cross-sectional geometry"
                  year="2025"
                  doi="10.22260/ISARC2025/0194"
                  link="https://doi.org/10.22260/ISARC2025/0194"
                  tags={["Tunnel", "Point cloud", "Open3D"]}
                  logo="/conferences/ISARC-2025.png"
                />

                <Paper
                  venue="ISARC 2024"
                  title="3D reconstruction of a bridge with concrete damage classification using deep learning"
                  year="2024"
                  doi="10.22260/ISARC2024/0094"
                  link="https://doi.org/10.22260/ISARC2024/0094"
                  tags={["Deep Learning", "Damage Detection", "3D Reconstruction"]}
                  logo="/conferences/ISARC-2024.png"
                />

                <Paper
                  venue="ISARC 2023"
                  title="3D Printing: An opportunity for the sustainable development of building construction"
                  year="2023"
                  doi="10.22260/ISARC2023/0096"
                  link="https://doi.org/10.22260/ISARC2023/0096"
                  tags={["3D Printing", "Sustainable Construction"]}
                  logo="/conferences/ISARC-2023.png"
                />

                <Paper
                  venue="CONIITI 2023"
                  title="Robotics in building construction: Advantages and Barriers"
                  year="2023"
                  doi="10.1109/CONIITI61170.2023.10324131"
                  link="https://doi.org/10.1109/CONIITI61170.2023.10324131"
                  tags={["Robotics", "Construction", "Automation"]}
                  logo="/conferences/CONIITI.png"
                />

                <Paper
                  venue="CONIITI 2023"
                  title="Virtual reality for design and site planning in construction projects: Advantages and barriers"
                  year="2023"
                  doi="10.1109/CONIITI61170.2023.10324023"
                  link="https://doi.org/10.1109/CONIITI61170.2023.10324023"
                  tags={["VR", "Planning", "AEC"]}
                  logo="/conferences/CONIITI.png"
                />              

                <Paper
                  venue="CONIITI 2021"
                  title={`An Analysis of LEED Certification's Adaptation to Design and Construction of Sustainable Buildings in Peru`}
                  year="2021"
                  doi="10.1109/CONIITI53815.2021.9619628"
                  link="https://doi.org/10.1109/CONIITI53815.2021.9619628"
                  tags={["Sustainability", "LEED", "Construction"]}
                  logo="/conferences/CONIITI.png"
                />

              </div>
            </div>

            {/* PROJECTS */}
            <div className="sectionBlock" id="projects">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Projects</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
                <ProjectRow
                  title="RAG Knowledge Assistant"
                  desc="End-to-end RAG with reranking, citations, and monitoring."
                  tags={["RAG", "Next.js", "pgvector"]}
                  link="https://github.com/CJNunezV"
                />
                <ProjectRow
                  title="LLM Evaluation Harness"
                  desc="Automated tests + regression suite for prompts and models."
                  tags={["Python", "Eval", "CI/CD"]}
                  link="https://github.com/CJNunezV"
                />
                <ProjectRow
                  title="Embeddings ETL Pipeline"
                  desc="Batching, retries, cost control, and observability for embeddings."
                  tags={["ETL", "Embeddings", "Monitoring"]}
                  link="https://github.com/CJNunezV"
                />
              </div>
            </div>

            {/* PUBLICATIONS */}
            <div className="sectionBlock" id="publications">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Publications</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <p className="sectionText" style={{ maxWidth: 820, margin: "14px auto 0" }}>
                Add your papers, blog posts, or technical notes here.
              </p>
            </div>

            {/* VIDEOS */}
            <div className="sectionBlock" id="videos">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Videos</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <p className="sectionText" style={{ maxWidth: 820, margin: "14px auto 0" }}>
                Talks, workshops, or YouTube content.
              </p>
            </div>

            {/* RECOMMENDATIONS */}
            <div className="sectionBlock" id="recommendations">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Recommendations</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <p className="sectionText" style={{ maxWidth: 820, margin: "14px auto 0" }}>
                Add testimonials from LinkedIn or clients (short and specific).
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function MiniCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ fontWeight: 900, marginBottom: 10 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.9 }}>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectRow({
  title,
  desc,
  tags,
  link,
}: {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}) {
  return (
    <a
      className="card"
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ padding: 16, display: "block" }}
    >
      <div style={{ fontWeight: 900 }}>{title}</div>
      <div style={{ marginTop: 6, color: "var(--muted)", lineHeight: 1.7 }}>{desc}</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}



function Paper({
  venue,
  title,
  year,
  doi,
  link,
  tags,
  logo,
}: {
  venue: string;
  title: string;
  year: string;
  doi: string;
  link: string;
  tags: string[];
  logo: string;
}) {
  return (
    <div
      className="card"
      style={{
        padding: 18,
        marginBottom: 14,
        background: "#ffffff", // ✅ fondo blanco
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        {/* Left: venue + title */}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 900, marginBottom: 6 }}>
            {venue}{" "}
            <span style={{ color: "var(--muted)", fontWeight: 700 }}>
              • {year}
            </span>
          </div>

          <div style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.6 }}>
            {title}
          </div>
        </div>

        {/* Right: DOI + logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 10,
            minWidth: 120,
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--primary)",
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            View DOI
          </a>

          {/* Logo BELOW View DOI */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 14,
              border: "1px solid var(--border)",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={logo}
              alt={`${venue} logo`}
              width={56}
              height={56}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* DOI text */}
      <div
        style={{
          marginTop: 10,
          fontSize: 13,
          color: "var(--muted)",
        }}
      >
        DOI: {doi}
      </div>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginTop: 12,
        }}
      >
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

