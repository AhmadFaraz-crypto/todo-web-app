/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Router, Switch } from "react-router-dom";
import history from "../../routes/history";
import RoutePublic from "./RoutePublic";
// import RoutePrivate from "./RoutePrivate";
import SideBar from "../../components/SideBar";
import Login from "../../containers/LoginPage/loadable";
import WebTask from "../../containers/WebTask/loadable";
import WebLocation from "../../containers/WebLocation/loadable";
import NotFoundPage from "../../containers/NotFoundPage/loadable";

const AppRoutes = () => {
  return (
    <>
      {history.location.pathname === "/" ? (
        ""
      ) : (
        <div className="d-flex flex-row sidebar-wrapper">
          <SideBar history={history} />
        </div>
      )}
      <Router history={history}>
        <Switch>
          <RoutePublic
            isAuthenticated={false}
            exact
            path="/"
            component={Login}
          />
          <RoutePublic
            isAuthenticated={false}
            exact
            path="/web-task"
            component={WebTask}
          />
          <RoutePublic
            isAuthenticated={false}
            exact
            path="/web-location"
            component={WebLocation}
          />
          <RoutePublic
            isAuthenticated={false}
            exact
            path=""
            component={NotFoundPage}
          />
        </Switch>
      </Router>
    </>
  );
};

export default AppRoutes;
