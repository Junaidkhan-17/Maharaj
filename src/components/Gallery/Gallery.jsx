import "./gallery.css";
import { useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";

import ji1 from "../../assets/images/ji1.png";
import ji2 from "../../assets/images/ji2.png";
import ji3 from "../../assets/images/ji3.jpeg";
import ji4 from "../../assets/images/ji4.png";
import ji5 from "../../assets/images/ji5.png";
import ji6 from "../../assets/images/ji6.png";
import trishul1 from "../../assets/images/trishul1.png";

const galleryImages = [
  { src: ji1, alt: "Temple ceremony with lights" },
  { src: ji2, alt: "Temple ceremony with lights" },
  { src: ji3, alt: "Temple ceremony with lights" },
  { src: ji4, alt: "Temple ceremony with lights" },
  { src: ji5, alt: "Temple ceremony with lights" },
  { src: ji6, alt: "Temple ceremony with lights" },
  { src: trishul1, alt: "Temple ceremony with lights" },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    gsap.fromTo(
      ".gallery-shell",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
    );

    return () => {
      gsap.killTweensOf(track);
    };
  }, []);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const cards = cardRefs.current;

    if (!track || !cards.length) {
      return undefined;
    }

    const slideTimeline = gsap.timeline();
    slideTimeline
      .to(track, { opacity: 0.6, duration: 0.22, ease: "power1.out" })
      .to(
        track,
        {
          xPercent: -(activeIndex * 100),
          duration: 0.86,
          ease: "power3.inOut",
        },
        0,
      )
      .to(track, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0.28);

    cards.forEach((card, index) => {
      if (!card) {
        return;
      }

      const isActive = index === activeIndex;
      gsap.to(card, {
        scale: isActive ? 1 : 0.94,
        opacity: isActive ? 1 : 0.7,
        duration: 0.6,
        ease: "power2.out",
      });

      const imageEl = card.querySelector("img");
      if (imageEl) {
        gsap.to(imageEl, {
          opacity: isActive ? 1 : 0.58,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    });

    const activeImage = cards[activeIndex]?.querySelector("img");
    if (activeImage) {
      gsap.fromTo(
        activeImage,
        { opacity: 0.2, scale: 1.06 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        },
      );
    }

    return () => {
      slideTimeline.kill();
    };
  }, [activeIndex]);

  const moveToPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const moveToNext = () => {
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const getCardState = (index) => {
    const length = galleryImages.length;
    const offset = (index - activeIndex + length) % length;

    if (offset === 0) {
      return "is-active";
    }
    if (offset === 1) {
      return "is-next";
    }
    if (offset === length - 1) {
      return "is-prev";
    }
    return "is-far";
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="text-center mb-5">Divine Moments</h2>
      </div>

      <div className="gallery-shell">
        <button
          type="button"
          className="gallery-nav gallery-nav-left"
          onClick={moveToPrevious}
          aria-label="Previous image"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>

        <div className="gallery-viewport">
          <div className="gallery-track" ref={trackRef}>
            {galleryImages.map((image, index) => (
              <figure
                className={`gallery-card ${getCardState(index)}`}
                key={index}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="gallery-nav gallery-nav-right"
          onClick={moveToNext}
          aria-label="Next image"
        >
          <span aria-hidden="true">&#8250;</span>
        </button>
      </div>

      <div className="gallery-dots" aria-hidden="true">
        {galleryImages.map((_, index) => (
          <span
            key={index}
            className={`gallery-dot ${index === activeIndex ? "is-active-dot" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;


