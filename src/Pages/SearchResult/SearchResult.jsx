import PageTitle from '../../Components/PageTitle/PageTitle';
import './SearchResult.scss';
import SearchPageLeft from './SearchPageLeft/SearchPageLeft';
import SearchPageRight from './SearchPageRight/SearchPageRight';
import SideBarSearch from './SideBarSearch/SideBarSearch';
import useFetch from '../../hooks/useFetch';
import { useContext, useEffect } from 'react';
import { mainContext } from '../../utils/ContextApi';
import { useLocation } from 'react-router-dom';
const SearchResult = () => {
  const { setFilteredList } = useContext(mainContext);
  const { data } = useFetch('/hotels');
  const { search } = useLocation();
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
  return (
    <>
      <PageTitle
        title={'Hotel result'}
        backgroundImg={
          'https://cdn2.paraty.es/bg-corporativa/images/6a92de9242aca95=s1600'
        }
      />
      <div className="all_result_page">
        <div className="container">
          <div className="result_wrapper">
            <div className="result_left">
              <SideBarSearch />
              <SearchPageLeft />
            </div>
            <div className="result_right">
              <SearchPageRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
