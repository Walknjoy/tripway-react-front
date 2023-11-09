import './SearchPageRight.scss';
import SearchPageGridsCount from './SearchPageGridsCount/SearchPageGridsCount';
import ProductList from '../ProductList/ProductList';
const SearchPageRight = () => {
    
  return (
    <div className="search_page_right">
      <SearchPageGridsCount />
      <div className="row">
        <ProductList />
      </div>
    </div>
  );
};

export default SearchPageRight;
