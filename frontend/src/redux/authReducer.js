const initialState = { user: null, isAuthenticated: false, error: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "LOGIN_FAILURE":
      return { ...state, error: action.payload, isAuthenticated: false };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
