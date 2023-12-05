import React, { useCallback, useContext, useEffect } from 'react';
import './PriceRangeSearch.scss';
import { FaAngleDown } from 'react-icons/fa';
import Slider from 'react-slider';
import { mainContext } from '../../../../../utils/ContextApi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { SearchContext } from '../../../../../utils/SearchContext';
import useFetch from '../../../../../hooks/useFetch';

const PriceRangeSearch = () => {
  const { rangeValues, min, setRangeValues, max } = useContext(mainContext);
  const { type } = useParams();
  const { state } = useLocation();
  const { searchDispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const { search } = useLocation();

  const { data } = useFetch(
    `/${type}?city=${state.city}&${
      state.price ? `&min=${state.price[0]}&max=${state.price[1]}` : ''
    }`
  );

  useEffect(() => {
    searchDispatch({
      type: 'new_search',
      payload: {
        filteredList: data || [],
      },
    });
  }, [searchDispatch, data]);

  const handleFilterPrice = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        searchDispatch({
          type: 'new_search',
          payload: {
            price: rangeValues,
            options: state.options,
          },
        });

        const queryParams = new URLSearchParams(search);
        queryParams.set('min', rangeValues[0]);
        queryParams.set('max', rangeValues[1]);

        navigate(`/search/${type}?${queryParams.toString()}`, {
          state: {
            ...state,
            price: rangeValues,
          },
        });
      } catch (error) {
        console.log('error', error);
      }
    },
    [navigate, rangeValues, search, searchDispatch, state, type]
  );

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
