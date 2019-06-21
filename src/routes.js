import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../src/Components/Header";
import Toast from "./Components/Toast";

import Inicio from "./Pages/Inicio";
import Favoritas from "./Pages/Favoritas";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route path="/favoritas" component={Favoritas} />
    </Switch>
    <Toast />
  </BrowserRouter>
);

export default Routes;
