const bubbles = [
  { title: "Continuously\nLearning", desc: "Through adaptive\nmachine learning models" },
  { title: "Natively\nEmbedded", desc: "Within operational &\ndecision-making workflows" },
  { title: "Human-in-\nthe-Loop", desc: "Augmenting judgment\nrather than replacing it" },
  { title: "Future-Ready\nArchitecture", desc: "For long-term scalability,\nresilience, and evolution" },
];

export default function VisionSection() {
  return (
    <section className="section" id="vision">
      <div className="container">
        <h2 className="sectionTitle centered">
          our vision: Building the future of enterprise technology
        </h2>

        <p className="muted centered">
          The future of enterprise technology isn't just digital — it's{" "}
          <span className="accentText">INTELLIGENT, ADAPTIVE, &amp; HUMAN-AWARE.</span>
        </p>

        <div className="bubbleRow">
          {bubbles.map((b) => (
            <div className="bubble" key={b.title}>
              <div className="bubbleTitle">{b.title}</div>
              <div className="bubbleDesc">{b.desc}</div>
            </div>
          ))}
        </div>

        <p className="muted centered" style={{ marginTop: 18 }}>
          We focus on future-ready digital infrastructure - technology that compounds in value instead
          of becoming obsolete.
        </p>
      </div>
    </section>
  );
}
