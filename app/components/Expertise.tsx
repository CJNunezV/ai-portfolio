import Reveal from "./Reveal";
import { SkillGlyph } from "./icons";
import { expertise } from "../data/portfolio";

export default function Expertise() {
  return (
    <div className="expertGrid">
      {expertise.map((group, i) => (
        <Reveal key={group.title} delay={0.06 * i} className="card expertCol">
          <h3 className="expertColTitle">{group.title}</h3>
          {group.items.map((it) => (
            <div key={it.label} className="skill">
              <div className="iconBubble">
                <SkillGlyph name={it.icon} />
              </div>
              <div>
                <div className="skillLabel">{it.label}</div>
                <div className="tagRow">
                  {it.tools.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      ))}
    </div>
  );
}
