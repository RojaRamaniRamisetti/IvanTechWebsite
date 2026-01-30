import "./HeroHeader.css";
import logoImg from "../assets/logo.png";        // your logo
import heroImg from "../assets/Group 11.png";
export default function HeaderSection() {

  return (<section className="ih-hero" id="home">
      <div className="ih-bg" aria-hidden="true" />

      <header className="ih-nav">
        <div className="ih-navInner">
          <div className="ih-brand">
            <div className="ih-logoBox">
              <img className="ih-logo" src={logoImg} alt="IvanTech logo" />
            </div>
            <span className="ih-brandText">
              Ivan<span>Tech</span>
            </span>
          </div>

          <nav className="ih-links" aria-label="Primary navigation">
            <a className="ih-link is-active" href="#home">Home</a>
            <a className="ih-link" href="#vision">Vision</a>
            <a className="ih-link" href="#services">Services</a>
            <a className="ih-link" href="#why">Why Ivan Tech</a>
            <a className="ih-link ih-linkCta" href="#contact">Contact us</a>
          </nav>
        </div>
      </header>

      <div className="ih-container">
        <div className="ih-heroCard">
          <div className="ih-grid">
            <div className="ih-left">
              <h1 className="ih-title">
                Technology that <span>evolves</span>
                <br />
                with your business
              </h1>

              <p className="ih-sub">
                At Ivan Tech, We build intelligent software, data platforms, and AI-driven systems designed
                to grow alongside businesses - not just for today, but for decades to come.
              </p>

              <a className="ih-btn" href="#contact">Get Started</a>
            </div>

            <div className="ih-right" aria-hidden="true">
              <div className="ih-heroArt">
                <img className="ih-heroImg" src={heroImg} alt="" />
                <span className="ih-glow" />
                <span className="ih-streaks" />
                <span className="ih-dots" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
