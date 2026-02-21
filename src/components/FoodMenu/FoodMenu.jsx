import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import FoodMenuItem from "./FoodMenuItem";
import { ButtonCommon } from "../Button/Button";

import itemShow from "/assets/img/itemShow/food-menu.png";

const foodMenu = [
  { title: "Mussels (12)", price: "$17.99" },
  { title: "Choriqueso", price: "$17.99" },
  { title: "Calamari", price: "$16.99" },
  {
    title: (
      <span>
        Empanadas de Camaron <br /> y Queso (1 Dozen)
      </span>
    ),
    price: "$45.99",
  },
  {
    title: (
      <span>
        Empanadas de Camaron <br /> y Queso (½ Dozen)"
      </span>
    ),
    price: "$25.99",
  },
  { title: "Empanada (Single)", price: "$5.99" },
  { title: "3 Doraditas", price: "$17.99" },
  { title: "3 Tostaditas", price: "$17.99" },
  { title: "Chicken Wings", price: "$18.99" },
];

export default function FoodMenuHome({ styleTwo }) {
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <SectionTitle
          title={"Appetizers"}
          // subTitle={"Appetizers"}
          tyle={"center"}
        />
        <div className="ak-height-65 ak-height-lg-30"></div>
        {styleTwo == true ? (
          <div className="d-flex justify-content-between flex-wrap gap-5 gap-md-0">
            <div className="ak-menu-list style-2">
              {foodMenu?.slice(0, 5).map((item, index) => {
                return <FoodMenuItem key={index} data={item} />;
              })}
            </div>
            <div>
              <img src={itemShow} alt="..." />
            </div>
          </div>
        ) : (
          <div className="ak-menu-list">
            {foodMenu?.map((item, index) => {
              return <FoodMenuItem key={index} data={item} />;
            })}
          </div>
        )}

        <div className="ak-height-20 ak-height-lg-20"></div>

        <div className="text-md-center">
          <ButtonCommon to="/menu">View more</ButtonCommon>
        </div>
      </div>
    </section>
  );
}
