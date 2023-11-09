import React, { useContext } from 'react';
import './SearchPageGridsCount.scss';
import GridViews from '../GridViews/GridViews';
import { mainContext } from '../../../../utils/ContextApi';
const SearchPageGridsCount = () => {
  const { filterList, sideBarHotel } = useContext(mainContext);
  return (
    <section id="search_page_count_and_gridView">
      <div className="counts">
        <h3 title="">
          {' '}
          <span>{sideBarHotel.type}</span>: {filterList.length} result found
        </h3>
      </div>
      <div className="gridViews">
        <GridViews />
      </div>
    </section>
  );
};

export default SearchPageGridsCount;
