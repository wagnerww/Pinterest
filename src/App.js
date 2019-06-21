import React, { Fragment } from "react";
import "./Config/reactotron";

import { Provider } from "react-redux";
import store from "./Store";

import GlobalStyled from "./Styles";

import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Routes />
    </Provider>
  );
}

export default App;
