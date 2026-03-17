import ji9 from "../../assets/images/ji9.png";
import ji1 from "../../assets/images/ji1.png";
import ji2 from "../../assets/images/ji2.png";
import ji5 from "../../assets/images/ji5.png";
import ji6 from "../../assets/images/ji6.png";
import ji4 from "../../assets/images/ji4.png";
import ji8 from "../../assets/images/ji8.png";
import homehero from "../../assets/images/homehero.jpeg";
import trishul1 from "../../assets/images/trishul1.png";
import havan from "../../assets/images/havan.jpeg";
import atulyaimage2 from "../../assets/images/atulyaimage2.png"

const galleryItems = [
  { src: ji9, alt: "Meditation by the river" },
  { src: ji1, alt: "Temple visit moment" },
  { src: ji2, alt: "Blessing gesture" },
  { src: ji5, alt: "Spiritual event scene" },
  { src: ji6, alt: "Spiritual event scene" },
  { src: trishul1, alt: "Spiritual event scene" },
  { src: havan, alt: "Spiritual event scene" },
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
          <div className="story-block row align-items-center g-4 g-lg-5 mt-2 mt-lg-4 reveal-up delay-1">
                <div className="col-lg-6 order-lg-2">
                  <div className="story-content-card">
                    <p className="story-tag">Guru Ji</p>
                    <h2>Darshan 🥰❤️</h2>
                    <p>A Divya Darbar is also held in the ashram <strong> every Tuesday, Thursday, and Saturday.</strong>
                       Any devotee who is facing a problem can <strong>come to the Divya Darbar </strong>
                        and seek guidance from Guru Ji for its resolution.</p>
                    <p>
                      <strong>Guru Ji</strong> writes the devotee’s problems on a piece of paper without even asking them,
                       and along with it, the solution is also written.
                       <strong> Gurudev Sarkar is extremely kind and compassionate.</strong>
                    </p>
                    <p>
                      <strong>Radhe Radhe!</strong> Everyone is warmly invited to visit the ashram 
                      at least once and have the divine <strong>darshan of Gurudev Prabhu. 🙏</strong>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="story-visual-card">
                    <img src={atulyaimage2} alt="Education and attainment visual" loading="lazy" />
                    <span className="story-ornament" aria-hidden="true" />
                  </div>
                  <br></br>
                  <h4>Sponsored by <strong>Atulya Kumar Pandey</strong></h4>
                </div>
              </div>


      </div>
              
    </section>
  );
}

export default GallerySection;


