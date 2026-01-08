function Check() {
  return (
    <span className="check" aria-hidden="true">
      ✓
    </span>
  );
}

export default function HelpSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle centered">How we help businesses operate smarter</h2>

        <div className="wideCard">
          <div className="wideLeft">
            <div className="wideKicker">Custom Software Development</div>
            <p className="muted" style={{ marginTop: 8 }}>
              Your business doesn't fit into generic software so your systems shouldn't either.
            </p>

            <ul className="checkList">
              <li><Check /> Internal management platforms</li>
              <li><Check /> Operational Dashboards</li>
              <li><Check /> Inventory &amp; Order Systems</li>
              <li><Check /> Secure role-based access</li>
              <li><Check /> Scalable backend architecture</li>
            </ul>
          </div>

          <div className="wideRight" aria-hidden="true">
            <button className="navPill">‹</button>
            <button className="navPill">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
