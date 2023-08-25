import React from "react";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"></li>
        <li className="nav-item">
          <a href="/details/:id">DetailsPage</a>
        </li>
        <li className="nav-item">
          <a href="/cart/">CartPage</a>
        </li>

        <button
          onClick={() => {
            navigate("/details/:id");
          }}
        >
          details
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
