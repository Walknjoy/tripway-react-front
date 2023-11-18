import React, { useContext } from 'react';
import './PriceRangeSearch.scss';
import { FaAngleDown } from 'react-icons/fa';
import Slider from 'react-slider';
import { mainContext } from '../../../../../utils/ContextApi';

const PriceRangeSearch = () => {
  const { rangeValues, setRangeValues, max, min } = useContext(mainContext);
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
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default PriceRangeSearch;
