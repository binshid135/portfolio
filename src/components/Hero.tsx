import Image from "next/image";

const stats = [
  { value: "5+", label: "Years Experience", icon: "◯" },
  { value: "30+", label: "Projects Completed", icon: "▣" },
  { value: "100%", label: "Client Satisfaction", icon: "✧" },
];

export default function Hero() {
  return <section id="about" className="hero-section">
    <div className="hero-copy">
      <p className="hero-pill"><span />Freelance Digital Expert</p>
      <h1 className="hero-title">I Build Digital<br />Solutions That<br /><em>Drive Results.</em></h1>
      <p className="hero-description">I help businesses and startups grow online with custom websites, software solutions and data-driven digital marketing.</p>
      <div className="hero-actions"><a href="#projects" className="button button-primary">View My Work <b>→</b></a><a href="mailto:ahmedbinshid@gmail.com" className="button button-secondary">Let&apos;s Talk <b>◯</b></a></div>
      <div className="hero-stats">{stats.map(stat => <div className="hero-stat" key={stat.label}><span className="stat-icon">{stat.icon}</span><div><strong>{stat.value}</strong><small>{stat.label}</small></div></div>)}</div>
    </div>
    <div className="hero-visual" aria-label="Developer workspace">
      <div className="hero-glow" />
      <div className="workspace-art"><Image src="/hero2portfolio.png" alt="Developer working at a desk with laptop and monitor" width={1536} height={1024} priority sizes="(max-width: 900px) 100vw, 62vw" /></div>
    </div>
  </section>;
}
