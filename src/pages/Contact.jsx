import Header from "../components/Header/Header.jsx";
import ContactHero from "../components/ContactPage/ContactHero.jsx";
import ContactDetails from "../components/ContactPage/ContactDetails.jsx";
import ContactFormSection from "../components/ContactPage/ContactFormSection.jsx";
import Footer from "../components/ContactPage/Footer.jsx";
import "../components/ContactPage/contact-page.css";

function Contact() {
  return (
    <>
      <Header />
      <main className="contact-page-modern">
        <ContactHero />
        <ContactDetails />
        <ContactFormSection />
        <Footer />
      </main>
    </>
  );
}

export default Contact;
