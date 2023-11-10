import PageTitle from '../../Components/PageTitle/PageTitle';
import './SearchResult.scss';
import SearchPageLeft from './SearchPageLeft/SearchPageLeft';
import SearchPageRight from './SearchPageRight/SearchPageRight';
import SideBarSearch from './SideBarSearch/SideBarSearch';
const SearchResult = () => {
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
              <SideBarSearch/>
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
