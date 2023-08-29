import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="container_hp">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px- Instagram_logo.svg.png"
          alt="logo"
          width={"120"}
          height={"40"}
        />
      </div>

      <div className="home">
        <div className="icons_container">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/fluency-systems-filled/48/home.png"
            alt="home"
          />
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/search--v1.png"
            alt="search--v1"
          />
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/material-outlined/48/compass.png"
            alt="compass"
          />
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png"
            alt="speech-bubble-with-dots--v1"
          />
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/like--v1.png"
            alt="like--v1"
          />
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/add--v1.png"
            alt="add--v1"
          />
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
            alt="user-male-circle--v1"
          />
        </div>
      </div>

      <div>
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/material-outlined/48/menu--v1.png"
          alt="menu--v1"
        />
      </div>
      <div className="posts_container">
        <div>
          <div className="posts_container_post"></div>
        </div>
      </div>
    </div>
  );
};
