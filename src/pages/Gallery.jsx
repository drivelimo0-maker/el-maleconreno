import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import CommonHero from "../components/CommonHero/CommonHero";

import galleryitems from "../dataJson/gallery.json";

export default function GalleryShow({ noHeaderShow = false, limitItems = null }) {
  const ClassOption = classNames(
    "row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5",
  );

  // Limit items if limitItems prop is provided
  const displayItems = limitItems ? galleryitems.slice(0, limitItems) : galleryitems;

  return (
    <>
      {/* Hero only when header is allowed */}
      {!noHeaderShow && <CommonHero title="Gallery" link="/" />}

      <div className="container">
        <div className="ak-height-150 ak-height-lg-60"></div>

        {/* H1 + description when hero is hidden */}
        {noHeaderShow && (
          <div className="text-center mb-5">
            <h1 className="ak-section-title !text-white !text-[60px]">
              Gallery
            </h1>
            <p className="mt-3">
              Explore moments from our kitchen, bold Sinaloa flavors, fresh
              mariscos, and fusion sushi crafted to perfection.
            </p>
          </div>
        )}

        <div className={ClassOption}>
          {displayItems?.map((image, index) => (
            <div key={index}>
              <div className="gallery-hover">
                <img className="h-100" src={image.src} alt={image.caption} />

                {/* <div className="gallery-img-overlay">
                  <div className="images-info">
                    <div className="gallery-img-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <rect
                          x="0.507812"
                          y="19.7305"
                          width="40"
                          height="1"
                          fill="#FFD28D"
                        />
                        <rect
                          x="20.0078"
                          y="0.730469"
                          width="1"
                          height="40"
                          fill="#FFD28D"
                        />
                      </svg>
                    </div>

                    <div className="gallery-hover-info">
                      <div>
                        <h6>{image.title}</h6>
                        <p>{image.desp}</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* View More button when items are limited */}
        {limitItems && galleryitems.length > limitItems && (
          <div className="text-center mt-5">
            <div className="ak-height-30 ak-height-lg-30"></div>
            <Link to="/gallery" className="ak-btn ak-style1">
              <span className="ak-btn-in">View More</span>
            </Link>
          </div>
        )}

        <div className="ak-height-150 ak-height-lg-60"></div>
      </div>
    </>
  );
}
