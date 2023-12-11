import './SearchResult.scss';
import SearchPageLeft from './SearchPageLeft/SearchPageLeft';
import SearchPageRight from './SearchPageRight/SearchPageRight';
import SideBarSearch from './SideBarSearch/SideBarSearch';
import BreadCrumb from '../../Assets/BreadCrumbs/BreadCrumb';
import { useContext, useEffect } from 'react';
import { SearchContext } from '../../utils/SearchContext';
import { useLocation, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
const SearchResult = () => {
  const { pathname, search } = useLocation();
  const { searchState, searchDispatch } = useContext(SearchContext);
  const { filteredList } = searchState;
  console.log(filteredList);
  const newqueryParams = new URLSearchParams(search);
  const { type } = useParams();
  const city = newqueryParams.get('city');
  const min = newqueryParams.get('min') || 0;
  const max = newqueryParams.get('max') || 1500;
  const guestRating = newqueryParams.get('guestRating') || 0;
  const starRating = newqueryParams.get('starRating') || 0;

  const link = `/${type ? type : ''}?${city ? `city=${city}` : ''}${
    min ? `&min=${min}` : ''
  }${max ? `&max=${max}` : ''}${starRating > 0 ? `&stars=${starRating}` : ''}
   ${guestRating > 0 ? `&guest_rating=${guestRating}` : ''} `;

  const { data, loading } = useFetch(link);

  useEffect(() => {
    if (!loading) {
      searchDispatch({
        type: 'new_search',
        payload: {
          filteredList: data || [],
        },
      });
    }
  }, [searchDispatch, data, loading]);
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
