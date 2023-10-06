import React from 'react';
import Trending from '../../Components/Trending/Trending';
import Blogs from '../../Components/Deals/Blogs';
import Collaborateus from '../../Components/CollaborateUs/Collaborateus';
import Destination from '../../Components/Destination/Destination';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import { Helmet } from 'react-helmet';
import HeroSearch from '../../Components/HeroSearch/HeroSearch';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main>
        <Hero />
        <Destination />
        <Trending />
        <HeroSearch />
        <Collaborateus />
        <WhyChoose />
        <Blogs />
      </main>
    </>
  );
};

export default Home;
