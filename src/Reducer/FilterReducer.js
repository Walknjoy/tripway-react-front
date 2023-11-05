const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      const filter_products = Array.isArray(action.payload)
        ? [...action.payload]
        : [];
      return {
        ...state,
        filter_products,
        all_products: filter_products, // Make sure this is what you want
      };
    case 'SET_GRID_VIEW':
      return {
        ...state,
        grid_view: true,
      };
    case 'SET_LIST_VIEW':
      return {
        ...state,
        grid_view: false,
      };
    default:
      return state;
  }
};

export default filterReducer;
