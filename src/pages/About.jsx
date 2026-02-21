import React from "react";
import AboutContent from "../components/AboutContent/AboutContent";
import CommonHero from "../components/CommonHero/CommonHero";
import Testimonial from "../components/Testimonial/Testimonial";
import OpeningHoursInfo from "../components/OpenIngHour/OpeningHoursInfo";
import BestItem from "../components/BestItem/BestItem";
import GalleryShow from "./Gallery";

export default function About() {
  return (
    <div>
      <CommonHero title={"About Us"} link={"/"} />
      <AboutContent />
      <BestItem />
      <OpeningHoursInfo typeTwo={true} />
      <Testimonial />
      <GalleryShow noHeaderShow />
      {/* <Videos videoId={"UsD1MhKBmD4"} /> */}
    </div>
  );
}
