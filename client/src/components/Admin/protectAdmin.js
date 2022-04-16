import React from "react";
import { Redirect, Route } from "react-router-dom";
const ProtectAdmin = ({ component: Component, ...restOfProps }) => {
  const user = localStorage.getItem("AdminToken");

  return (
    <div>
      <Route
        {...restOfProps}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/admin" />
        }
      />
    </div>
  );
};

export default ProtectAdmin;
