import PageTitle from '../../Components/PageTitle/PageTitle';
import "./SearchResult.scss"
import {BsFillGrid3X3GapFill, BsListUl} from "react-icons/bs"
import SearchFilterArea from './SearchFilterArea/SearchFilterArea';
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
             <SearchFilterArea/>
            </div>
            <div className="result_right">
              <div className="row">
                <div className="col-12">
                  <div className="products-header">
                    <div className="products_title">
                      <h3>
                        Hotel:
                        <span>7 results found</span>
                      </h3>
                    </div>
                    <div className="products_grid_btn">
                        <button>
                            <BsListUl/>
                        </button>
                        <button>
                            <BsFillGrid3X3GapFill/>
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
