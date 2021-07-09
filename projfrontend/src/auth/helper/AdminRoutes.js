import React, { Component } from "react"
import {Route,Redirect} from "react-router-dom";
import {isAuthenticate} from "./index"

function AdminRoutes({ component: Component, ...rest }) {

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticate() && isAuthenticate().user.role === 1 ? (
        <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default AdminRoutes;