import React from 'react';
import { Link } from 'react-router-dom';
import logoScroll from '../../Media/walknjoy.png';
import './Logo.scss';
const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img
        src={logoScroll}
        alt="logo for travels vebsite"
      />
    </Link>
  );
};

export default Logo;
