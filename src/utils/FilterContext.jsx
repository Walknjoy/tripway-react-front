import { useEffect } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import reducer from '../Reducer/FilterReducer';
import { createContext } from 'react';
import { mainContext } from './ContextApi';

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContext = createContext(null);
export const FilterContextProvider = ({ children }) => {
  const { filterList } = useContext(mainContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  // ?  to set the grid view
  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' });
  };
  const setListView = () => {
    return dispatch({ type: 'SET_LIST_VIEW' });
  };
  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: filterList });
  }, [filterList]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
