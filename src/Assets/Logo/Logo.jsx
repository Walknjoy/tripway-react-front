import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Media/logo-white.svg';
import './Logo.scss';
const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo for travel" />
      <span>MyTravel</span>
    </Link>
  );
};

export default Logo;
