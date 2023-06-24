import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./index.scss";
import Header from "./Component/Header/Header";

// Pages
const HomePages = lazy(() => import("./Views/Home"));
const DetailMoviePage = lazy(() => import("./Views/Detail"));
const PageNotFound = lazy(() => import("./Views/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="detail" element={<DetailMoviePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
