import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './StarRatingSearch.scss';
const StarRatingSearch = () => {
  return (
    <div className="star_rating_area">
      <button type="button">
        <span>Star rating</span>
        <FaAngleDown />
      </button>
      <ul className="star-rating-list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default StarRatingSearch;
