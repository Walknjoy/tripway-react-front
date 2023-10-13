import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Raiting from '../../../Assets/Raiting/Raiting.jsx';
import {
  BsCalendarCheck,
  BsCompass,
  BsFillFuelPumpDieselFill,
  BsSpeedometer2,
} from 'react-icons/bs';
const TrendingCard = ({ data, loading, endPoint }) => {
  const animatedProps = useSpring({
    opacity: loading ? 0.6 : 1,
    transform: loading ? 'translateY(-2px)' : 'translateY(0px)',
    filter: loading ? 'blur(1px)' : 'blur(0px)',
    config: { duration: 500 },
  });
  return (
    <div className="trendingCard">
      <div className="row">
        {data?.map((item) => {
          return (
            <div className="col-12 col-lg-3 col-md-4 col-sm-6" key={item?._id}>
              <animated.div style={animatedProps}>
                <Link to="" className="card">
                  <figure className="card-image">
                    <LazyLoadImage
                      effect="blur"
                      className="image-transition"
                      src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg"
                    />
                  </figure>
                  <article className="card-content">
                    {item?.name ? (
                      <h3 className="hotel-title">{item?.name}</h3>
                    ) : (
                      <></>
                    )}
                    <h3 className="title">
                      {' '}
                      {endPoint === 'cars' || endPoint === 'tours' ? (
                        <>
                          {item?.title} {item?.model}
                        </>
                      ) : (
                        ''
                      )}
                    </h3>
                    <div className="city">
                      <p>{item?.city}</p>
                    </div>
                    <Raiting
                      stars={item?.rating}
                      reviews={item?.reviews?.length}
                    />
                    <div className="star-review">
                      <p>{item?.rating}.0 / 5.0</p>
                      <span>
                        {item?.rating === 1 ? 'Poor' : ''}
                        {item?.rating === 2 ? 'Fair' : ''}
                        {item?.rating === 3 ? 'Good' : ''}
                        {item?.rating === 4 ? 'Very Good' : ''}
                        {item?.rating === 5 ? 'Excellent' : ''}
                      </span>
                    </div>
                    {endPoint === 'cars' ? (
                      <ul className="cars-about">
                        <li>
                          <BsSpeedometer2 />
                          <span>400km</span>
                        </li>
                        <li>
                          <BsFillFuelPumpDieselFill />
                          <span>Benzin</span>
                        </li>
                        <li>
                          <BsCompass />
                          <span>Automatic</span>
                        </li>
                        <li>
                          <BsCalendarCheck />
                          <span>{item?.year}</span>
                        </li>
                      </ul>
                    ) : (
                      <></>
                    )}

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
