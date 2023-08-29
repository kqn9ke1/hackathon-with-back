import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AuthContext, {
  useAuthContext,
} from "./contexts/AuthContext/AuthContext";
import ProductContext from "./contexts/ProductContext/ProductContext";

const App = () => {
  // const res = useAuthContext();

  // useEffect(() => {
  //   res.checkAuth();
  // }, []);

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
