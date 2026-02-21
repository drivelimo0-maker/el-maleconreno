import React from "react";
import classNames from "classnames";

export default function SectionTitle(props) {
  const { title, subTitle, tyle, animTwo, textWhite } = props;

  const sectionClass = classNames("ak-section-heading ak-style-1", {
    "ak-type-1": tyle == "center",
  });

  return (
    <div className={sectionClass}>
      {subTitle && <div className="ak-section-subtitle">{subTitle}</div>}
      <h2 className="ak-section-title !text-white">
        {textWhite && (
          <>
            <span>{textWhite}</span> <br />
          </>
        )}
        {title}
      </h2>
    </div>
  );
}
