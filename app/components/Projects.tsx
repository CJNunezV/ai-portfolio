"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, ChevronDown, ExternalLink } from "lucide-react";
import Gallery from "./Gallery";
import { ProjectGlyph } from "./icons";
import { projects, type Project, type ProjectCategory } from "../data/portfolio";

const ALL = "All";

export default function Projects() {
  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))] as const;
  const [filter, setFilter] = useState<ProjectCategory | typeof ALL>(ALL);
  const shown = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="chips" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className="chip"
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
            <span className="chipCount">
              {c === ALL ? projects.length : projects.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="projectGrid">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="card cardHover project"
              aria-labelledby={`${p.id}-title`}
            >
              <ProjectCard project={p} />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div className="projectHead">
          <div className="iconBubble">
            <ProjectGlyph name={p.icon} />
          </div>
          <div>
            <h3 id={`${p.id}-title`} className="projectTitle">
              {p.title}
            </h3>
            <div className="projectSub">{p.subtitle}</div>
          </div>
        </div>

        <p className="projectSummary">{p.summary}</p>

        {p.metric ? (
          <div className="metric">
            <div className="metricValue">{p.metric.value}</div>
            <div className="metricLabel">{p.metric.label}</div>
          </div>
        ) : null}

        <ul className="impactList">
          {p.impact.map((x) => (
            <li key={x}>
              <CheckCircle2 size={16} aria-hidden /> {x}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="detailsToggle"
          aria-expanded={open}
          aria-controls={`${p.id}-details`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Hide details" : "How it works"} <ChevronDown size={16} aria-hidden />
        </button>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.ul
              id={`${p.id}-details`}
              className="highlights"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{ overflow: "hidden" }}
            >
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>

        <div className="projectFoot tagRow">
          {p.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {p.links?.length ? (
          <div className="tagRow" style={{ marginTop: 12 }}>
            {p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btnSm">
                {l.label} <ExternalLink size={14} aria-hidden />
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <Gallery images={p.images} alt={p.title} />
    </>
  );
}
