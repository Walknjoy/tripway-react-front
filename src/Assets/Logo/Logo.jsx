import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Media/logo-white.svg';
import logoScroll from '../../Media/primary-logo.jpeg';
import './Logo.scss';
const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo for travel vebsite" className="logo-noscroll" />
      <img src={logoScroll} alt="logo for travels vebsite" className='logo-scroll'/>
      <span>Walknjoy</span>
    </Link>
  );
};

export default Logo;
