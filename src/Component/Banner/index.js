import React from "react";
import "./banner.scss";
import BannerImage from "../../Assets/Img/test.jpeg";
const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
      className="banner-container"
    >
      <div className="desc-container">
        <h1>HELLO</h1>
      </div>
      {/* <img src={BannerImage} alt="banner" /> */}
    </section>
  );
};

export default Banner;
