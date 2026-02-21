import React from "react";

export default function ImgesOverlay({ image, imagesZoom }) {
  return (
    <div className="img-container-overlay" style={{ "--height": "0%" }}>
      <img
        src={`${image}`}
        alt="overlay-image"
        className="images-show"
        style={{ opacity: 1 }}
      />
    </div>
  );
}
