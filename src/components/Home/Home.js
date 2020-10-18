import React from "react";
import Product from "./Product"
import "../../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">

          {/* background image top page */}
          <img
            className="home__image"
            preload="auto"
            muted="true"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/Events/2020/APDHF/AMZ_PD20_UK_EN_GW011_Day1_Gifting_08_1500x300._CB403881914_.jpg"
          />
          
          <div className="home__row">
          <Product/>
          {/* <Product/> */}
          </div>

          <div className="home__row">
          {/* <Product/>
          <Product/>
          <Product/> */}
          </div>

          <div className="home__row">
          {/* <Product/> */}
          </div>
      </div>
    </div>
  );
}
