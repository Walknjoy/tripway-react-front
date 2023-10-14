import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import BlogImg from '../../Media/image/blue-white.png';
import { Helmet } from 'react-helmet';
const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog page</title>
      </Helmet>
      <div>
        <PageTitle title={'Blog'} backgroundImg={BlogImg} />
      </div>
    </>
  );
};

export default BlogPage;
