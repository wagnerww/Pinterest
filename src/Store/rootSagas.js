import { all, takeLatest } from "redux-saga/effects";

import { Types as ImagensTypes } from "./imagens/reducer";
import { requestImagens } from "./imagens/sagas";

import { Types as FavoritasTypes } from "./favoritas/reducer";
import { addFavorita } from "./favoritas/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(ImagensTypes.REQUEST_IMAGENS, requestImagens),
    takeLatest(FavoritasTypes.ADD_FAVORITA, addFavorita)
  ]);
}
