import React, { useState } from 'react';
import './PriceRangeSearch.scss';
import { FaAngleDown } from 'react-icons/fa';
import Slider from 'react-slider';
const min = 10;
const max = 1500;
const PriceRangeSearch = () => {
  const [rangeValues, setRangeValues] = useState([min, max]);
 const currentRange = rangeValues[1] - rangeValues[0];
  return (
    <div className="price_range_search">
      <button type="button">
        <span>Price range</span>
        <FaAngleDown />
      </button>
      <div className="filters_areas">
        <div className="price_amount_between">
          <p>
            ${rangeValues[0]}-${rangeValues[1]}
          </p>
          <small>Current range:${currentRange}</small>
        </div>
        <Slider
          className="react_range_slider"
          value={rangeValues}
          min={min}
          max={max}
          onChange={setRangeValues}
        />
        <div className="filter_btn">
          <button type="submit">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSearch;
