import "./welcome.css";

function Welcome() {
  return (
    <section className="welcome-section">
      <div className="container text-center">
        <h2 className="section-title">Welcome to the Divine Journey</h2>
        <p className="section-subtitle">
          A sacred path of wisdom, devotion, and service for a meaningful life.
        </p>
        <div className="row mt-5">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-book"></i>
              </div>
              <h4 className="feature-title">Vedic Wisdom</h4>
              <p className="feature-text">Knowledge of sacred scriptures.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4 className="feature-title">478+ Kathas</h4>
              <p className="feature-text">Spiritual journeys across India.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-heart"></i>
              </div>
              <h4 className="feature-title">Divine Service</h4>
              <p className="feature-text">Serving humanity through devotion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
