import React from 'react';
import Trending from '../../Components/Trending/Trending';
import Blogs from '../../Components/Deals/Blogs';
import HeroFilter from '../../Components/HeroFilter/HeroFilter';
import Collaborateus from '../../Components/CollaborateUs/Collaborateus';
import Destination from '../../Components/Destination/Destination';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';

const Home = () => {
  
  return (
    <main>
      <HeroFilter />
      <Destination />
      <Trending />
      <Collaborateus />
      <WhyChoose />
      <Blogs />
    </main>
  );
};

export default Home;
