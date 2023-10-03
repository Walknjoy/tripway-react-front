import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { TbCurrencyManat } from 'react-icons/tb';
import { FaLocationDot } from 'react-icons/fa6';
const TrendingCard = ({ data, loading }) => {
  return (
    <div className="trendingCard">
      <div className="row">
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {data?.map((item) => {
              return (
                <div
                  className="col-12 col-lg-3 col-md-4 col-sm-6"
                  key={item?._id}>
                  <Link className="card">
                    <figure className="card-image">
                      <LazyLoadImage src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg" />
                      <h3 className="location">
                        <FaLocationDot />
                        {item?.city}
                      </h3>
                    </figure>
                    <article className="card-content">
                      <h3>
                        {item?.name || item?.title}{' '}
                        {item?.model ? <span>{item?.model} </span> : <></>}
                      </h3>
                      <div className="star-review">
                        <p>5.0/5.0</p>
                        <span>({item?.reviews?.length} review)</span>
                      </div>
                      <h4>
                        From
                        <span>
                          <TbCurrencyManat />
                          {item?.price}
                        </span>
                      </h4>
                      {item?.year ? <p>{item?.year}</p> : <></>}
                    </article>
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default TrendingCard;
