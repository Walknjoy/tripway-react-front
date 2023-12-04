import React, { useContext } from 'react';
import './SearchPageGridsCount.scss';
import GridViews from '../GridViews/GridViews';
import { SearchContext } from '../../../../utils/SearchContext';
import { useParams } from 'react-router-dom';
const SearchPageGridsCount = () => {
  const { type } = useParams();
  const { filteredList, city } = useContext(SearchContext);
  console.log();
  return (
    <section id="search_page_count_and_gridView">
      <div className="counts">
        <h3 title={`${city}`}>
          <span>{filteredList ? type : 'Search Result'}</span>:{' '}
          {filteredList.length} result found
        </h3>
      </div>
      <div className="gridViews">
        <GridViews />
      </div>
    </section>
  );
};

export default SearchPageGridsCount;
