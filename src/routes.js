import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../src/Components/Header";

import Inicio from "./Pages/Inicio";
import Favoritas from "./Pages/Favoritas";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route path="/favoritas" component={Favoritas} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
