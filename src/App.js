import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Styled
import "./index.css";

// IMG
import ImgDashboard from "./Assets/Img/cinema.png";
import UserImg from "./Assets/Img/user.png";

// ICON
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { FiBell } from "@react-icons/all-files/fi/FiBell";

// Pages
const HomePages = lazy(() => import("./Views/Home"));
const DetailMoviePage = lazy(() => import("./Views/Detail"));
const PageNotFound = lazy(() => import("./Views/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <div className="row container">
        <div className="menu-bar">
          <img src={ImgDashboard} alt="img-dashboard" className="logo" />
          <Link to="detail">Home</Link>
          <Link to="upcoming">Upcoming Movies</Link>
          <Link to="series">Series Movies</Link>
          <Link to="genre">Genre</Link>
          <Link to="actor">Actor</Link>
        </div>
        <div className="content-bar">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              background: "#f0f0f0",
              gap: 20,
              padding: "16px 20px",
              // borderRadius: 8,
              borderBottom: "2px solid #E9E9E9",
            }}
          >
            <div
              style={{
                minWidth: "50%",
                borderRadius: 10,
                display: "flex",
                minHeight: 50,
                alignItems: "center",
                gap: 10,
                padding: "0 10px",
                border: "2px solid #E9E9E9",
              }}
            >
              <button
                onClick={() => {}}
                style={{
                  flex: 0.1,
                  display: "flex",
                  border: "none",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FiSearch size={26} />
              </button>
              <input
                type="text"
                placeholder="Search Movies"
                style={{
                  background: "transparent",
                  flex: 1,
                  height: 35,
                  border: "none",
                }}
              />
            </div>
            <button
              onClick={() => {}}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FiBell size={30} color="red" fill="green" />
            </button>
            <button
              onClick={() => {}}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img src={UserImg} alt="img-user" width={40} height="auto" />
            </button>
          </div>
          <Suspense>
            <Routes>
              <Route path="/" element={<HomePages />} />
              <Route path="detail" element={<DetailMoviePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
