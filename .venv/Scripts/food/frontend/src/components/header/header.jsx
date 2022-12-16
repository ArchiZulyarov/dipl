import './header.scss';
import {Link} from "react-router-dom";
import Navigation from "../navigation/navigation";
import React from 'react';
const Header = () => {
  return (<header className="header">
    <Link
      to="/"
      className="header__link"
    />
    <Navigation/>
  </header>);
};

export default Header;
