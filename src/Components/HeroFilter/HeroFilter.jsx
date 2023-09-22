import React from 'react';
import './HeroFilter.scss';
import bgImage from '../../Media/bg.jpeg';
const HeroFilter = () => {
  return (
    <section
      className="hero-filter"
      style={{ background: `url(${bgImage})` }}></section>
  );
};

export default HeroFilter;
