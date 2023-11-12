import React, { useContext } from 'react';
import './SearchPageGridsCount.scss';
import GridViews from '../GridViews/GridViews';
import { mainContext } from '../../../../utils/ContextApi';
import { useLocation } from 'react-router-dom';
const SearchPageGridsCount = () => {
  const { filterList } = useContext(mainContext);
  const { state } = useLocation();
  return (
    <section id="search_page_count_and_gridView">
      <div className="counts">
        <h3 title="">
          <span>{state ? state.type : 'Search Result'}</span>: {filterList.length} result found
        </h3>
      </div>
      <div className="gridViews">
        <GridViews />
      </div>
    </section>
  );
};

export default SearchPageGridsCount;
