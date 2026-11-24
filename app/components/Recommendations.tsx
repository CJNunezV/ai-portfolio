"use client";

import Image from "next/image";
import { useState } from "react";
import { Linkedin, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { recommendations, type Recommendation } from "../data/portfolio";

const LONG = 320; // characters before "Read more" kicks in

export default function Recommendations() {
  return (
    <div className="recGrid">
      {recommendations.map((r, i) => (
        <Reveal key={r.name} delay={0.06 * i}>
          <RecommendationCard rec={r} />
        </Reveal>
      ))}
    </div>
  );
}

function RecommendationCard({ rec: r }: { rec: Recommendation }) {
  const [expanded, setExpanded] = useState(false);
  const long = r.text.length > LONG;

  return (
    <figure className="card rec" style={{ margin: 0 }}>
      <Quote size={40} className="recQuoteIcon" aria-hidden />
      <figcaption className="recHead">
        <div className="recPhoto">
          <Image src={r.photo} alt="" width={104} height={104} />
        </div>
        <div>
          <div className="recName">
            {r.linkedin ? (
              <a href={r.linkedin} target="_blank" rel="noreferrer">
                {r.name} <Linkedin size={13} aria-label="LinkedIn profile" style={{ verticalAlign: -1 }} />
              </a>
            ) : (
              r.name
            )}
          </div>
          <div className="recRole">{r.role}</div>
        </div>
      </figcaption>
      <blockquote style={{ margin: 0 }}>
        <p className={`recText${long && !expanded ? " clamped" : ""}`}>“{r.text}”</p>
      </blockquote>
      {long ? (
        <button type="button" className="detailsToggle" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded}>
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </figure>
  );
}
