import React from "react";
import CinemaLogo from "../../Assets/Img/cinema_logo.png";
import "./header.scss";
import { AiFillBell } from "@react-icons/all-files/ai/AiFillBell";
import { AiOutlineQrcode } from "@react-icons/all-files/ai/AiOutlineQrcode";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

const Header = () => {
  return (
    <header className="header">
      <img src={CinemaLogo} alt="cinema_logo" />
      <div className="search-container">
        <AiOutlineSearch size={28} className="search-icon" fill="#573b5c" />
        <input type="text" placeholder="Search" />
      </div>
      <button className="login">
        <AiOutlineQrcode
          size={30}
          className="icon"
          color="#000"
          style={{ marginRight: "20px" }}
        />
        Easy Login by Phone
      </button>
      <button className="notification">
        <AiFillBell size={30} className="icon" fill="#573b5c" />
      </button>
    </header>
  );
};

export default Header;
