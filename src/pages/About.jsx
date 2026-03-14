import Header from "../components/Header/Header.jsx";
import AboutHero from "../components/AboutPage/AboutHero.jsx";
import LifeStory from "../components/AboutPage/LifeStory.jsx";
import SpiritualTimeline from "../components/AboutPage/SpiritualTimeline.jsx";
import GallerySection from "../components/AboutPage/GallerySection.jsx";
import QuoteSection from "../components/AboutPage/QuoteSection.jsx";
import Footer from "../components/AboutPage/Footer.jsx";
import "../components/AboutPage/about-page.css";

function About() {
  return (
    <>
      <Header />
      <main className="about-page-modern">
        <AboutHero />
        <LifeStory />
        <SpiritualTimeline />
        <GallerySection />
        <QuoteSection />
        <Footer />
      </main>
    </>
  );
}

export default About;
