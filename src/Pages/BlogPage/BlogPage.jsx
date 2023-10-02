import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import BlogImg from '../../Media/blog-bg.webp';
import BlogPageCard from './BlogPageCard/BlogPageCard';
const BlogPage = () => {
  return (
    <div>
      <PageTitle title={'Blog'} backgroundImg={BlogImg} />
      <BlogPageCard />
    </div>
  );
};

export default BlogPage;
