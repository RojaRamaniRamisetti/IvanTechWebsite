function MiniIcon({ kind }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };
  const stroke = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

  if (kind === "target") return <svg {...common}><path {...stroke} d="M12 2v3" /><path {...stroke} d="M12 19v3" /><path {...stroke} d="M2 12h3" /><path {...stroke} d="M19 12h3" /><path {...stroke} d="M7 12a5 5 0 0 1 10 0a5 5 0 0 1-10 0Z" /></svg>;
  if (kind === "human") return <svg {...common}><path {...stroke} d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Z" /><path {...stroke} d="M4 22a8 8 0 0 1 16 0" /></svg>;
  return <svg {...common}><path {...stroke} d="M4 4h16v16H4z" /><path {...stroke} d="M8 8h8" /><path {...stroke} d="M8 12h8" /><path {...stroke} d="M8 16h6" /></svg>;
}

const items = [
  {
    icon: "target",
    title: "Operational Intelligence",
    desc: "Data-driven insights embedded into everyday operations.",
  },
  {
    icon: "human",
    title: "Human-Centric AI",
    desc: "AI designed to enhance expertise - not replace it.",
  },
  {
    icon: "doc",
    title: "Embedded Industry Knowledge",
    desc: "Technology informed by real operational understanding, not theory alone.",
  },
];

export default function ExpectSection() {
  return (
    <section className="section">
      <div className="container">
        <h3 className="smallTitle centered">what you can expect from us</h3>

        <div className="miniGrid3">
          {items.map((it) => (
            <div className="miniCard" key={it.title}>
              <div className="miniIcon">
                <MiniIcon kind={it.icon} />
              </div>
              <div className="miniTitle">{it.title}</div>
              <div className="miniDesc">{it.desc}</div>
            </div>
          ))}
        </div>

        <p className="centered muted" style={{ marginTop: 26 }}>
          We don't just build software. We build systems that{" "}
          <span className="accentText">THINK, ADAPT, &amp; SCALE.</span>
        </p>
      </div>
    </section>
  );
}
