import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { TbCurrencyManat } from 'react-icons/tb';
import { FaLocationDot } from 'react-icons/fa6';
const TrendingCard = () => {
  return (
    <div className="trendingCard">
      <div className="row">
        <div className="col-12 col-lg-3 col-md-4 col-sm-6">
          <Link className="card">
            <figure className="card-image">
              <LazyLoadImage src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg" />
              <h3 className="location">
                <FaLocationDot />
                Istanbul,Turkey
              </h3>
            </figure>
            <article className="card-content">
              <h3>
                5-Day Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head
                cskcsjvcskvnscksjc
              </h3>
              <div className="star-review">
                <p>5.0/5.0</p>
                <span>(1 review)</span>
              </div>
              <h4>
                From 
                <span><TbCurrencyManat />540.00</span>
              </h4>
            </article>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
