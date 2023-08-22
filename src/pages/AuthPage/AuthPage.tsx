import React, { useState } from "react";
import "../AuthPage/AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth_container">
      <form className="form_container">
        {isLogin ? <h1>Log in </h1> : <h1>Sign up</h1>}
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />
        {!isLogin && (
          <>
            <label htmlFor="password">Password comfirm</label>
            <input type="password" name="passwordConfirm" required />
          </>
        )}
        <button type="submit">{isLogin ? "Log in" : "Sign up"}</button>
        <a href="#" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </a>
      </form>
    </div>
  );
};

export default AuthPage;
