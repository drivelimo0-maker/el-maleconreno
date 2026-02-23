import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bg_img from "/assets/img/bg/elhero.png";
import { Link } from "react-router-dom";
const sliderData = [
  {
    title: `El Malecon Mariscos
`,
    maintitle: "Bar & Grill Restaurant",
    desp: "Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds and leaves you with",
    buttonUrl: "reservations",
  },
  {
    title: `El Malecon Mariscos
`,
    maintitle: "Bar & Grill Restaurant",
    desp: "Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds and leaves you with",
    buttonUrl: "reservations",
  },
  {
    title: `El Malecon Mariscos
`,
    maintitle: "Bar & Grill Restaurant",
    desp: "Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds and leaves you with",
    buttonUrl: "reservations",
  },
];
export default function HeroSiderTwo() {
  const swiperRefs = useRef();
  const videoRef = useRef(null);

  useEffect(() => {
    // Programmatically force the video to play on mount
    if (videoRef.current) {
      // Explicitly setting muted via JS is sometimes required for Android Chrome
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing successfully
          })
          .catch((error) => {
            console.log("Autoplay was prevented by the browser:", error);
            // This usually happens if the user is on Battery Saver mode
          });
      }
    }
  }, []);

  return (
    <section>
      <div className="ak-hero ak-style1">
        <div
          className="video-wrapper" // Add any layout classes you need here
          dangerouslySetInnerHTML={{
            __html: `
          <video
            class="ak-hero-bg ak-bg"
            autoplay
            loop
            muted
            playsinline
            preload="auto"
            poster="${bg_img}"
            style="pointer-events: none;"
          >
            <source src="/assets/img/hero.mp4" type="video/mp4" />
          </video>
        `,
          }}
        />
        <div className="hero-text-section container-fluid">
          <div className="ak-slider ak-slider-hero-2">
            <Swiper
              loop={true}
              slidesPerView={"auto"}
              onSwiper={(swiper) => {
                swiperRefs.current = swiper;
              }}
            >
              {sliderData.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="slider-info">
                      <div className="hero-title mt-48! sm:mt-64! md:mt-80! lg:mt-[35vh]!">
                        <h1 className="hero-main-title text-5xl! mb-4">
                          {item.title}
                        </h1>
                        <h1 className="hero-main-title-1 text-4xl!">
                          {item.maintitle}
                        </h1>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center w-64 sm:w-auto mx-auto gap-4 md:gap-6 mt-12">
                        <a
                          href="https://olo.edgeservpos.com/malecon"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="md:hidden inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-black bg-[#FFD28D] hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,210,141,0.3)] transition-all duration-300 uppercase tracking-widest text-center whitespace-nowrap"
                        >
                          Order Online
                        </a>
                        <a
                          href="https://webmenu.edgeservpos.com/malecon/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-white bg-transparent border-2 border-[#FFD28D] hover:bg-[#FFD28D] hover:text-black hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,210,141,0.3)] transition-all duration-300 uppercase tracking-widest text-center whitespace-nowrap"
                        >
                          View Menu
                        </a>
                        <a
                          href="https://www.doordash.com/store/el-malecon-mariscos-bar-and-grill-reno-38190139/91063579/?srsltid=AfmBOop6YuhLETLXE3a_k713MXW1NbgVn5YsVNsT0iHO-G4DpRfRhcon"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-black bg-[#FFD28D] hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,210,141,0.3)] transition-all duration-300 uppercase tracking-widest text-center whitespace-nowrap"
                        >
                          Order Delivery
                        </a>
                      </div>
                      <div className="ak-height-70 ak-height-lg-30"></div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* <div className="container">
          <div className="ak-swiper-controll-hero-2">
            <div className="ak-swiper-navigation-wrap">
              <div
                className="ak-swiper-button-prev"
                onClick={() => swiperRefs.current.slideNext()}
              >
                <div className="hero-swiper-prev">
                  <div className="btn-cricle"></div>
                  <div className="btn-arrow">
                    <svg
                      width="40"
                      height="55"
                      viewBox="0 0 54 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1166_8458)">
                        <path
                          d="M16.6309 25.4001L25.1406 16.8902C25.4463 16.5333 25.9835 16.4917 26.3405 16.7974C26.6974 17.1031 26.739 17.6403 26.4333 17.9973C26.4048 18.0306 26.3738 18.0617 26.3405 18.0901L19.2859 25.1532H52.9762C53.4461 25.1532 53.8271 25.5343 53.8271 26.0043C53.8271 26.4743 53.4461 26.8552 52.9762 26.8552H19.2859L26.3405 33.9098C26.6974 34.2155 26.739 34.7527 26.4333 35.1097C26.1275 35.4666 25.5904 35.5082 25.2334 35.2025C25.2001 35.174 25.1691 35.1429 25.1406 35.1097L16.6308 26.5999C16.3009 26.2681 16.3009 25.732 16.6309 25.4001Z"
                          fill="#FFD28D"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ak-swiper-button-next">
                <div
                  className="hero-swiper-next"
                  onClick={() => swiperRefs.current.slidePrev()}
                >
                  <div className="btn-cricle"></div>
                  <div className="btn-arrow">
                    <svg
                      width="40"
                      height="55"
                      viewBox="0 0 55 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1166_8452)">
                        <path
                          d="M38.0234 25.4001L29.5137 16.8902C29.208 16.5333 28.6708 16.4917 28.3138 16.7974C27.9569 17.1031 27.9153 17.6403 28.221 17.9973C28.2495 18.0306 28.2805 18.0617 28.3138 18.0901L35.3684 25.1532H1.6781C1.20816 25.1532 0.827148 25.5343 0.827148 26.0043C0.827148 26.4743 1.20816 26.8552 1.6781 26.8552H35.3684L28.3138 33.9098C27.9569 34.2155 27.9153 34.7527 28.221 35.1097C28.5268 35.4666 29.0639 35.5082 29.4209 35.2025C29.4542 35.174 29.4852 35.1429 29.5137 35.1097L38.0235 26.5999C38.3534 26.2681 38.3534 25.732 38.0234 25.4001Z"
                          fill="#FFD28D"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
