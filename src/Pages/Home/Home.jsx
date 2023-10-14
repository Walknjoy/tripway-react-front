import React from 'react';
import Trending from '../../Components/Trending/Trending';
import Collaborateus from '../../Components/CollaborateUs/Collaborateus';
import Destination from '../../Components/Destination/Destination';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import { Helmet } from 'react-helmet';
import Hero from '../../Components/Hero/Hero';
import Blogs from '../../Components/Blog/Blogs';

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
        <Collaborateus />
        <WhyChoose />
        <Blogs />
      </main>
    </>
  );
};

export default Home;
