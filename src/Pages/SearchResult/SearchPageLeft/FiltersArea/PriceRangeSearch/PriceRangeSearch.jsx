import React, { useContext } from 'react';
import './PriceRangeSearch.scss';
import { FaAngleDown } from 'react-icons/fa';
import Slider from 'react-slider';
import { mainContext } from '../../../../../utils/ContextApi';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../../../../hooks/useFetch';

const PriceRangeSearch = () => {
  const { rangeValues, setRangeValues, max, min,setFilteredList } = useContext(mainContext);
  const currentRange = rangeValues[1] - rangeValues[0];
  const navigate = useNavigate();
  const { search } = useLocation();
  const { data } = useFetch('/hotels');
  console.log(data);
  const handleFilter = (e) => {
    e.preventDefault();
    const filterPrice = data.filter((price) => {
      const priceRange = price.price;
      return  priceRange <= currentRange;
    });
    setFilteredList(filterPrice);
    const newqueryParams = new URLSearchParams(search);
    newqueryParams.set('min', rangeValues[0]);
    newqueryParams.set('max', rangeValues[1]);

    navigate(`/search?${newqueryParams.toString()}`, {
      state: {
        ...rangeValues,
      },
    });
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
          <small>Current range:${currentRange}</small>
        </div>
        <form onSubmit={handleFilter}>
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
