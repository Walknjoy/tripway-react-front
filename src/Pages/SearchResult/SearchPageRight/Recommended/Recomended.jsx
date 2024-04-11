import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import { useLocation, useParams } from 'react-router-dom';
import './Recomended.scss';
import { SearchContext } from '../../../../utils/SearchContext';
import useFetch from '../../../../hooks/useFetch';
const Recomended = () => {
  const { searchState, searchDispatch } = useContext(SearchContext);
  const { filteredList } = searchState;
  const { search } = useLocation();
  const newqueryParams = new URLSearchParams(search);
  const { type } = useParams();
  const city = newqueryParams.get('city');
  const min = newqueryParams.get('min') || 0;
  const max = newqueryParams.get('max') || 1500;
  const starRating = newqueryParams.get('stars') || 0;
  const guest_rating = newqueryParams.get('rating') || 0;

  const link = `/${type ? type : ''}?${city ? `city=${city}` : ''}${
    min ? `&min=${min}` : ''
  }${max ? `&max=${max}` : ''}${starRating > 0 ? `&stars=${starRating}` : ''}
   ${guest_rating > 0 ? `&rating=${guest_rating}` : ''} `;

  const { data } = useFetch(link); 

  function handleFilter(all, view, asc, desc) {
    const filterResult = [...filteredList];
    if (all) {
      searchDispatch({
        type: 'new_search',
        payload: {
          filteredList: data || [],
        },
      });
    } else if (view) {
      const viewResult = filterResult.sort((a, b) => {
        const aLength = a.viewedUsers ? a.viewedUsers.length : 0;
        const bLength = b.viewedUsers ? b.viewedUsers.length : 0;
        return bLength - aLength;
      });
      searchDispatch({
        type: 'new_search',
        payload: {
          filteredList: viewResult || [],
        },
      });
    } else if (asc) {
      newqueryParams.set('sort', 'low to high');
      const filterSortPrice = filterResult
        .slice()
        .sort((a, b) => a.price - b.price);
      searchDispatch({
        type: 'new_search',
        payload: {
          filteredList: filterSortPrice || [],
        },
      });
    } else if (desc) {
      const filterSortPrice = filterResult
        .slice()
        .sort((a, b) => b.price - a.price);
      searchDispatch({
        type: 'new_search',
        payload: {
          filteredList: filterSortPrice || [],
        },
      });
    }
  }

  return (
    <div className="recomended_areas">
      <div className="recomended_wrapper">
        <ul>
          <li>
            <Button
              title="All"
              value="all"
              onClickHandler={() => handleFilter(true, false, false, false)}
            />
          </li>
          <li>
            <Button
              title="View"
              value="view"
              onClickHandler={() => handleFilter(false, true, false, false)}
            />
          </li>

          <li>
            <Button
              title="Price:Low to high"
              value="low to high"
              onClickHandler={() => handleFilter(false, false, true, false)}
            />
          </li>
          <li>
            <Button
              title="Price:High to low"
              value="Price:High to low"
              onClickHandler={() => handleFilter(false, false, false, true)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recomended;
