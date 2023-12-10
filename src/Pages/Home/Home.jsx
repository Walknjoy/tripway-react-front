import React from 'react';
import Trending from '../../Components/Trending/Trending';
import Collaborateus from '../../Components/CollaborateUs/Collaborateus';
import Destination from '../../Components/Destination/Destination';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import Hero from '../../Components/Hero/Hero';
import Blogs from '../../Components/Blog/Blogs';
import LoadingTopBar from '../../Assets/LoadingTopBar/LoadingTopBar';
import CustomHelmet from '../../Assets/Helmet/CustomHelmet';

const Home = () => {
  return (
    <>
      <LoadingTopBar />
      <CustomHelmet
        title="Home"
        description="Ana səhifə,Home page,Домашняя страница"
      />
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
