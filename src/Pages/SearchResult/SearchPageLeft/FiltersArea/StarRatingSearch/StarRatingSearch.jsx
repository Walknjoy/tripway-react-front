import React, { useContext } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './StarRatingSearch.scss';
import ByRating from '../ByRating/ByRating';
import { SearchContext } from '../../../../../utils/SearchContext';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
const StarRatingSearch = () => {
  const { searchDispatch, searchState } = useContext(SearchContext);
  const { byRating } = searchState;
  const { type } = useParams();
  const navigate = useNavigate();
  const { search, state } = useLocation();
  const handleClick = (star) => {
    const queryParams = new URLSearchParams(search);
    const newRating = star + 1;
    const updatedRating = state.byRating === newRating ? 0 : newRating;

    queryParams.set('gold_star_rating', updatedRating);
    searchDispatch({
      type: 'filter_by_rating',
      payload: updatedRating,
    });

    navigate(`/search/${type}?${queryParams.toString()}`, {
      state: {
        city: state.city,
        dates: state.dates,
        options: state.options,
        byRating: updatedRating,
      },
    });
  };

  return (
    <div className="star_rating_area">
      <button type="button">
        <span>Guest rating</span>
        <FaAngleDown />
      </button>
      <ByRating
        rating={byRating}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        state={state}
      />
    </div>
  );
};

export default StarRatingSearch;
