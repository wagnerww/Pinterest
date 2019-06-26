import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Toast from "./Components/Toast";

import Inicio from "./Pages/Inicio";
import Favoritas from "./Pages/Favoritas";

const Main = ({ component: Component, ...props }) => (
  <Fragment>
    <Header {...props} />
    <Component />
    <Toast />
  </Fragment>
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Main component={Inicio} {...props} />}
      />
      <Route
        exact
        path="/favoritas"
        render={props => <Main component={Favoritas} {...props} />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
