const initialState = { data: [], error: null };

const energyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ENERGY_SUCCESS":
      return { ...state, data: action.payload };
    case "FETCH_ENERGY_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default energyReducer;
