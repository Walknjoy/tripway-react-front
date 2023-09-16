import React from 'react';
import './Trending.scss';
import TrendingTitle from './TrendingTitle/TrendingTitle';
import TrendingFilter from './TrendingFilter/TrendingFilter';
import TrendingCard from './TrendingCard/TrendingCard';
const Trending = () => {
  return (
    <section id="trending_section">
      <div className="container">
        <TrendingTitle />
        <TrendingFilter />
        <TrendingCard />
      </div>
    </section>
  );
};

export default Trending;
