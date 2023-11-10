import PageTitle from '../../Components/PageTitle/PageTitle';
import './SearchResult.scss';
import SearchPageLeft from './SearchPageLeft/SearchPageLeft';
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
              <SearchPageLeft/>
            </div>
            {/* <div className="result_right">
              <div className="row">
                <div className="col-12">
                  <div className="products-header">
                    <div className="products_title">
                      <h3>
                        Hotel:
                        <span>{filterList?.length} results found</span>
                      </h3>
                    </div>
                    <div className="products_grid_btn">
                      <GridViews />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products_card">
                <div className="row">
                  <ProductList />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
