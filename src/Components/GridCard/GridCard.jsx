import React from 'react';
import './GridCard.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Raiting from '../../Assets/Raiting/Raiting.jsx';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
const GridCard = () => {
  return <div >
    <section id="cards">
      <div className="container">
        <div className="row">
          <div className="col-9 card">
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
                <div className="card-header">
                  <p>
                    Limited Time Offer
                  </p>
                  <p><Raiting /></p>
                </div>
                <div className="card-title">
                  <Link to="/">
                  Empire Prestige Causeway Bay
                  </Link>
                </div>
                <div className="card-location">
                  <FaLocationDot/>
                  <Link to="/">
                     Greater London, United Kingdom 
                  </Link>
                </div>
              </div>
              <div className="card-right">
                <button type='submit'>See Avaibality</button>
              </div>
            </div>
          </div>
          <div className="col-12">
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
                <div className="card-header">
                  <p>
                    Limited Time Offer
                  </p>
                  <p><Raiting /></p>
                </div>
                <div className="card-title">
                  <Link to="/">
                  Empire Prestige Causeway Bay
                  </Link>
                </div>
                <div className="card-location">
                  <FaLocationDot/>
                  <Link to="/">
                     Greater London, United Kingdom 
                  </Link>
                </div>
              </div>
              <div className="card-right">
                <button type='submit'>See Avaibality</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default GridCard;
