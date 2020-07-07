const initialState = {
  loading: false,
  results: [],
};

const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AWAITING_DATA":
      return {
        ...state,
        loading: true,
      };
    case "REJECTED_DATA":
      return {
        ...state,
        loading: false,
      };
    case "SUCCESS_DATA":
      return {
        ...state,
        loading: false,
        results: payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
