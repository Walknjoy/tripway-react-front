export const productReducer = (state, action) => {
  switch (action.type) {
    case 'new_search':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
