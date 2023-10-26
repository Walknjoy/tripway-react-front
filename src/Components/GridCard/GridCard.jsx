import React from 'react';
import './GridCard.scss';
import LazyLoadImg from '../../Assets/LazyLoadImg';
import Raiting from '../../Assets/Raiting/Raiting';
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
const GridCard = () => {
  return (
    <div className="col-12 col-xl-9 col-lg-9">
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
                <h3>Lorem ipsum dolor sit.</h3>
                <Raiting stars={4.5} reviews={30} />
              </div>
              <div className="locations_side">
                <Link to="">
                  <span>Nasimi,Baku</span>
                  <BsDot />
                  <span>Show on map</span>
                </Link>
                <BsDot />
                <span>0.7 km from centre</span>
                <BsDot />
                <span>Metro access</span>
              </div>
              <div className="travel_sustainable">
                <svg
                  xmlns='xmlns="http://www.w3.org/2000/svg"'
                  viewBox="0 0 72 24">
                  <path
                    d="M16.29 19.72c4.22-4.22 8.4-17.56 6.7-19.26S7.95 2.93 3.73 7.16C.67 10.22.62 15.58
                   3.5 18.98L15.62 6.86c.29-.29.77-.29 1.06 0s.29.77 0 1.06L4.57 20.03l-2.14 2.14c-.29.29-.29.77 
                   0 1.06s.77.29 1.06 0l2.34-2.34c3.34 1.88 7.78 1.51 10.46-1.17ZM46.99.46c-1.15-1.16-6.85.55-8.56
                    1.11-2.26.73-7.83 2.73-10.7 5.6-1.5 1.5-2.36 3.69-2.35 6.01 0 2.18.76 4.21 2.12 5.81l-3.18 3.18c-.29.29-.29.77 
                    0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.18-3.18c1.64 1.35 3.72 2.04 5.78 2.04 2.2 0 4.37-.78 5.94-2.35 2.87-2.87 
                    4.87-8.44 5.6-10.7.55-1.72 2.27-7.41 1.1-8.57Zm-7.76 18.21c-2.21 2.21-6.54 2.77-9.6.31L40.68 7.93c.29-.29.29-.77 0-1.06s-.77-.29-1.06 
                    0L28.56 17.93c-1.08-1.31-1.67-2.97-1.68-4.75 0-1.93.69-3.73 1.91-4.95 3.87-3.87 14.19-6.68 16.78-6.68.13 0 .24 0 .33.02.31 1.85-2.59 13.03-6.67 
                    17.11ZM70.99.46c-1.15-1.16-6.85.55-8.56 1.11-2.26.73-7.83 2.73-10.7 5.6-1.5 1.5-2.36 3.69-2.35 6.01 0 2.18.76 4.21 2.12 5.81l-3.18 3.18c-.29.29-.29.77
                     0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.18-3.18c1.64 1.35 3.72 2.04 5.78 2.04 2.2 0 4.37-.78 5.94-2.35 2.87-2.87 4.87-8.44 5.6-10.7.55-1.72 2.27-7.41 1.1-8.57Zm-7.76 
                     18.21c-2.21 2.21-6.54 2.77-9.6.31L64.68 7.93c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0L52.56 17.93c-1.08-1.31-1.67-2.97-1.68-4.75 0-1.93.69-3.73 1.91-4.95 3.87-3.87 14.19-6.68 16.78-6.68.13 0
                      .24 0 .33.02.31 1.85-2.59 13.03-6.67 17.11Z"></path>
                </svg>
                <span>Travel Sustainable Level 1</span>
              </div>
            </div>
            <div className="first_line_right">
              <div className="rating_and_emations">
                <span>Superb</span>
                <p>5.0 / 5.0</p>
              </div>
            </div>
          </div>
          <div className="content_center">
            <span>Limited-time Deal</span>
          </div>
          <div className="content_end">
            <div className="content_end_left">
              <h4>Standard Double Room</h4>
              <ul className="content_end_left_list">
                <li>1 large double bed</li>
                <li><AiOutlineCheck /> Free cancellation</li>
                <li><AiOutlineCheck /> <strong>No prepayment needed</strong>  – pay at the property</li>
              <li>
              Only 1 room left at this price on our site
              </li>
              </ul>
            </div>
            <div className="content_end_right">
                <ul className='content_end_list_count'>
                  <span>Price for</span>
                  <li>
                    <strong>2 adults,</strong>
                  </li>
                  <li>
                    <strong>1 child,</strong>
                  </li>
                  <li>
                   <strong> 3 nights</strong>
                  </li>
                </ul>
                <div className="price_area">
                  <del>AZN 180</del>
                  <span>AZN 72</span>
                </div>
                <div className="taxes_and_changes">
                  <span>+45 Azn taxes and charges</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
