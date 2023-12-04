import { createContext, useReducer } from 'react';

export const SearchContext = createContext(null);
const initialState = {
  city: '',
  dates: [],
  price: [],
  rating: undefined,
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
  filteredList: [],
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'new_search':
      return { ...state, ...action.payload };
    case 'reset_search':
      return initialState;
    default:
      return state;
  }
};
function SearchContextProvider({ children }) {
  const [searchState, searchDispatch] = useReducer(searchReducer, initialState);
  const Values = {
    ...searchState,
    searchDispatch,
  };
  return (
    <SearchContext.Provider value={Values}>{children}</SearchContext.Provider>
  );
}

export default SearchContextProvider;
