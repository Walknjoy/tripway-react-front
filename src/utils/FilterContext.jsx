import { useEffect } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import reducer from '../Reducer/FilterReducer';
import useFetch from '../hooks/useFetch';
import { createContext } from 'react';

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContext = createContext(null);
export const FilterContextProvider = ({ children }) => {
  const { data } = useFetch('/hotels');
  console.log(data);
  const [state, dispatch] = useReducer(reducer, initialState);

  // ?  to set the grid view
  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' });
  };
  const setListView = () => {
    return dispatch({ type: 'SET_LIST_VIEW' });
  };
  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: data });
  }, [data]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView,setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
