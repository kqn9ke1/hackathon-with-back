import React, { useState } from "react";
import "../AuthPage/AuthPage.css";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { IUserLogin, IUserRegister } from "../../contexts/AuthContext/type";
import { Navigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { user, register, login } = useAuthContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    if (isLogin) {
      const credentials = {
        email: data.get("email"),
        password: data.get("password"),
      } as IUserLogin;
      login(credentials);
    } else {
      const credentials1 = {
        email: data.get("email"),
        password: data.get("password"),
        password2: data.get("password2"),
        first_name: data.get("first_name"),
        last_name: data.get("last_name"),
      } as IUserRegister;
      register(credentials1);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth_container">
      <form className="form_container" onSubmit={handleSubmit}>
        {isLogin ? <h2>Log in </h2> : <h2>Sign up</h2>}
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />
        {!isLogin && (
          <>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" />
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" />
          </>
        )}
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />
        {!isLogin && (
          <>
            <label htmlFor="password2">Password comfirm</label>
            <input type="password" name="password2" required />
          </>
        )}
        <Button
          sx={{
            padding: "6px",
            width: "300px",
            background: "rgba(255, 255, 255, 0.039)",
            color: "white",
            border: "0 solid rgba(255, 255, 255, 0.039)",
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0)",
            outline: "1px solid",
            outlineColor: "rgba(255, 255, 255, 0.5)",
            outlineOffset: "0px",
            textShadow: "none",
            transition: "all 1250ms cubic-bezier(0.19, 1, 0.22, 1)",
            cursor: "pointer",
            mb: "5px",
            "&:hover": {
              border: "1px solid",
              boxShadow:
                "inset 0 0 20px rgba(255, 255, 255, 0.5),0 0 20px rgba(255, 255, 255, 0.2)",
              outlineColor: "rgba(255, 255, 255, 0)",
              outlineOffset: "15px",
              textShadow: "1px 1px 2px #427388",
            },
          }}
          type="submit"

          // component={Link}
          // to="/"
        >
          {isLogin ? "Log in" : "Sign up"}
        </Button>
        <a href="#" className="a" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </a>
      </form>
    </div>
  );
};

export default AuthPage;
