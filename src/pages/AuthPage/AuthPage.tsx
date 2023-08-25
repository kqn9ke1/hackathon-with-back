import React, { useState } from "react";
import "../AuthPage/AuthPage.css";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { IUserLogin, IUserRegister } from "../../contexts/AuthContext/type";
import { Navigate } from "react-router-dom";
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

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
      const credentials = {
        email: data.get("email"),
        password: data.get("password"),
        password2: data.get("password2"),
      } as IUserRegister;
      register(credentials);
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
            <label htmlFor="password">Password comfirm</label>
            <input type="password" name="password2" required />
          </>
        )}
        <button type="submit">{isLogin ? "Log in" : "Sign up"}</button>
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
