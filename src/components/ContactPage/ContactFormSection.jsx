import qrcodeImage from "../../assets/images/qrcode.jpeg";

function ContactFormSection() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const location = (formData.get("location") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const whatsappMessage = [
      "Jai Shri Krishna, I would like to submit a contact request.",
      "",
      `Name: ${name || "-"}`,
      `Mobile: ${phone || "-"}`,
      `Email: ${email || "-"}`,
      `Location: ${location || "-"}`,
      `Message: ${message || "-"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/919930375277?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="row justify-content-center align-items-start g-4">
          <div className="col-12 col-lg-8 col-xl-8">
            <div className="contact-form-shell">
              <div className="row g-4">
                <div className="col-12 col-xl-5">
                  <div className="contact-form-intro">
                    <p className="contact-form-tag">Spiritual Assistance</p>
                    <h2>Share Your Event Details</h2>
                    <p>
                      Tell us about your katha, satsang, or spiritual ceremony. Include location
                      and preferred dates so the team can guide you quickly.
                    </p>
                    <ul className="contact-check-list">
                      <li>Bhagwat Katha Bookings</li>
                      <li>Temple Program Coordination</li>
                      <li>Spiritual Guidance Requests</li>
                    </ul>
                    <h6>Any devotee wishing to become a member of the Guru-Disciple family should fill out this form, 
                      which is provided free of cost.</h6>
                  </div>
                </div>

                <div className="col-12 col-xl-7">
                  <form className="contact-form-grid" onSubmit={handleSubmit}>
                    <label>
                      Full Name
                      <input type="text" name="name" placeholder="Enter your full name" />
                    </label>
                    <label>
                      Mobile Number
                      <input type="tel" name="phone" placeholder="Enter mobile number" />
                    </label>
                    <label>
                      Email Address
                      <input type="email" name="email" placeholder="Enter email address" />
                    </label>
                    <label>
                      Event Location
                      <input type="text" name="location" placeholder="City, State" />
                    </label>
                    <label className="full-width">
                      Message
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Share your event details, date preferences, and requirement."
                      />
                    </label>
                    <button type="submit" className="contact-submit-btn">
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 col-xl-3">
            <aside className="contact-qr-card">
              <h3>Quick Scan to Donate</h3>
              <p>Scan this QR code to connect to Make a Donation.</p>
              <img src={qrcodeImage} alt="WhatsApp contact QR code" loading="lazy" />
              <a
                href="https://wa.me/919930375277"
                target="_blank"
                rel="noreferrer"
                className="contact-qr-link"
              >
                Scan this QR Code with any UPI
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
