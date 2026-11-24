import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Reveal from "./components/Reveal";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Talks from "./components/Talks";
import Expertise from "./components/Expertise";
import Recommendations from "./components/Recommendations";
import Contact, { Footer } from "./components/Contact";
import BackToTop from "./components/BackToTop";
import { about, profile, publications } from "./data/portfolio";

export default function Page() {
  // Structured data so search engines understand who this page is about.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    sameAs: profile.socials.map((s) => s.href),
    knowsAbout: profile.focus,
  };

  return (
    <>
      <a href="#main" className="skipLink">
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main id="main">
        <Hero />

        <Section id="about" kicker="About" title="Engineering meets computation" alt>
          <Reveal className="aboutText">
            {about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>
        </Section>

        <Section
          id="projects"
          kicker="Selected work"
          title="Projects"
          intro="Tools and systems I've built for point clouds, BIM automation, and digital twins. Click any image to enlarge it."
        >
          <Projects />
        </Section>

        <Section
          id="research"
          kicker="Research"
          title="Publications"
          intro={`${publications.length} peer-reviewed conference papers on automation, robotics, and digital methods in construction.`}
          alt
        >
          <Publications />
        </Section>

        <Section
          id="talks"
          kicker="Speaking"
          title="Talks & Conferences"
          intro="International symposia and national engineering congresses where I've presented research and engineering work."
        >
          <Talks />
        </Section>

        <Section id="expertise" kicker="Toolbox" title="Expertise" alt>
          <Expertise />
        </Section>

        <Section
          id="recommendations"
          kicker="Testimonials"
          title="Recommendations"
          intro="What professors and fellow researchers say about working with me."
        >
          <Recommendations />
        </Section>

        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
