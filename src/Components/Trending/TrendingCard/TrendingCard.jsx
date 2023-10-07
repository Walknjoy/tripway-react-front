import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { AiTwotoneStar } from 'react-icons/ai';
import Raiting from '../../../Assets/Raiting/Raiting.jsx';
const TrendingCard = ({ data, loading }) => {
  const animatedProps = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? 'translateY(-10px)' : 'translateY(0px)',
    filter: loading ? 'blur(10px)' : 'blur(0px)',
  });
  return (
    <div className="trendingCard">
      <div className="row">
        {data?.map((item) => {
          console.log(data);
          return (
            <div className="col-12 col-lg-3 col-md-4 col-sm-6" key={item?._id}>
              <animated.div style={animatedProps}>
                <Link to="" className="card">
                  <figure className="card-image">
                    <LazyLoadImage
                      effect="blur"
                      src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg"
                    />
                  </figure>
                  <article className="card-content">
                    <h3>
                      {item?.name || item?.title}{' '}
                      {item?.model ? <span>{item?.model} </span> : <></>}
                    </h3>
                    {item?.year ? <p>{item?.year}</p> : <></>}

                    <div className="city">
                      <p>{item?.city}</p>
                    </div>
                    <Raiting
                      stars={item?.rating}
                      reviews={item?.reviews?.length}
                    />
                    <div className="star-review">
                      <p>{item?.rating}</p>
                      <span>
                        {item?.rating === 1 ? 'Poor' : ''}
                        {item?.rating === 2 ? 'Fair' : ''}
                        {item?.rating === 3 ? 'Good' : ''}
                        {item?.rating === 4 ? 'Very Good' : ''}
                        {item?.rating === 5 ? 'Excellent' : ''}
                      </span>
                    </div>
                    <div className="price">
                      <h4>
                        From
                        <span>Azn</span>
                        <span>{item?.price}</span>
                      </h4>
                    </div>
                  </article>
                </Link>
              </animated.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCard;
