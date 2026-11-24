import Image from "next/image";
import { FileText } from "lucide-react";
import Gallery from "./Gallery";
import Reveal from "./Reveal";
import { publications, talks } from "../data/portfolio";

export default function Talks() {
  return (
    <div className="talkGrid">
      {talks.map((t, i) => {
        const paper = t.publicationId ? publications.find((p) => p.id === t.publicationId) : undefined;
        return (
          <Reveal key={t.id} delay={0.04 * (i % 3)} className="card cardHover talk">
            <Gallery images={t.photos} alt={`${t.event}, ${t.city}`} cover sizes="(max-width: 700px) 100vw, 360px" />
            <div className="talkBody">
              <div className="talkHead">
                <h3 className="talkEvent">{t.event}</h3>
                <span className={`badge${t.scope === "International" ? "" : " badgeGreen"}`}>{t.scope}</span>
              </div>
              <div className="talkPlace">
                <Image src={`/flags/4x3/${t.countryCode}.svg`} alt="" width={20} height={15} />
                {t.city}, {t.country} · {t.year}
              </div>
              {paper ? (
                <a href="#research" className="talkLink">
                  <FileText size={14} aria-hidden /> Related paper: {paper.title.slice(0, 48)}…
                </a>
              ) : null}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
