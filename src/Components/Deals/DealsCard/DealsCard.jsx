import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
const DealsCard = () => {
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
    nav:false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      575: {
        items: 2,
        dots: true,
      },
      768: {
        items: 2,
        dots: true,
      },
      1024: {
        items: 3,
        dots: false,
      },
      1400: {
        items: 4,
        dots: false,
      },
    },
  };
  return (
    <OwlCarousel {...optionsDeal} className="owl-theme deals-carousel">
      <div className="item">
        <figure className="deals-image">
          <img
            src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img1410300.jpeg"
            alt=""
          />
        </figure>
        <article className="deals-content">
          <h3>
            <Link to="">Earning Asiana Club Miles Just Got Easier!</Link>
          </h3>
          <p>Book Hotels and Earn Asiana Club Miles!</p>
        </article>
      </div>
      <div className="item">
        <figure className="deals-image">
          <img
            src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img12-2.jpeg"
            alt=""
          />
        </figure>
        <article className="deals-content">
          <h3>
            <Link to="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </h3>
          <p>Book Hotels and Earn Asiana Club Miles!</p>
        </article>
      </div>
      <div className="item">
        <figure className="deals-image">
          <img
            src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img13-3.jpeg"
            alt=""
          />
        </figure>
        <article className="deals-content">
          <h3>
            <Link to="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error
              beatae odit nesciunt vitae totam!
            </Link>
          </h3>
          <p>Book Hotels and Earn Asiana Club Miles!</p>
        </article>
      </div>
    </OwlCarousel>
  );
};

export default DealsCard;
