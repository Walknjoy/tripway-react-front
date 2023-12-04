import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './StarRatingSearch.scss';
import Raiting from '../../../../../Assets/Raiting/Raiting';
const StarRatingSearch = () => {
  return (
    <div className="star_rating_area">
      <button type="button">
        <span>Star rating</span>
        <FaAngleDown />
      </button>
      <ul className="star-rating-list">
        <li>
          <input type="radio" name="starRating" value="1" id="first" />
          <label htmlFor="first">
            <Raiting stars={1} />
          </label>
        </li>
        <li>
          <input type="radio" name="starRating" value="2" id="second" />
          <label htmlFor="second">
            <Raiting stars={2} />
          </label>
        </li>
        <li>
          <input type="radio" name="starRating" value="3" id="third" />
          <label htmlFor="third">
            <Raiting stars={3} />
          </label>
        </li>
        <li>
          <input type="radio" name="starRating" value="4" id="fourth" />
          <label htmlFor="fourth">
            <Raiting stars={4} />
          </label>
        </li>
        <li>
          <input type="radio" name="starRating" value="5" id="fifth" />
          <label htmlFor="fifth">
            <Raiting stars={5} />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default StarRatingSearch;
