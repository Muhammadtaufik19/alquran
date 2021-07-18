import React, { useState } from "react";
import { MenuItems } from "./MeneuItems";
import { Button } from "../Button/Button";

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
                  <a href={item.url} className={item.cName}>
                    {item.title}
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
