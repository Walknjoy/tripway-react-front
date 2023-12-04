import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { AiOutlineComment, AiTwotoneCalendar } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import useFetch from '../../../hooks/useFetch';

const BlogCard = () => {
  const { data, loading } = useFetch('/blogs/');
  const optionsDeal = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    margin: 20,
    autoplayHoverPause: true,
    center: false,
    responsiveClass: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      575: {
        items: 1,
        dots: true,
      },
      992: {
        items: 2,
        dots: true,
      },
      1400: {
        items: 2,
        dots: true,
      },
    },
  };
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <OwlCarousel {...optionsDeal} className="owl-theme deals-carousel">
          {data?.map((blogItem, index) => {
            return (
              <div key={blogItem._id} className="item">
                <div className="row">
                  <div className="col-12 col-lg-6 col-md-6">
                    <figure className="deals-image">
                      <img src={blogItem?.img} alt={blogItem?.title} />
                    </figure>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6">
                    <article className="deals-content">
                      <div className="addition">{blogItem?.city}</div>
                      <h3>
                        <Link to={`/blog/${blogItem?._id}`}>
                          {blogItem?.title}
                        </Link>
                      </h3>
                      <p>{blogItem?.desc}</p>
                      <ul className="blog_list">
                        <li>
                          <AiTwotoneCalendar />
                          <span>
                            {dayjs(blogItem?.createdAt).format('MM/D/YYYY')}
                          </span>
                        </li>
                        <li>
                          <GrView />
                          <span>{blogItem?.viewedUsers?.length}</span>
                        </li>
                        <li>
                          <AiOutlineComment />
                          <span>{blogItem?.reviews?.length}</span>
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      )}
    </>
  );
};

export default BlogCard;
