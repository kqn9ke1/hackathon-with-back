import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ProuctPage from "../pages/ProductPage/ProuctPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/posts" element={<ProuctPage/>}/>
      <Route path="/add" element={<AddProductPage/>}/>
    </Routes>
  );
};

export default AppRoutes;
