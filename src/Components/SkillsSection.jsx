import React from "react";
import "./SkillsSection.css";

const skills = [
  { icon: "x", title: "HTML", meta: "Semantic · Structure" },
  { icon: "x", title: "CSS", meta: "Flexbox · Grid" },
  { icon: "x", title: "JavaScript", meta: "ES6 · DOM" },
  { icon: "x", title: "React", meta: "Hooks · SPA" },
];

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <div>
          <p className="kicker">Capabilities</p>
          <h2>Skills</h2>
        </div>
        <div className="muted">Tools & frameworks I use</div>
      </div>

      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.title} className="skill-card">
            <div className="skill-icon">{s.icon}</div>
            <h5>{s.title}</h5>
            <p className="muted">{s.meta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
