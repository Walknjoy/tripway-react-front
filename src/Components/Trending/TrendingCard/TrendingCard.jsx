import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { TbCurrencyManat } from 'react-icons/tb';
import { FaLocationDot } from 'react-icons/fa6';
import {AiTwotoneStar} from 'react-icons/ai'
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
                    </figure>
                    <article className="card-content">
                      <h3>
                        {item?.name || item?.title}{' '}
                        {item?.model ? <span>{item?.model} </span> : <></>}
                      </h3>
                      {item?.year ? <p>{item?.year}</p> : <></>}

                      <div className="city">
                      <p>
                        {item?.city}
                      </p>
                      </div>
                      <div className="review">
                        <p>5.0</p>
                        <div className="icon-re">
                        <AiTwotoneStar/>
                        <AiTwotoneStar/>
                        <AiTwotoneStar/>
                        <AiTwotoneStar/>
                        <AiTwotoneStar/>
                        </div>
                      </div>
                      <div className="star-review">
                        <span>Very good</span>
                        <span>({item?.reviews?.length} review)</span>
                      </div>
                      <div className="price">
                      <h4>
                        From
                        <span>Azn</span>
                        <span>  
                          {item?.price}
                        </span>
                      </h4>
                      </div>
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
