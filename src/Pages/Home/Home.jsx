import React from 'react';
import Trending from '../../Components/Trending/Trending';
import Blogs from '../../Components/Deals/Blogs';

const Home = () => {
  return (
    <main className="main-section">
      <Trending />
      <Blogs />
    </main>
  );
};

export default Home;
