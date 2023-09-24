import React from 'react';
import Trending from '../../Components/Trending/Trending';
import Blogs from '../../Components/Deals/Blogs';
import HeroFilter from '../../Components/HeroFilter/HeroFilter';

const Home = () => {
  return (
    <main>
      <HeroFilter />
      <Trending />
      <Blogs />
    </main>
  );
};

export default Home;
