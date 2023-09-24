import React from 'react';
import Trending from '../../Components/Trending/Trending';
import Blogs from '../../Components/Deals/Blogs';
import HeroFilter from '../../Components/HeroFilter/HeroFilter';
import Collaborateus from '../../Components/CollaborateUs/Collaborateus';

const Home = () => {
  return (
    <main>
      <HeroFilter />
      <Trending />
      <Collaborateus/>
      <Blogs />
    </main>
  );
};

export default Home;
