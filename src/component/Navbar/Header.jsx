import React, { useState } from "react";
import { MenuItems } from "./MeneuItems";
import { Button } from "../Button/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    setclicked(!clicked);
  };
  return (
    <div className="bg-header">
      <div className="container">
        <nav className="NavbarItems">
          <h1 className="nav-logo">
            <a href="/">
              Al-Quran <i className="bi bi-book"></i>
            </a>
          </h1>
          <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fa fa-bars"}></i>
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key="index">
                  <a className={item.cName}>
                    <Link to={item.url}>{item.title}</Link>
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <Button>Sign Up</Button> */}
        </nav>
      </div>
    </div>
  );
}
