import sir1 from "../../assets/images/sir1.png";

function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-xl-10">
            <p className="about-eyebrow">Sacred Biography</p>
            <h1 className="about-hero-title">The Spiritual Journey</h1>
            <p className="about-hero-subtitle">
              A life rooted in devotion, Vedic wisdom, and the timeless mission of guiding seekers
              toward dharma through Shrimad Bhagwat Katha.
            </p>

            <div className="about-hero-divider" aria-hidden="true">
              <span />
              <i className="bi bi-flower1" />
              <span />
            </div>

            <div className="about-portrait-shell mx-auto reveal-up">
              <img
                src={sir1}
                alt="Shri Ganesh Shastri Ji Maharaj portrait"
                loading="eager"
                style={{ objectPosition: "center 74%" }}
              />
            </div>

            <p className="about-intro-text mx-auto">
              Shri Ganesh Shastri Ji Maharaj is a revered spiritual guide whose journey from the
              Himalayas to sacred kathas across India reflects unwavering faith, discipline, and
              compassion for society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;



