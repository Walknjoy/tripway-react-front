import React, { useContext } from 'react';
import ListCard from '../../../Components/ListCard/ListCard';
import GridCard from '../../../Components/GridCard/GridCard';
import { mainContext } from '../../../utils/ContextApi';

const ProductList = () => {
  const { grid, filterList } = useContext(mainContext);

  if (grid === false) {
    return <ListCard products={filterList} />;
  }

  if (grid === true) {
    return <GridCard products={filterList} />;
  }
};

export default ProductList;
