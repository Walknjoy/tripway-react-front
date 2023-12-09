import './SearchResult.scss';
import SearchPageLeft from './SearchPageLeft/SearchPageLeft';
import SearchPageRight from './SearchPageRight/SearchPageRight';
import SideBarSearch from './SideBarSearch/SideBarSearch';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../Assets/BreadCrumbs/BreadCrumb';
import { useContext, useEffect } from 'react';
import { SearchContext } from '../../utils/SearchContext';

const SearchResult = () => {
  const { pathname, search } = useLocation();
  const { searchState } = useContext(SearchContext);
  const { filteredList } = searchState;
  useEffect(() => {
    search && window.scrollTo(0, 0);
  }, [search]);
  return (
    <>
      <main id={pathname === '/search' ? 'main' : ''}>
        <BreadCrumb />
        <div className="all_result_page">
          <div className="container">
            <div className="result_wrapper">
              <div className="result_left">
                <SideBarSearch />
                <SearchPageLeft />
              </div>
              <div className="result_right">
                {!filteredList || filteredList.length === 0 ? (
                  <p className="no-data">
                    No products were found matching your selection.
                  </p>
                ) : (
                  <SearchPageRight />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchResult;
