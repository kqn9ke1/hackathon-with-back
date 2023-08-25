import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import H from "../Pages/H";
import CartPage from "../Pages/CartPage/CartPage";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/cart/" element={<CartPage />} />
      <Route path="/" element={<H />} />
    </Routes>
  );
};
