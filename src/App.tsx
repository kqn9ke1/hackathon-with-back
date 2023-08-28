import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AuthContext from "./contexts/AuthContext/AuthContext";
import ProductContext from "./contexts/ProductContext/ProductContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContext>
        <ProductContext>
          <AppRoutes />
        </ProductContext>
      </AuthContext>
    </BrowserRouter>
  );
};

export default App;
