import React from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = React.useContext(AuthContext);
  return user ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
