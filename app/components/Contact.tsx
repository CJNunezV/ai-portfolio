import { Mail } from "lucide-react";
import CopyButton from "./CopyButton";
import Reveal from "./Reveal";
import { SocialGlyph } from "./icons";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="card contact">
          <div className="heroGlow" aria-hidden />
          <div className="sectionKicker">Contact</div>
          <h2 id="contact-title" className="contactTitle" style={{ marginTop: 6 }}>
            Let&apos;s build something together
          </h2>
          <p className="contactText">
            Open to research collaborations, academic projects, and engineering work in BIM automation, Scan-to-BIM,
            and digital twins.
          </p>
          <div className="contactActions">
            <a href={`mailto:${profile.email}`} className="btn btnPrimary">
              <Mail size={16} aria-hidden /> {profile.email}
            </a>
            <CopyButton value={profile.email} label="Copy email" className="btn" />
          </div>
          <div className="contactActions" style={{ marginTop: 14 }}>
            {profile.socials.map((s) => (
              <a key={s.kind} href={s.href} target="_blank" rel="noreferrer" className="btn btnSm">
                <SocialGlyph kind={s.kind} size={15} /> {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
