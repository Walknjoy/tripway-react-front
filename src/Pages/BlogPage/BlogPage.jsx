import React, { useEffect, useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import BlogImg from '../../Media/image/blue-white.png';
import { Helmet } from 'react-helmet';
import useFetch from '../../hooks/useFetch';
import BlogPageCard from './BlogPageCard/BlogPageCard';
import SearchingBlog from './SearchingBlog/SearchingBlog';
import './BlogPage.scss';
import Categories from './Categories/Categories';
import Paggination from '../../Assets/Paggination/Paggination';
const BlogPage = () => {
  const { data, loading } = useFetch('/blogs/');
  console.log(data);
  // ! blog page pagination
  const [currentButton, setCurrentButton] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage] = useState(9);
  const indexOfLastBlog = currentPage * blogPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
  useEffect(() => {
    setCurrentPage(currentButton);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [currentButton, setCurrentPage]);

  return (
    <>
      <Helmet>
        <title>Blog page</title>
      </Helmet>
      <PageTitle title={'Blog'} backgroundImg={BlogImg} />
      <div className="blog_category_area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-9 col-md-8">
              <div className="blog_left_wrapper">
                {loading ? (
                  <p>loading...</p>
                ) : (
                  <>
                    {data
                      ?.slice(indexOfFirstBlog, indexOfLastBlog)
                      .map((item) => {
                        return <BlogPageCard key={item?._id} data={item} />;
                      })}
                    <Paggination
                      currentButton={currentButton}
                      setCurrentButton={setCurrentButton}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-4">
              <div className="blog_right_wrapper">
                <SearchingBlog />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
