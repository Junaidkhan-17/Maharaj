import webdocklogo from "../../assets/images/webdocklogo.png";

function Footer() {
  return (
    <footer className="about-footer">
      <div className="container text-center">
        <div className="about-hero-divider footer-divider" aria-hidden="true">
          <span />
          <i className="bi bi-star-fill" />
          <span />
        </div>

        <p className="footer-sponsor">
          Sponsored by <strong>ATULYA KUMAR PANDEY</strong>{" "}
          <span aria-hidden="true">♥</span>
        </p>
        <p className="footer-copy">© 2026 All Rights Reserved</p>
      </div>
      <div className="logos">
        <h4>Created By</h4>
        <img src={webdocklogo} alt="webdocklogo" />
      </div>
    </footer>
  );
}

export default Footer;
