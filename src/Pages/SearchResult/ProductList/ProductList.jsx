import React from 'react';
import { useFilterContext } from '../../../utils/FilterContext';
import ListCard from '../../../Components/ListCard/ListCard';
import GridCard from '../../../Components/GridCard/GridCard';
const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <ListCard products={filter_products} />;
  }
  if (grid_view === false) {
    return <GridCard products={filter_products} />;
  }
};

export default ProductList;
