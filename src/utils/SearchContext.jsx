import { createContext,   useReducer } from 'react';
import { productReducer } from './Reducer';

export const SearchContext = createContext(null);
const initialState = {
  filteredList: [],
};

function SearchContextProvider({ children }) {
  const [searchState, searchDispatch] = useReducer(
    productReducer,
    initialState
  );

  const Values = { searchState, searchDispatch };
  return (
    <SearchContext.Provider value={Values}>{children}</SearchContext.Provider>
  );
}

export default SearchContextProvider;
