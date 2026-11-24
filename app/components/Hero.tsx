import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { SocialGlyph } from "./icons";
import { profile, projects, publications, talks } from "../data/portfolio";

export default function Hero() {
  const countries = new Set(talks.map((t) => t.country)).size;
  const stats = [
    { value: publications.length, label: "Peer-reviewed papers" },
    { value: publications.filter((p) => p.venue.startsWith("ISARC")).length, label: "ISARC papers" },
    { value: talks.length, label: "Conference talks" },
    { value: projects.length, label: "Featured projects" },
  ];

  return (
    <section id="top" className="hero">
      <div className="heroGlow" aria-hidden />
      <div className="container">
        <div className="heroGrid">
          <Reveal>
            <div className="heroEyebrow">
              {profile.focus.map((f) => (
                <span key={f} className="badge">
                  {f}
                </span>
              ))}
            </div>
            <h1 className="heroTitle">{profile.name}</h1>
            <p className="heroRole">{profile.role}</p>
            <p className="heroTagline">{profile.tagline}</p>

            <div className="heroCtas">
              <a href="#projects" className="btn btnPrimary">
                View projects <ArrowRight size={16} aria-hidden />
              </a>
              <a href={`mailto:${profile.email}`} className="btn">
                <Mail size={16} aria-hidden /> Get in touch
              </a>
              {profile.cv ? (
                <a href={profile.cv} className="btn" download>
                  <Download size={16} aria-hidden /> Download CV
                </a>
              ) : null}
            </div>

            <div className="heroSocials">
              {profile.socials.map((s) => (
                <a
                  key={s.kind}
                  className="iconBtn"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  <SocialGlyph kind={s.kind} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="avatarWrap">
              <Image
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                width={520}
                height={520}
                sizes="(max-width: 820px) 170px, 260px"
                priority
              />
            </div>
          </Reveal>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i} className="card stat">
              <div className="statValue">{s.value}</div>
              <div className="statLabel">{s.label}</div>
            </Reveal>
          ))}
        </div>
        <p className="statLabel" style={{ textAlign: "center", marginTop: 10 }}>
          Speaker in {countries} countries · 3+ years building BIM and point cloud tools
        </p>
      </div>
    </section>
  );
}
