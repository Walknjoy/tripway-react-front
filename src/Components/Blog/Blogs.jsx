import React from 'react';
import './Blogs.scss';
import BlogCard from './BlogCard/BlogCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const Blogs = () => {
  return (
    <div className="deals-section">
      <div className="container">
        <SectionTitle title={"Today's top Blogs"} />
        <div className="card-area">
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
