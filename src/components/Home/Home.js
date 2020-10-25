import React from "react";
import Product from "./Product";
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
        <div className="product_container">
          <div className="home__row">
            <Product
              id="12342142"
              title="Pinch of Nom Everyday Light: 100 Tasty, Slimming Recipes All Under 400 Calories Hardcover"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51hlRhTeRkL._SX369_BO1,204,203,200_.jpg"
              rating={5}
            />
            <Product
              id="34324"
              price={23.99}
              title="Kenwood kMix stand Mixer for Baking,
          Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter
          Glass Bowl"
              rating={4}
              image="https://johnlewis.scene7.com/is/image/JohnLewis/238134095?$rsp-pdp-port-1080$"
            />
          </div>

          <div className="home__row">
            <Product
              id="3424234"
              title="HONOR Watch GS Pro - Multisport Smartwatch with 25-Day Battery Life, Military Standard Certified, GPS, 1.39 inch AMOLED Touch Screen, IP68 Water Resistance, Heart Rate Tracking for Outdoors, Black"
              price={40.99}
              image="https://images.samsung.com/is/image/samsung/uk/galaxy-note20/gallery/uk-galaxy-watch3-r840-sm-r840nzsaeua-frontmysticsilver-274582207?$PD_GALLERY_L_SHOP_JPG$"
              rating={5}
            />
            <Product
              id="34324"
              price={23.99}
              title="Kenwood kMix stand Mixer for Baking,
          Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter
          Glass Bowl"
              rating={4}
              image="https://johnlewis.scene7.com/is/image/JohnLewis/238134095?$rsp-pdp-port-1080$"
            />

            <Product
              id="34324"
              price={23.99}
              title="Kenwood kMix stand Mixer for Baking,
          Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter
          Glass Bowl"
              rating={4}
              image="https://johnlewis.scene7.com/is/image/JohnLewis/238134095?$rsp-pdp-port-1080$"
            />
          </div>

          <div className="home__row">
            <Product
              id="12342142"
              title="Pinch of Nom Everyday Light: 100 Tasty, Slimming Recipes All Under 400 Calories Hardcover"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51hlRhTeRkL._SX369_BO1,204,203,200_.jpg"
              rating={5}
            />
            <Product
              id="34324"
              price={23.99}
              title="Kenwood kMix stand Mixer for Baking,
          Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter
          Glass Bowl"
              rating={4}
              image="https://johnlewis.scene7.com/is/image/JohnLewis/238134095?$rsp-pdp-port-1080$"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
