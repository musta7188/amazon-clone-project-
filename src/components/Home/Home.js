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
              id="334224"
              price={50}
              title="Hosome Vacuum Cleaner, 25000Pa Powerful Suction Stick Vacuum Cleaner with Digital Display & Mounting Bracket, Cordless Vacuum Up to 43 Mins Runtime, 2 Brushes for Hard Floor Carpet Pet Hair"
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71Ae6ukiFSL._AC_SL1500_.jpg"
            />

            <Product
              id="34324"
              price={20.89}
              title="Stynice Gaming Headset with Noise Cancelling for Xbox One/PS4/PS5/PC/Laptop/MAC-Stereo Surround Lightweight Soft Earmuffs Headphone with 3.5MM Jack & Mic & LED Light (Green)"
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71FSYnpZNSL._AC_SL1200_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="12342142"
              title="EACHINE E511, Drone with Camera for Adults 1080p, Drone with Camera for Beginners, Drone WIFI FPV APP, Drone Long Flight Time 17 Minutes, RC Drone Foldable"
              price={99.99}
              image="https://images-na.ssl-images-amazon.com/images/I/6191wfhJmFL._AC_SL1000_.jpg"
              rating={5}
            />
            <Product
              id="34324"
              price={110}
              title="Muscle Massage Gun, Deep Tissue Body Massager Electric Quiet Portable Massaging Gun 20 Speed Vibration-6 Head Professional Percussion Fascia Gun Recharge Relief Recovery for Pain,Sore and Stiffness"
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/51hEAzRcXRL._AC_SL1000_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
