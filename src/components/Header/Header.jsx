import React from "react";
import './Header.css'

import {
  BsJustify,
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
} from "react-icons/bs";
const Header = () => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon"/>
        <BsFillEnvelopeFill className="icon"/>
        <BsPersonCircle className="icon"/>
      </div>
    </header>
  );
};

export default Header;
