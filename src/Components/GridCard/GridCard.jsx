import React from 'react';
import './GridCard.scss';
import LazyLoadImg from '../../Assets/LazyLoadImg';
import Raiting from '../../Assets/Raiting/Raiting';
import { Link, useLocation } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const GridCard = ({ products }) => {
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  // Get values from the URL
  const guests = parseInt(urlParams.get('guests'));
  const rooms = parseInt(urlParams.get('rooms'));
  const startDateString = urlParams.get('startDate');
  const endDateString = urlParams.get('endDate');

  // Convert date strings to Date objects
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  // Calculate the difference in nights
  const timeDifference = endDate.getTime() - startDate.getTime();
  console.log(timeDifference);
  const nightCount = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return (
    <>
      {products?.map((element) => {
        return (
          <div className="col-12" key={element?._id}>
            <div className="grid_card_wrapper">
              <figure className="grid_card_image">
                <LazyLoadImg
                  src="https://cf.bstatic.com/xdata/images/hotel/square200/481507081.webp?k=7222326b25b24e0b65a8e684f9637c98afde3e22ffc85e7bd098ece033b1d73b&o="
                  alt=""
                  width="200px"
                  height="200px"
                />
              </figure>
              <div className="grid_card_content">
                <div className="content_top">
                  <div className="first_line_left">
                    <div className="title_line_top">
                      <h3>{element?.name}</h3>
                    </div>
                    <div>
                      {' '}
                      <Raiting
                        stars={element.rating}
                        reviews={element.reviews.length}
                      />
                    </div>
                    <div className="locations_side">
                      <Link to="">
                        <span>{element.city}</span>
                        <BsDot />
                        <span>Show on map</span>
                      </Link>
                      <BsDot />
                      <span>
                        {element.distance} from {element.address}
                      </span>
                      <BsDot />
                      <span>Metro access</span>
                    </div>
                  </div>
                  <div className="first_line_right">
                    <div className="rating_and_emations">
                      <span>
                        {' '}
                        {element?.rating === 1 ? 'Poor' : ''}
                        {element?.rating === 2 ? 'Fair' : ''}
                        {element?.rating === 3 ? 'Good' : ''}
                        {element?.rating === 4 ? 'Very Good' : ''}
                        {element?.rating === 5 ? 'Excellent' : ''}
                      </span>
                      <p>{element.rating}.0 / 5.0</p>
                    </div>
                  </div>
                </div>
                <div className="content_end">
                  <div className="content_end_left">
                    <h4>{element.title}</h4>
                    <ul className="content_end_left_list">
                      <li>1 large double bed</li>
                      <li>
                        <AiOutlineCheck /> Free cancellation
                      </li>
                      <li>
                        <AiOutlineCheck />{' '}
                        <strong>Online payment is possible</strong> – via the
                        Walknjoy
                      </li>
                    </ul>
                  </div>
                  <div className="content_end_right">
                    <ul className="content_end_list_count">
                      <span>Price for</span>
                      <li>
                        <strong>{guests} adults,</strong>
                      </li>
                      <li>
                        <strong> {nightCount} nights</strong>
                      </li>
                    </ul>
                    <div className="price_area">
                      {element?.percent === 0 ? (
                        <span>
                          AZN{' '}
                          {element.price.toFixed(2) *
                            nightCount *
                            guests *
                            rooms}
                        </span> // Display the original price
                      ) : (
                        <>
                          <del>
                            AZN{' '}
                            {(
                              (element?.price *
                                nightCount *
                                guests *
                                rooms *
                                element?.percent) /
                              100
                            ).toFixed(2)}
                          </del>
                          <br />
                          <span>
                            AZN{' '}
                            {(
                              element?.price * nightCount * guests * rooms -
                              (element?.price *
                                nightCount *
                                guests *
                                rooms *
                                element?.percent) /
                                100
                            ).toFixed(2)}
                          </span>{' '}
                          {/* Display the discounted price */}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GridCard;
