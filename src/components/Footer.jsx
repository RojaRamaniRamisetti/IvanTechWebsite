export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerTop">
        <div>
          <div className="footerBrand">
            Ivan<span className="brandAccent">Tech</span>
          </div>
          <div className="footerText">
            Technology that evolves<br />with your business
          </div>
        </div>

        <div>
          <div className="footerHead">Explore</div>
          <a className="footerLink" href="#services">Resources</a>
          <a className="footerLink" href="#why">Blog</a>
          <a className="footerLink" href="#contact">Documents</a>
        </div>

        <div>
          <div className="footerHead">Menu</div>
          <a className="footerLink" href="#home">Home</a>
          <a className="footerLink" href="#vision">About</a>
          <a className="footerLink" href="#contact">Contact</a>
        </div>

        <div>
          <div className="footerHead">OFFICE LOCATION</div>
          <div className="footerText">
            Address Line Lorem Ipsum<br />
            Dolore Sit Amet
          </div>
        </div>
      </div>

      <div className="container footerBottom">
        <div className="footerSmall">
          <a href="#home" className="footerSmallLink">Terms</a>
          <a href="#home" className="footerSmallLink">Privacy</a>
          <a href="#home" className="footerSmallLink">Cookies</a>
        </div>

        <div className="footerSmall">© 2025 By Ivantech, All Rights Reserved.</div>

        <div className="footerIcons" aria-label="Social">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </footer>
  );
}
