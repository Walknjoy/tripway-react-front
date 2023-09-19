import React from 'react';
import './Blogs.scss';
import BlogCard from './BlogCard/BlogCard';

const Blogs = () => {
  return (
    <div className="deals-section">
      <div className="container">
        <div className="deals-title">
          <h3>Today's top Blogs</h3>
          <div className="horizantal"></div>
        </div>
        <div className="card-area">
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
