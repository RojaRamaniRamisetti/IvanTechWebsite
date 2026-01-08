export default function ProblemSection() {
  return (
    <section className="container" id="why">
      <div className="container">
        <div className="kicker">THE PROBLEM</div>

        <h2 className="sectionTitle">
          Why most business <span className="accent">systems</span> fail over time?
        </h2>

        <ul className="bulletList">
          <li>Businesses grow.</li>
          <li>Data explodes.</li>
          <li>Processes evolve.</li>
          <li><b>But most software stays the same.</b></li>
        </ul>

        <p className="muted">
          Outdated systems create silo, slow decisions, and force teams to work around technology
          instead of with it.
        </p>

        <p className="accentText">Ivan Tech exists to change that.</p>
      </div>
    </section>
  );
}
