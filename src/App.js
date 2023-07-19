import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";
import Header from "./Component/Header/Header";

// Pages
const HomePage = lazy(() => import("./Views/Home"));
const GenrePage = lazy(() => import("./Views/Genre/Genre"));
const DetailMoviePage = lazy(() => import("./Views/Detail/Detail"));
const PageNotFound = lazy(() => import("./Views/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="detail/:id" element={<DetailMoviePage />} />
          <Route path="genre" element={<GenrePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
