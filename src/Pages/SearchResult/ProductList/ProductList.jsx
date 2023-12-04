import React, { useContext } from 'react';
import ListCard from '../../../Components/ListCard/ListCard';
import GridCard from '../../../Components/GridCard/GridCard';
import { mainContext } from '../../../utils/ContextApi';
import { SearchContext } from '../../../utils/SearchContext';

const ProductList = () => {
  const { grid } = useContext(mainContext);
  const { filteredList } = useContext(SearchContext); 
  if (grid === false) {
    return <ListCard products={filteredList} />;
  }

  if (grid === true) {
    return <GridCard products={filteredList} />;
  }
};

export default ProductList;
