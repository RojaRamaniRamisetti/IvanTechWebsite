function Icon({ type }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };
  const stroke = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

  if (type === "brain") {
    return (
      <svg {...common}>
        <path {...stroke} d="M9 5a3 3 0 0 1 6 0v1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3v2a3 3 0 0 1-6 0" />
        <path {...stroke} d="M9 6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3v2" />
      </svg>
    );
  }
  if (type === "chart") {
    return (
      <svg {...common}>
        <path {...stroke} d="M4 19V5" />
        <path {...stroke} d="M4 19h16" />
        <path {...stroke} d="M8 15v-5" />
        <path {...stroke} d="M12 15V8" />
        <path {...stroke} d="M16 15v-3" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path {...stroke} d="M12 2l2.2 4.6 5 .7-3.6 3.6.8 5-4.4-2.3-4.4 2.3.8-5L4.8 7.3l5-.7L12 2z" />
    </svg>
  );
}

const cards = [
  {
    icon: "brain",
    title: "Build intelligent systems",
    desc: "Software that learns, adapts, and improves over time.",
  },
  {
    icon: "chart",
    title: "Connect data to decisions",
    desc: "Turning raw operational data into clear insights.",
  },
  {
    icon: "auto",
    title: "Automate with purpose",
    desc: "Removing repetitive work while keeping humans in control.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="sectionTitle centered">What we do at Ivan Tech?</h2>

        <div className="cardGrid3">
          {cards.map((c) => (
            <div className="card" key={c.title}>
              <div className="cardIcon">
                <Icon type={c.icon} />
              </div>
              <div>
                <div className="cardTitle">{c.title}</div>
                <div className="cardDesc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
