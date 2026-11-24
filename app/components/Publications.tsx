"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import CopyButton from "./CopyButton";
import Reveal from "./Reveal";
import { publications, type Publication } from "../data/portfolio";

const FILTERS = ["All", "ISARC", "IEEE"] as const;
type Filter = (typeof FILTERS)[number];

const matches = (p: Publication, f: Filter) =>
  f === "All" || (f === "ISARC" ? p.venue.startsWith("ISARC") : p.venue.startsWith("IEEE"));

export default function Publications() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = publications.filter((p) => matches(p, filter));
  const years = Array.from(new Set(shown.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <>
      <div className="chips" role="group" aria-label="Filter publications by venue">
        {FILTERS.map((f) => (
          <button key={f} type="button" className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
            <span className="chipCount">{publications.filter((p) => matches(p, f)).length}</span>
          </button>
        ))}
      </div>

      <div className="pubList">
        {years.map((year) => (
          <div key={year} className="pubYear">
            <div className="pubYearLabel">{year}</div>
            <div className="pubItems">
              {shown
                .filter((p) => p.year === year)
                .map((p) => (
                  <Reveal key={p.id}>
                    <PublicationCard pub={p} />
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function PublicationCard({ pub: p }: { pub: Publication }) {
  const url = p.doi ? `https://doi.org/${p.doi}` : null;
  return (
    <article className="card cardHover pub">
      <div className="pubLogo">
        <Image src={p.logo} alt={`${p.venue} logo`} width={48} height={48} />
      </div>
      <div>
        <div className="pubVenue">
          <strong>{p.venue}</strong> · {p.venueFull}
        </div>
        <h3 className="pubTitle">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </h3>
        <div className="pubMeta">
          {p.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
          <div className="pubActions">
            {url && p.doi ? (
              <>
                <CopyButton value={p.doi} label="Copy DOI" />
                <a href={url} target="_blank" rel="noreferrer" className="btn btnSm">
                  Read paper <ExternalLink size={14} aria-hidden />
                </a>
              </>
            ) : (
              <span className="badge badgeGreen">Accepted · DOI pending</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
