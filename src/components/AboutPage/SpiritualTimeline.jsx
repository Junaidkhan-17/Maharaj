const milestones = [
  {
    title: "Sacred Birth",
    label: "1977",
    text: "Born in Mulana, Tehri Garhwal, Uttarakhand.",
    icon: "bi-geo-alt",
  },
  {
    title: "Vedic Education",
    label: "Early Years",
    text: "Completed Shastri and Acharya titles from Jayaram Sanskrit Vidyalaya.",
    icon: "bi-book",
  },
  {
    title: "First Katha",
    label: "Age 14",
    text: "Delivered first Bhagwat Katha after attaining siddhi in mantras.",
    icon: "bi-stars",
  },
  {
    title: "Spiritual Legacy",
    label: "Present",
    text: "Completed over 478 Shrimad Bhagwat Kathas across India.",
    icon: "bi-award",
  },
];

function SpiritualTimeline() {
  return (
    <section className="about-timeline-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="about-eyebrow">Path Of Service</p>
          <h2 className="about-section-title">Spiritual Journey Timeline</h2>
        </div>

        <div className="timeline-grid reveal-up">
          {milestones.map((item, index) => (
            <article className="timeline-card" key={item.title}>
              <div className="timeline-step">0{index + 1}</div>
              <div className="timeline-icon">
                <i className={`bi ${item.icon}`} />
              </div>
              <div className="timeline-content">
                <span className="timeline-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpiritualTimeline;
