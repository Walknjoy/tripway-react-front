import { createContext, useReducer } from 'react';
import { productReducer } from './Reducer';

export const SearchContext = createContext(null);
const initialState = {
  city: '',
  dates: [],
  price: [],
  byRating: 0,
  guestRating: 0,
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
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
