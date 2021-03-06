import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../img/CorisLogo.png";

const clearLocalStorage = () => {
  localStorage.removeItem("dogfight_user_id");
};

export const NavBar = (props) => {
  return (
    <div className="navbar">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
      </style>
      <div className="logo">
        <img src={logo} alt="Cori's DogHouse Logo" />
      </div>
      <div className="div">
        <h1 className="name">Cori's Dogfight</h1>
        <div>
          <Link className="navbar_home" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="navbar_wall" to="/wallOfWeiners">
            Wall Of Weiners
          </Link>
        </div>
        <div>
          <Link
            className="logout"
            onClick={() => {
              clearLocalStorage();
              props.history.push("/login");
            }}
          >
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};
