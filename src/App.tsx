import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DetailsPage from "./components/Pages/DetailsPage/DetailsPage";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./components/Routes/MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
