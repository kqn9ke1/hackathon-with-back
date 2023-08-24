import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AuthContext from "./contexts/AuthContext/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContext>
        <AppRoutes />
      </AuthContext>
    </BrowserRouter>
  );
};

export default App;
