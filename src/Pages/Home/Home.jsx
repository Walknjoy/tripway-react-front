import React from 'react';
import Trending from '../../Components/Trending/Trending';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import Deals from '../../Components/Deals/Deals';

const Home = () => {
  return (
    <main className="main-section">
      <HomeSlider />
      <Trending />
      <Deals />
    </main>
  );
};

export default Home;
