import Reveal from "./Reveal";

export default function Section({
  id,
  kicker,
  title,
  intro,
  alt = false,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`section${alt ? " sectionAlt" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="sectionHead">
          <div className="sectionKicker">{kicker}</div>
          <h2 id={`${id}-title`} className="sectionTitle">
            {title}
          </h2>
          {intro ? <p className="sectionIntro">{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
