import React from 'react';
import './GridCard.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Raiting from '../../Assets/Raiting/Raiting.jsx';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineCheck } from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
const GridCard = () => {
  return <div >
    <section id="cards">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="card">
              <div className="card-wrapper">
                <div className="card-left">
                  <figure>
                    <LazyLoadImage
                      effect="blur"
                      className="image-transition"
                      src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg"
                    />
                  </figure>
                </div>
                <div className="card-center">
                  <div className="hotel-card-header">
                    <Link to="/">
                      Empire Prestige Causeway Bay
                    </Link>
                    <Raiting />
                  </div>
                  <div className="card-location">
                    <FaLocationDot />
                    <span>
                      <Link to="/">
                        United Kingdom
                      </Link>
                    </span>
                    <span>
                      <Link to="/">
                        Show on map
                      </Link>
                    </span>
                  </div>
                  <div className="card-futures">
                    <p>Late Escape Deal</p>
                  </div>
                  <div className="card-description">
                    <div className="room--card-name">
                      <span>Superior Double or Twin Room with City View</span>
                      <p>1 double bed</p>
                    </div>
                    <div className="room--card-futures">
                      <span>Breakfast included</span>
                      <p>
                        <AiOutlineCheck />
                        <strong>
                          Free cancellation
                        </strong>
                      </p>
                      <p>
                        <AiOutlineCheck />
                        <strong>
                        No prepayment needed
                        </strong>
                        – pay at the property
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-right">
                    <div className="hotel--raiting-degree">
                        <p>SuperB</p>
                        <p>9.2</p>
                    </div>
                      <div className="hotel-location">
                        <p><strong>Location 10</strong></p>
                      </div>
                      <div className="hotel--price-details">
                        <p>2 nights, 2 adults</p>
                        <div className="price">
                        <span>AZN 140</span>
                        <p>AZN 254</p>
                        </div>
                        <div className="taxes">
                        <span>+AZN 8 taxes and charges</span>
                        </div>
                      </div>
                      <div className="details-button">
                        <button>See availability
                          <AiOutlineRight/>
                        </button>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default GridCard;
