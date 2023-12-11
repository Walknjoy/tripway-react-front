import React, { useContext } from 'react';
import './PriceRangeSearch.scss';
import { FaAngleDown } from 'react-icons/fa';
import Slider from 'react-slider';
import { mainContext } from '../../../../../utils/ContextApi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
 
const PriceRangeSearch = () => {
  const { rangeValues, min, setRangeValues, max } = useContext(mainContext);
  const { type } = useParams();

  const navigate = useNavigate();
  const { search } = useLocation();

  const handleFilterPrice = (e) => {
    e.preventDefault();

    try {
      const queryParams = new URLSearchParams(search);
      queryParams.set('min', rangeValues[0]);
      queryParams.set('max', rangeValues[1]);

      navigate(`/search/${type}?${queryParams.toString()}`);
    } catch (error) {
      console.log('error', error);
    }
  };

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
        </div>
        <form onSubmit={handleFilterPrice}>
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
