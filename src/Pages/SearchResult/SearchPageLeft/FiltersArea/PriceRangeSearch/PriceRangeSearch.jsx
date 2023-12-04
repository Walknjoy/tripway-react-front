import React, { useContext } from 'react';
import './PriceRangeSearch.scss';
import { FaAngleDown } from 'react-icons/fa';
import Slider from 'react-slider';
import { mainContext } from '../../../../../utils/ContextApi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { SearchContext } from '../../../../../utils/SearchContext';

const PriceRangeSearch = () => {
  const { rangeValues, setRangeValues, max, min } = useContext(mainContext);
  const { type } = useParams();
  const { state } = useLocation();
  const { searchDispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleFilterPrice = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(search);
    queryParams.set('min', rangeValues[0]);
    queryParams.set('max', rangeValues[1]);

    try {
      const link = `/${type}?city=${state.city}&min=${rangeValues[0]}&max=${rangeValues[1]}`;
      const response = await fetch(link);
      const data = await response.json();

      searchDispatch({
        type: 'new_search',
        payload: {
          filteredList: data || [],
          price: rangeValues,
          options: state.options,
        },
      });

      navigate(`/search/${type}?${queryParams.toString()}`, {
        state: {
          city: state.city,
          price: rangeValues,
          dates: state.dates,
          options: state.options,
          filteredList: data || [],
        },
      });
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
