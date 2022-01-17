import React from "react";
import { Redirect, Route } from "react-router-dom";
const Protectedroute = ({ component: Component, ...restOfProps }) => {
  const user = localStorage.getItem("UserToken");

  return (
    <div>
      <Route
        {...restOfProps}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </div>
  );
};

export default Protectedroute;
