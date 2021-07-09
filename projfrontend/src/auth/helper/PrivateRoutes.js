import React, { Component } from "react"
import {Route,Redirect} from "react-router-dom";
import {isAuthenticate} from "./index"

function PrivateRoutes({ component: Component, ...rest }) {

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticate() ? (
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

  export default PrivateRoutes;