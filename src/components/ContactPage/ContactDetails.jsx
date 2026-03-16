const contactCards = [
  {
    icon: "bi-telephone-fill",
    title: "Call & Whatsapp",
    detail: "+919930375277",
    hint: "Available 24 Hours",
    link:"https://wa.me/919930375277"
  },
  {
    icon: "bi-geo-alt-fill",
    title: "Address",
    detail: "Bhaktideep Ashram, Ferozepur district, Panchkula, Haryana",
    hint: "India",
    link: "https://share.google/jEwi0ikjgjLDhhAJs",
  },
];

function ContactDetails() {
  return (
    <section className="contact-details-section">
      <div className="container">
        <div className="row g-3 g-lg-4 justify-content-center contact-details-row">
          {contactCards.map((card) => (
            <div className="col-12 col-md-6 col-lg-5 col-xl-4" key={card.title}>
              <article className="contact-card h-100">
                <div className="contact-card-icon" aria-hidden="true">
                  <i className={`bi ${card.icon}`} />
                </div>
                <h3>{card.title}</h3>
                <p className="contact-main-detail">
                  {card.link ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-address-link"
                    >
                      {card.detail}
                    </a>
                  ) : (
                    card.detail
                  )}
                </p>
                <p className="contact-sub-detail">{card.hint}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
