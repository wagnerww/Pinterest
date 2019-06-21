import { combineReducers } from "redux";

import imagens from "./imagens/reducer";

export default () =>
  combineReducers({
    imagens
  });
