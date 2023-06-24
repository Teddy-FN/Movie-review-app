import React from "react";
import "./banner.scss";
import BannerImage from "../../Assets/Img/test.jpeg";
const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BannerImage})`,
        zIndex: 0,
      }}
      className="banner-container"
    >
      <img src={BannerImage} alt="banner" />
    </section>
  );
};

export default Banner;
