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
  BookOpen,
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
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Civil Engineer</div>
              </div>
            </div>

            <div className="navLinks">
              <a href="#about">About</a>
              <a href="#expertise">Expertise</a>
              <a href="#projects">Projects</a>
              <a href="#research">Research & Publications</a>
              <a href="#talks">Talks & Conferences</a>
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

            <h1 className="h1">Christopher Nuñez</h1>
            <div className="role">Research Analyst</div>

            <div className="subtitle">
              Civil Engineer • Computational Design <br />
              AI & Point Clouds • BIM Developer
            </div>

            <div style={{ marginTop: 14, textAlign: "center" }}>
              <span className="pill">Bridging civil engineering, artificial intelligence, and digital twins for the built environment.</span>
            </div>

            <div className="iconRow">
              <a className="iconBtn" href="https://www.linkedin.com/in/christopher-nunez-v/" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
              </a>
              <a className="iconBtn" href="https://github.com/CJNunezV" target="_blank" rel="noreferrer">
                <Github size={18} />
              </a>
              <a className="iconBtn" href="https://www.researchgate.net/profile/Christopher-Nunez-Varillas?ev=hdr_xprf" target="_blank" rel="noreferrer" aria-label="ResearchGate">
                <BookOpen size={18} />
              </a>
              <a className="iconBtn" href="christopher.nunez.v@gmail.com">
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
                  Civil Engineer and computational researcher with over 3 years of experience developing data-driven systems for the built environment, including point cloud processing, BIM automation, and AI-assisted reconstruction workflows. I specialize in designing intelligent digital models and scalable pipelines that connect raw spatial data, engineering logic, and research-driven outcomes.
                </p>
                <p>
                  My mission is to advance digital construction and smart building technologies through AI and computational methods, translating complex spatial and engineering challenges into high-impact, measurable solutions for research, industry, and academia.
                </p>
                <p>
                  If you want to collaborate on research, academic projects, or innovative engineering solutions, feel free to <a href="christopher.nunez.v@gmail.com" style={{ color: "var(--primary)", fontWeight: 700 }}>write me</a>.
                </p>
              </div>
            </div>

            {/* EXPERTISE */}
            <div className="sectionBlock" id="expertise">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Expertise</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <div className="cards3" style={{ marginTop: 16 }}>
                <ExpertCard
                  title="Programming"
                  items={[
                    { icon: "python", label: "Python", hint: "Open3D • OpenCV • NumPy" },
                    { icon: "revit", label: "C#", hint: "Revit API • Navisworks API • CAD API" },
                    { icon: "node", label: "JavaScript / Node.js", hint: "Backend • Tooling" },
                  ]}
                />

                <ExpertCard
                  title="Technologies"
                  items={[
                    { icon: "bim", label: "BIM", hint: "OpenBIM • IFC • Revit • Navisworks" },
                    { icon: "cloud", label: "Point Clouds", hint: "LiDAR • Recap • Photogrammetry" },
                    { icon: "twin", label: "Digital Twins", hint: "Data + Models • Sensors • Interoperability" },
                  ]}
                />

                <ExpertCard
                  title="Research"
                  items={[
                    { icon: "write", label: "Academic Writing", hint: "Clear & structured" },
                    { icon: "paper", label: "Peer-reviewed Publications", hint: "Conference papers" },
                    { icon: "talk", label: "Conference Presentations", hint: "Slides + Delivery" },
                  ]}
                />
              </div>
            </div>

            {/* PROJECTS */}
            <div className="sectionBlock" id="projects">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Projects</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
                <BigProjectCard
                  icon="scan2bim"
                  title="Scan-to-BIM Automation App — Point Cloud → BIM"
                  desc="Developed an end-to-end Scan-to-BIM automation pipeline using Python, OpenCV, and Open3D. The app streamlines preprocessing and processing of point clouds and accelerates BIM model generation, turning raw scans into standardized BIM-ready outputs in under one hour."
                  impact={[
                    "End-to-end pipeline (preprocessing → processing → BIM model)",
                    "BIM-ready results in < 1 hour",
                    "Standardized deliverables + reduced manual work",
                  ]}
                  tags={["Python", "OpenCV", "Open3D", "Point Clouds", "Scan-to-BIM", "Automation"]}
                  links={[{ label: "Overview", href: "#" }]}
                  images={[
                    "/projects/s2b/s2b.png",
                    "/projects/s2b/s2b2.png",
                    "/projects/s2b/s2b3.png",
                  ]}
                  highlights={[
                    "Automates point cloud preprocessing and cleanup to improve model consistency",
                    "Processing stage extracts structured information to support faster modeling decisions",
                    "Generates repeatable BIM outputs with a standardized workflow across projects",
                  ]}
                />

                <BigProjectCard
                  icon="revitqa"
                  title="Revit Add-in — Automated BIM Model QA/QC (Geometry + COBie + OmniClass) → Excel Report"
                  desc="Developed a Revit add-in that automates BIM coordination review by validating geometry and data integrity (COBie and OmniClass). The add-in generates an Excel review report automatically, standardizing the QA/QC process across large-scale model libraries."
                  impact={[
                    "Reduced coordination review from 7 days to 2 days",
                    "Average reduction: 71.42%",
                    "Scales across 2 TB of BIM models",
                  ]}
                  tags={["Revit API", "C#", "COBie", "OmniClass", "QA/QC", "Excel Reporting"]}
                  links={[
                    { label: "Overview", href: "#" },
                  ]}
                  images={[
                    "/projects/revisionlap/Revisionlap.png",
                    "/projects/revisionlap/Revisionlap2.png",
                    "/projects/revisionlap/Revisionlap3.png",
                  ]}
                  highlights={[
                    "Automatic geometry checks + data validation rules",
                    "Consistent, repeatable review criteria across teams",
                    "Excel report generated in one click (issues + summary)",
                  ]}
                />
                <BigProjectCard
                  icon="navis"
                  title="Navisworks Add-in — Automated Quantity Takeoff"
                  desc="Developed a Navisworks API add-in to calculate metrados reliably across the entire model, avoiding Revit’s category-only limitation."
                  impact={["Faster takeoffs", "Consistent quantification", "Reduced manual errors"]}
                  tags={["Navisworks API", "C#", "BIM", "Quantity Takeoff"]}
                  links={[
                    { label: "Overview", href: "#" },
                  ]}
                  images={[
                    "/projects/navis/Navis.png",
                    "/projects/navis/Navis2.png",
                    "/projects/navis/Navis3.png",
                  ]}
                  highlights={[
                    "Unified quantities across multiple categories and model elements",
                    "Reusable workflow for different projects and models",
                    "Export-ready outputs for reporting",
                  ]}
                />

                <BigProjectCard
                  icon="dalux"
                  title="Airport Asset Management — Dalux FM + IFC + COBie + QR"
                  desc="Implemented Dalux FM for asset management in an airport, ensuring interoperability using IFC models and COBie data. Deployed QR codes to link physical spaces to digital asset data."
                  impact={["Operational visibility", "Interoperable data", "Faster asset lookup via QR"]}
                  tags={["Dalux FM", "IFC", "COBie", "Asset Management", "QR Codes"]}
                  links={[
                    { label: "Overview", href: "#" },
                  ]}
                  images={[
                    "/projects/dalux/dalux.png",
                    "/projects/dalux/dalux2.png",
                    "/projects/dalux/dalux3.png",
                  ]}
                  highlights={[
                    "Mapped IFC + COBie to operational asset workflows",
                    "Connected physical spaces with QR-based access to asset records",
                    "Improved maintainability and handover data quality",
                  ]}
                />

                <BigProjectCard
                  icon="iot"
                  title="IoT Environmental Monitoring + BIM — Digital Twin "
                  desc="Developed IoT devices (ESP32 + sensors) to monitor environmental data in buildings and connect it to a BIM model — enabling early-stage digital twin workflows."
                  impact={["Real-time monitoring", "BIM-linked data", "Digital twin baseline"]}
                  tags={["IoT", "ESP32", "Sensors", "BIM", "Digital Twins"]}
                  links={[
                    { label: "Overview", href: "#" },
                  ]}
                  images={[
                    "/projects/iot/iot.jpg",
                    "/projects/iot/iot2.png",
                    "/projects/iot/iot3.png",
                  ]}
                  highlights={[
                    "Sensor data streamed/connected to building model context",
                    "Foundation for dashboards, alerts, and twin simulations",
                    "Designed for extensibility (additional sensors + spaces)",
                  ]}
                />
              </div>
            </div>

            {/* RESEARCH */}
            <div className="sectionBlock" id="research">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Research & Publications</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <div style={{ maxWidth: 900, margin: "16px auto 0" }}>
                <Paper
                  venue="43rd ISARC"
                  title="An automated framework to quantify exposure of informal urban settlements using UAV and Scan-to-BIM"
                  year="2026"
                  type= "Conference paper"
                  doi="In process"
                  link="https://doi.org/10.22260/ISARC2025/0194"
                  tags={["Scan-to-BIM", "Urban Digitalization", "UAV"]}
                  logo="/conferences/ISARC-2026.png"
                />

                <Paper
                  venue="42nd ISARC"
                  title="Algorithm development for automatic detection of progressive damage in tunnel cross-sectional geometry"
                  year="2025"
                  type= "Conference paper"
                  doi="10.22260/ISARC2025/0194"
                  link="https://doi.org/10.22260/ISARC2025/0194"
                  tags={["Tunnel", "Point cloud", "Open3D"]}
                  logo="/conferences/ISARC-2025.png"
                />

                <Paper
                  venue="41st ISARC"
                  title="3D reconstruction of a bridge with concrete damage classification using deep learning"
                  year="2024"
                  type= "Conference paper"
                  doi="10.22260/ISARC2024/0094"
                  link="https://doi.org/10.22260/ISARC2024/0094"
                  tags={["Deep Learning", "Damage Detection", "3D Reconstruction"]}
                  logo="/conferences/ISARC-2024.png"
                />

                <Paper
                  venue="40th ISARC"
                  title="3D Printing: An opportunity for the sustainable development of building construction"
                  year="2023"
                  type= "Conference paper"
                  doi="10.22260/ISARC2023/0096"
                  link="https://doi.org/10.22260/ISARC2023/0096"
                  tags={["3D Printing", "Sustainable Construction"]}
                  logo="/conferences/ISARC-2023.png"
                />

                <Paper
                  venue="IX CONIITI"
                  title="Robotics in building construction: Advantages and Barriers"
                  year="2023"
                  type= "Conference paper"
                  doi="10.1109/CONIITI61170.2023.10324131"
                  link="https://doi.org/10.1109/CONIITI61170.2023.10324131"
                  tags={["Robotics", "Construction", "Automation"]}
                  logo="/conferences/CONIITI.png"
                />

                <Paper
                  venue="IX CONIITI"
                  title="Virtual reality for design and site planning in construction projects: Advantages and barriers"
                  year="2023"
                  type= "Conference paper"
                  doi="10.1109/CONIITI61170.2023.10324023"
                  link="https://doi.org/10.1109/CONIITI61170.2023.10324023"
                  tags={["VR", "Planning", "AEC"]}
                  logo="/conferences/CONIITI.png"
                />              

                <Paper
                  venue="VII CONIITI"
                  title={`An Analysis of LEED Certification's Adaptation to Design and Construction of Sustainable Buildings in Peru`}
                  year="2021"
                  type= "Conference paper"
                  doi="10.1109/CONIITI53815.2021.9619628"
                  link="https://doi.org/10.1109/CONIITI53815.2021.9619628"
                  tags={["Sustainability", "LEED", "Construction"]}
                  logo="/conferences/CONIITI.png"
                />

              </div>
            </div>

            {/* TALKS & CONFERENCES */}
            <div className="sectionBlock" id="talks">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Talks & Conferences</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <p className="sectionText" style={{ maxWidth: 820, margin: "14px auto 0" }}>
                Conferences, presentations, and academic events where I’ve shared research and engineering work.
              </p>

              <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
                <ConferenceCard
                  country="Peru"
                  countryCode="pe"
                  event="COREIC 2025"
                  city="Abancay"
                  year="2025"
                  photos={[
                    "/talks/coreic2025/COREIC2025.jpg",
                    "/talks/coreic2025/COREIC1.jpg",
                    "/talks/coreic2025/COREIC20252.jpg",
                  ]}
                />
                <ConferenceCard
                  country="Peru"
                  countryCode="pe"
                  event="BIMFIC"
                  city="Lima"
                  year="2025"
                  photos={[
                    "/talks/bimfic2025/BIMFIC.jpg",
                    "/talks/bimfic2025/BIMFIC2.jpg",
                    "/talks/bimfic2025/BIMFIC3.jpg",
                  ]}
                />

                <ConferenceCard
                  country="Peru"
                  countryCode="pe"
                  event="CONEIC 2025"
                  city="Huaraz"
                  year="2025"
                  photos={[
                    "/talks/coneic2025/CONEIC.jpg",
                    "/talks/coneic2025/CONEIC2.jpg",
                    "/talks/coneic2025/CONEIC3.jpg",
                  ]}
                />

                <ConferenceCard
                  country="Peru"
                  countryCode="pe"
                  event="FOREIC 2025"
                  city="Lima"
                  year="2025"
                  photos={[
                    "/talks/foreic2025/FOREIC.jpg",
                    "/talks/foreic2025/FOREIC2.jpg",
                    "/talks/foreic2025/FOREIC3.jpg",
                  ]}
                />

                <ConferenceCard
                  country="France"
                  countryCode="fr"
                  event="ISARC 2024"
                  city="Lille"
                  year="2024"
                  photos={[
                    "/talks/isarc2024/ISARC2024.jpg",
                    "/talks/isarc2024/ISARC20242.jpg",
                    "/talks/isarc2024/ISARC20243.jpg",
                  ]}
                />

                <ConferenceCard
                  country="India"
                  countryCode="in"
                  event="ISARC 2023"
                  city="Chennai"
                  year="2023"
                  photos={[
                    "/talks/isarc2023/ISARC2023.jpeg",
                    "/talks/isarc2023/ISARC20232.jpeg",
                    "/talks/isarc2023/ISARC20233.jpeg",
                  ]}
                />
              </div>
            </div>

            {/* RECOMMENDATIONS */}
            <div className="sectionBlock" id="recommendations">
              <div style={{ textAlign: "center" }}>
                <h2 className="sectionTitle">Recommendations</h2>
                <div className="sectionLine" style={{ margin: "10px auto 0" }} />
              </div>

              <p className="sectionText" style={{ maxWidth: 820, margin: "14px auto 0" }}>
                Testimonials from colleagues and collaborators.
              </p>

              <div
                style={{
                  marginTop: 18,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 14,
                }}
              >
                <RecommendationCard
                  name="Full Name"
                  role="Role • Company"
                  photo="/recommendations/john.jpg"
                  text="Write here the recommendation paragraph you received..."
                  linkedin="https://www.linkedin.com/in/username/"
                />

                <RecommendationCard
                  name="Full Name"
                  role="Role • Company"
                  photo="/recommendations/maria.jpg"
                  text="Write here the recommendation paragraph you received..."
                />

                <RecommendationCard
                  name="Full Name"
                  role="Role • Company"
                  photo="/recommendations/ana.jpg"
                  text="Write here the recommendation paragraph you received..."
                />
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  );
}


function Paper({
  venue,
  title,
  year,
  type,
  doi,
  link,
  tags,
  logo,
}: {
  venue: string;
  title: string;
  year: string;
  type: string;
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
        background: "var(--bg)", // ✅ fondo blanco
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
              • {type} • {year}
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


import {
  Code2,
  Cpu,
  Layers3,
  Boxes,
  Package,
  Cloud,
  PenLine,
  FileText,
  Presentation,
  Braces,
  Workflow,
} from "lucide-react";

type SkillIcon =
  | "python"
  | "revit"
  | "node"
  | "bim"
  | "cloud"
  | "twin"
  | "iot"
  | "write"
  | "paper"
  | "talk";

function iconForSkill(name: SkillIcon) {
  // “logo-like” icon mapping (clean and consistent)
  switch (name) {
    case "python":
      return <Braces size={16} />;
    case "revit":
      return <Package size={16} />;
    case "node":
      return <Code2 size={16} />;
    case "bim":
      return <Layers3 size={16} />;
    case "cloud":
      return <Cloud size={16} />;
    case "twin":
      return <Boxes size={16} />;
    case "iot":
      return <Cpu size={16} />;
    case "write":
      return <PenLine size={16} />;
    case "paper":
      return <FileText size={16} />;
    case "talk":
      return <Presentation size={16} />;
    default:
      return <Workflow size={16} />;
  }
}

function ExpertCard({
  title,
  items,
}: {
  title: string;
  items: { icon: SkillIcon; label: string; hint?: string }[];
}) {
  return (
    <div className="card" style={{ padding: 16, background: "var(--bg)" }}>
      <div style={{ fontWeight: 900, marginBottom: 12 }}>{title}</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((it) => (
          <SkillChip key={it.label} icon={it.icon} label={it.label} hint={it.hint} />
        ))}
      </div>
    </div>
  );
}

function SkillChip({
  icon,
  label,
  hint,
}: {
  icon: SkillIcon;
  label: string;
  hint?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        padding: "10px 12px",
        borderRadius: 14,
        border: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      {/* “logo bubble” */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 12,
          border: "1px solid var(--border)",
          background: "var(--surface)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {iconForSkill(icon)}
      </div>

      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 850, lineHeight: 1.2 }}>{label}</div>
        {hint ? (
          <div
            style={{
              fontSize: 13,
              color: "var(--muted)",
              marginTop: 4,
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={hint}
          >
            {hint}
          </div>
        ) : null}
      </div>
    </div>
  );
}


import { QrCode, Ruler, ScanLine } from "lucide-react";

type ProjectIcon = "navis" | "dalux" | "scan2bim" | "iot" | "revitqa";
import { CheckCircle2 } from "lucide-react";
function iconForProject(kind: ProjectIcon) {
  switch (kind) {
    case "navis":
      return <Ruler size={18} />;
    case "dalux":
      return <QrCode size={18} />;
    case "scan2bim":
      return <ScanLine size={18} />;
    case "iot":
      return <Cpu size={18} />;
    case "revitqa":
      return <CheckCircle2 size={18} />; // ✅ new
    default:
      return <Boxes size={18} />;
  }
}
function BigProjectCard({
  icon,
  title,
  desc,
  impact,
  tags,
  links,
  highlights,
  images,
}: {
  icon: ProjectIcon;
  title: string;
  desc: string;
  impact: string[];
  tags: string[];
  links?: { label: string; href: string }[];
  highlights?: string[];
  images?: string[];
}) {
  return (
    <div className="card" style={{ padding: 18, background: "var(--bg)" }}>
      
      {/* HEADER */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 12,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {iconForProject(icon)}
        </div>
        <div style={{ fontWeight: 950, fontSize: 16 }}>{title}</div>
      </div>

      {/* DESCRIPTION */}
      <div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.75 }}>
        {desc}
      </div>

      {/* HIGHLIGHTS */}
      {highlights?.length ? (
        <ul style={{ marginTop: 12, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.85 }}>
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}

      {/* IMAGES (NOW ABOVE IMPACT) */}
      {images?.length ? (
        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {images.map((img) => (
            <div
              key={img}
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "#ffffff",
              }}
            >
              <Image
                src={img}
                alt="Project visual"
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      ) : null}

      {/* IMPACT SECTION (NOW BELOW IMAGES) */}
      <div
        style={{
          marginTop: 20,
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 14,
          background: "var(--surface)",
        }}
      >
        <div style={{ fontWeight: 900, marginBottom: 10 }}>Impact</div>

        <div style={{ display: "grid", gap: 8 }}>
          {impact.map((x) => (
            <div
              key={x}
              style={{
                padding: "8px 10px",
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--surface)",
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              {x}
            </div>
          ))}
        </div>

        {links?.length ? (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="btn">
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      {/* TAGS */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ConferenceCard({
  country,
  countryCode,
  event,
  city,
  year,
  photos,
}: {
  country: string;
  countryCode: string;
  event: string;
  city?: string;
  year: string;
  photos: string[];
}) {
  return (
    <div className="card" style={{ padding: 18, background: "var(--bg)" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 14,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label={country}
            title={country}
          >
            <Image
              src={`/flags/4x3/${countryCode}.svg`}
              alt={country}
              width={28}
              height={20}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div>
            <div style={{ fontWeight: 950, fontSize: 16 }}>
              {event}
            </div>
            <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 4 }}>
              {country} {city ? `• ${city}` : ""}
            </div>
          </div>
        </div>

        <div style={{ color: "var(--muted)", fontWeight: 800 }}>
          {year}
        </div>
      </div>

      {/* Photos */}
      <div
        style={{
          marginTop: 14,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        {photos.slice(0, 3).map((src) => (
          <div
            key={src}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "var(--surface)",
            }}
          >
            <Image
              src={src}
              alt={`${event} photo`}
              width={900}
              height={600}
              style={{ width: "100%", height: 200, objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function RecommendationCard({
  name,
  role,
  photo,
  text,
  linkedin,
}: {
  name: string;
  role: string;
  photo: string;
  text: string;
  linkedin?: string;
}) {
  return (
    <div className="card" style={{ padding: 18, background: "var(--bg)" }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            flexShrink: 0,
          }}
        >
          <Image
            src={photo}
            alt={name}
            width={120}
            height={120}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 950, lineHeight: 1.2 }}>{name}</div>
          <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 4 }}>
            {role}
          </div>
        </div>

        {linkedin ? (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{ marginLeft: "auto", fontSize: 13, padding: "8px 12px" }}
          >
            LinkedIn
          </a>
        ) : null}
      </div>

      <p
        style={{
          marginTop: 14,
          marginBottom: 0,
          color: "var(--muted)",
          lineHeight: 1.8,
          fontSize: 14,
        }}
      >
        “{text}”
      </p>
    </div>
  );
}



