import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./AmbienceSlider.scss";

const ambienceSlides = [
  {
    img: "/assets/img/one.jpeg",
    title: "Weekend Banda Nights",
    subtitle:
      "Live music, fresh seafood, and unforgettable energy — every weekend",
  },
  {
    img: "/assets/img/two.jpeg",
    title: "Vibrant Dining Atmosphere",
    subtitle:
      "Modern interiors, warm lighting, and the perfect setting to relax and enjoy",
  },
  {
    img: "/assets/img/three.jpeg",
    title: "Fresh Flavors. Great Company",
    subtitle: "Authentic seafood and a welcoming space for friends and family",
  },
];

export default function AmbienceSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = ambienceSlides.length;

  return (
    <section className="ambience-section">
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="ambience-slider-wrapper">
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={1.35}
          spaceBetween={24}
          speed={700}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 12,
            },
            576: {
              slidesPerView: 1.15,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 1.35,
              spaceBetween: 24,
            },
          }}
        >
          {ambienceSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="ambience-slide">
                <div className="ambience-slide-img">
                  <img src={slide.img} alt={slide.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom controls */}
        <div className="container">
          <div className="ambience-controls">
            {/* Active slide title */}
            <div className="ambience-title">
              <div className="ambience-title-content">
                <h6 className="ambience-title-text">
                  {ambienceSlides[activeIndex]?.title}
                </h6>
                <p className="ambience-subtitle-text">
                  {ambienceSlides[activeIndex]?.subtitle}
                </p>
              </div>
              <span className="ambience-title-arrow">
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.043 0.343L17.7 6L12.043 11.657M17.7 6H0.7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>
            </div>

            {/* Navigation */}
            <div className="ambience-nav">
              <button
                className="ambience-nav-btn"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous slide"
              >
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.657 11.657L0 6L5.657 0.343M0 6H17"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>
              <span className="ambience-nav-counter">
                {activeIndex + 1} / {totalSlides}
              </span>
              <button
                className="ambience-nav-btn"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next slide"
              >
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.043 0.343L17.7 6L12.043 11.657M17.7 6H0.7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
