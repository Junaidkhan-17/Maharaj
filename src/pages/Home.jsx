import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Welcome from "../components/Welcome/Welcome.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import Quote from "../components/Quote/Quote.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <Gallery />
      <Quote />
      <Footer />
    </>
  );
}

export default Home;