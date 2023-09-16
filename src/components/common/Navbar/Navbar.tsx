import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container_main">
      <div className="container_hp">
        <div style={{ cursor: "pointer", paddingBottom: "20px" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            alt="logo"
            width={"auto"}
            height={"40px"}
          />
        </div>

        <div className="home">
          <div className="icons_container">
            <div className="icons_column">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/fluency-systems-filled/48/home.png"
                alt="home"
              />
              <p>Home</p>
            </div>
            <div className="icons_column">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-glyphs/30/search--v1.png"
                alt="search--v1"
              />
              <p>Search</p>
            </div>
            <div className="icons_column">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/material-outlined/48/compass.png"
                alt="compass"
              />
              <p>Explore</p>
            </div>
            <div className="icons_column">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png"
                alt="speech-bubble-with-dots--v1"
              />
              <p>Messages</p>
            </div>
            <div className="icons_column">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/like--v1.png"
                alt="like--v1"
              />
              <p>Notifications</p>
            </div>
            <div className="icons_column">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/add--v1.png"
                alt="add--v1"
              />
              <p>Create</p>
            </div>
            <Link to="/profile">
              <div className="icons_column">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                  alt="user-male-circle--v1"
                />
                <p style={{ color: "#4f4f4f" }}>Profile</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="icons_column">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/material-outlined/48/menu--v1.png"
            alt="menu--v1"
          />
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
