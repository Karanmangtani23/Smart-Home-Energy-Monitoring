import authService from "../../services/authService";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const user = await authService.login(email, password);
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
  }
};

export const logoutUser = () => (dispatch) => {
  authService.logout();
  dispatch({ type: "LOGOUT" });
};
