import './SearchPageRight.scss';
import SearchPageGridsCount from './SearchPageGridsCount/SearchPageGridsCount';
import ProductList from '../ProductList/ProductList';
import Recomended from './Recommended/Recomended';
const SearchPageRight = () => {
 
  return (
    <div className="search_page_right">
      <SearchPageGridsCount />
      <Recomended />
      <div className="row">
        <ProductList />
      </div>
    </div>
  );
};

export default SearchPageRight;
