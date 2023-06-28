import React, { useState, useEffect, Fragment } from "react";
// Style
import "./header.scss";
// Image
import CinemaLogo from "../../Assets/Img/cinema_logo.png";
// Icon
import { AiFillBell } from "@react-icons/all-files/ai/AiFillBell";
import { AiOutlineQrcode } from "@react-icons/all-files/ai/AiOutlineQrcode";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
// Burger navigation Icon
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineMenuUnfold } from "@react-icons/all-files/ai/AiOutlineMenuUnfold";

const Header = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  // Optimizing use ref
  const [open, setOpen] = useState(false);

  // For burger Navigation from height / size screen
  useEffect(() => {
    // Function get size screen
    const resizeValue = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", resizeValue);

    return () => window.removeEventListener("resize", resizeValue);
  }, []);

  // get resize and change state open
  useEffect(() => {
    console.log("SIZE => =>", size);
    if (size.width > 768 && open) {
      setOpen(false);
    }
  }, [size, open]);

  const handlerOpenBurgerNavigation = () => {
    setOpen((setValue) => !setValue);
  };

  return (
    <Fragment>
      <header className="header container">
        <section className="header_content">
          <img src={CinemaLogo} alt="cinema_logo" />
          <div className="header_content_search_container">
            <AiOutlineSearch size={28} className="search-icon" fill="#573b5c" />
            <input type="text" placeholder="Search" />
          </div>
          <nav
            className={`${"header_content_nav"} 
         ${open && size.width < 768 ? `${"isMenu"}` : ""} 
         }`}
          >
            <ul>
              <li>
                <button className="btn login">
                  <div>
                    <AiOutlineQrcode
                      size={30}
                      className="icon"
                      color="#000"
                      style={{
                        marginRight: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        display: "flex",
                        background: "#12b222",
                        width: "100%",
                      }}
                    />
                  </div>
                  {/* Tablet Resolution */}
                  {size.width === 0 || size.width > 1200
                    ? `Easy Login by Phone`
                    : null}
                  {/* Mobile Resolution */}
                  {size.width < 768 && open ? `Easy Login by Phone` : null}
                </button>
              </li>
              <li>
                <button className="btn notification">
                  <AiFillBell size={30} className="icon" fill="#573b5c" />
                </button>
              </li>
            </ul>
          </nav>

          {/* burger Navigation icon */}
          <section className="header_content_burger_navigation">
            {!open ? (
              <AiOutlineMenu
                onClick={handlerOpenBurgerNavigation}
                size={40}
                fill="#573b5c"
              />
            ) : (
              <AiOutlineMenuUnfold
                onClick={handlerOpenBurgerNavigation}
                size={40}
                fill="#573b5c"
              />
            )}
          </section>
        </section>
      </header>
    </Fragment>
  );
};

export default Header;
