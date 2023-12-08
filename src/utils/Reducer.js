export const productReducer = (state, action) => {
  switch (action.type) {
    case 'new_search':
      return { ...state, ...action.payload };
    case 'filter_by_rating':
      return { ...state, byRating: action.payload };
    case 'filter_by_guest_rating':
      return { ...state, guestRating: action.payload };
    case 'filter_by_destination':
      return { ...state, destination: action.payload };
    case 'clear_filter':
      return { ...state, byRating: 0, searchQuery: '' };
    default:
      return state;
  }
};
