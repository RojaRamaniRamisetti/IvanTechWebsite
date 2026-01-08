import robotImg from "../assets/robot-face.png";

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="sectionTitle centered">Let’s build technology that grows with you</h2>

        <div className="contactCard">
          <div className="contactLeft">
            <div className="contactTitle">Let’s connect</div>
            <div className="contactSub">
              Looking to improve operational efficiency, gain better insight from your data,
              or implement AI-driven automation?
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="row2">
                <input className="input" placeholder="First Name" />
                <input className="input" placeholder="Last Name" />
              </div>
              <input className="input" placeholder="Email" />
              <input className="input" placeholder="Phone Number" />
              <textarea className="input textarea" placeholder="Message" />
              <button className="submitBtn" type="submit">Submit</button>
            </form>
          </div>

          <div className="contactRight" aria-hidden="true">
            <img className="robotImg" src={robotImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
