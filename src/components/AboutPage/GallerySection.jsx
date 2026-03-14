import ji9 from "../../assets/images/ji9.png";
import ji1 from "../../assets/images/ji1.png";
import ji2 from "../../assets/images/ji2.png";
import ji5 from "../../assets/images/ji5.png";
import ji6 from "../../assets/images/ji6.png";
import ji4 from "../../assets/images/ji4.png";
import ji8 from "../../assets/images/ji8.png";
import homehero from "../../assets/images/homehero.jpeg";
import trishul1 from "../../assets/images/trishul1.png";

const galleryItems = [
  { src: ji9, alt: "Meditation by the river" },
  { src: ji1, alt: "Temple visit moment" },
  { src: ji2, alt: "Blessing gesture" },
  { src: ji5, alt: "Spiritual event scene" },
  { src: ji6, alt: "Spiritual event scene" },
  { src: trishul1, alt: "Spiritual event scene" },
  { src: ji4, alt: "Spiritual event scene" },
  { src: ji8, alt: "Spiritual event scene" },
  { src: homehero, alt: "Spiritual event scene" },
];

function GallerySection() {
  return (
    <section className="about-gallery-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="about-eyebrow">Sacred Moments</p>
          <h2 className="about-section-title">Divine Glimpses</h2>
        </div>

        <div className="masonry-grid reveal-up">
          {galleryItems.map((item, index) => (
            <figure className={`masonry-item item-${index + 1}`} key={item.src}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
