import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ProuctPage from "../pages/ProductPage/ProuctPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import EditProductPage from "../pages/EditProductPage/EditProductPage";
import { HomePage } from "../pages/HomePage/HomePage";
import EditModalPage from "../pages/EditModalPage/EditModalPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/posts" element={<ProuctPage />} />
      <Route path="/add" element={<AddProductPage />} />
      <Route path="/edit/:id" element={<EditProductPage />} />
      <Route path="/edit" element={<EditModalPage />} />
    </Routes>
  );
};

export default AppRoutes;
