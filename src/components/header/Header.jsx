import React from "react";
import "./Header.scss";
import { NAVBAR_LIST } from "../../static/";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar__collection">
            {NAVBAR_LIST.map((item) => (
              <li key={item.id} className="navbar__item">
                <a href={item.link} className="navbar__link">
                  {item.icon && <item.icon className="navbar__icon" />}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header__info">
        <p>
          Starting 11/29, get an Apple Gift Card up to $200 when you buy an
          eligible product — online and in-store.
          <sup>
            <a href="#">1 </a>
          </sup>
          <a href="#" className="header__link">
            Learn more
          </a>
          <IoIosArrowForward />
        </p>
      </div>
    </header>
  );
};

export default Header;
