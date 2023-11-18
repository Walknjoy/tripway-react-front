import './SearchResult.scss';
import SearchPageLeft from './SearchPageLeft/SearchPageLeft';
import SearchPageRight from './SearchPageRight/SearchPageRight';
import SideBarSearch from './SideBarSearch/SideBarSearch';
import useFetch from '../../hooks/useFetch';
import { useContext, useEffect } from 'react';
import { mainContext } from '../../utils/ContextApi';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../Assets/BreadCrumbs/BreadCrumb';
const SearchResult = () => {
  const { setFilteredList, filterList } = useContext(mainContext);
  const { data } = useFetch('/hotels');
  const { search } = useLocation();
  const { pathname } = useLocation();
  const searchParams = new URLSearchParams(search);
  const city = searchParams.get('city');
  const destination = searchParams.get('destination');
  useEffect(() => {
    if (!data) {
      return;
    }
    if (city) {
      const filteredData = data.filter((hotel) => hotel.city.includes(city));
      setFilteredList(filteredData);
    } else if (destination) {
      const filteredData = data.filter((hotel) =>
        hotel.name.includes(destination)
      );
      setFilteredList(filteredData);
    }
  }, [data, setFilteredList, city, destination]);
  console.log('data', filterList);

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
                {!filterList.length ? (
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
