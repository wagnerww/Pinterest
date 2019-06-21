import { combineReducers } from "redux";

import imagens from "./imagens/reducer";
import favoritas from "./favoritas/reducer";
import toast from "./toast/reducer";

export default () =>
  combineReducers({
    imagens,
    favoritas,
    toast
  });
