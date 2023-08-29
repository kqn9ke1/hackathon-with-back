import React, { useState } from "react";
import "../AuthPage/AuthPage.css";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { IUserLogin, IUserRegister } from "../../contexts/AuthContext/type";
import { Navigate, Link } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const { user, register, login, isAdmin } = useAuthContext();

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
    console.log(user, "user");
    return <Navigate to="/" />;
  }

  return (
    <div className="auth_container">
      {/* {isLogin ? <h2>Log in </h2> : <h2>Sign up</h2>} */}
      <div className="auth_container_box">
        <div style={{ textAlign: "center" }}>
          <i aria-label="Instagram" className="insta_img"></i>
        </div>
        <div className="form_container">
          <form className="form_container" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Number, nickname or email"
              required
            />
            {!isLogin && (
              <>
                <input type="text" name="first_name" placeholder="Frist name" />
                <input type="text" name="last_name" placeholder="Last name" />
              </>
            )}
            <input
              type="password"
              name="password"
              required
              placeholder="password"
            />
            {!isLogin && (
              <>
                <input
                  type="password"
                  name="password2"
                  placeholder="password confirm"
                  required
                />
              </>
            )}
            <button type="submit">{isLogin ? "Log in" : "Sign up"}</button>
          </form>
        </div>
      </div>
      <div className="auth_isLogin_check">
        <a href="#" className="a" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? (
            <p>
              Don't have an account?{"   "}
              <span className="span" style={{ color: "blue" }}>
                Sign up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{"   "}
              <span className="span" style={{ color: "blue" }}>
                Log in
              </span>
            </p>
          )}
        </a>
      </div>
    </div>
  );
};

export default AuthPage;

// sx={{
//   padding: "6px",
//   width: "300px",
//   background: "rgba(255, 255, 255, 0.039)",
//   color: "white",
//   border: "0 solid rgba(255, 255, 255, 0.039)",
//   boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0)",
//   outline: "1px solid",
//   outlineColor: "rgba(255, 255, 255, 0.5)",
//   outlineOffset: "0px",
//   textShadow: "none",
//   transition: "all 1250ms cubic-bezier(0.19, 1, 0.22, 1)",
//   cursor: "pointer",
//   mb: "5px",
//   "&:hover": {
//     border: "1px solid",
//     boxShadow:
//       "inset 0 0 20px rgba(255, 255, 255, 0.5),0 0 20px rgba(255, 255, 255, 0.2)",
//     outlineColor: "rgba(255, 255, 255, 0)",
//     outlineOffset: "15px",
//     textShadow: "1px 1px 2px #427388",
//   },
// }}
