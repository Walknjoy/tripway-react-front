import React, { useState } from 'react';
import './FiltersArea.scss';
import StarRatingSearch from './StarRatingSearch/StarRatingSearch';
import PriceRangeSearch from './PriceRangeSearch/PriceRangeSearch';
const FiltersArea = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <div className="filters_card_areas">
      <StarRatingSearch handleClick={handleClick} activeIndex={activeIndex} />
      <PriceRangeSearch handleClick={handleClick} activeIndex={activeIndex} />
    </div>
  );
};

export default FiltersArea;
