import SectionTitle from "../SectionTitle/SectionTitle";
import ImgesOverlay from "../ImgesOverlay/ImgesOverlay";
import { UtensilsCrossed } from "lucide-react";

const bestItem = {
  title: "Specialties",
  textWhite: "Our",
  imgOne: "/assets/img/gal7.jpg",
  imgTwo: "/assets/img/main12.jpeg",
  details:
    "Our specialties are inspired by the bold coastal flavors of Sinaloa. From fresh mariscos and crave-worthy appetizers to signature tacos, handcrafted burgers, and vibrant cocktails, every dish is prepared with premium ingredients and a modern fusion twist.",
  highlights: [
    "Fresh & Flavorful Appetizers",
    "Signature Burgers & Tacos",
    "Craft Cocktails & Drinks",
  ],
};

export default function BestItem() {
  const { imgOne, imgTwo, details, title, highlights } = bestItem;

  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>

      <div className="container">
        <div className="ak-best-item">
          {/* LEFT CONTENT */}
          <div className="best-item-section-1">
            <SectionTitle title={title} textWhite="Our" />

            <div className="ak-height-30 ak-height-lg-30"></div>

            <p>{details}</p>

            <div className="ak-height-25"></div>

            <ul className="list-none p-0 m-0 space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-end gap-2 font-medium">
                  <UtensilsCrossed className="shrink-0 primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="ak-height-50 ak-height-lg-30"></div>

            <div className="img-one">
              <ImgesOverlay image={imgTwo} />
            </div>
          </div>

          {/* CENTER DECOR */}
          <div className="best-item-section-2" data-speed="1.1" data-lag="1">
            <img src="/assets/img/icon/star_line.svg" alt="decor" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="best-item-section-3">
            <div className="img-two">
              <ImgesOverlay image={imgOne} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
