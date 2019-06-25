import { all, takeLatest } from "redux-saga/effects";

import { Types as ImagensTypes } from "./imagens/reducer";
import { requestImagens } from "./imagens/sagas";

import { Types as FavoritasTypes } from "./favoritas/reducer";
import {
  addFavorita,
  requestFavoritas,
  removeFavorita,
  requestLastFavoritas
} from "./favoritas/sagas";

export default function* rootSaga() {
  return yield all([
    /* IMAGENS */
    takeLatest(ImagensTypes.REQUEST_IMAGENS, requestImagens),

    /* FAVORITAS */
    takeLatest(FavoritasTypes.REQUEST_FAVORITA, requestFavoritas),
    takeLatest(FavoritasTypes.ADD_FAVORITA, addFavorita),
    takeLatest(FavoritasTypes.REMOVE_FAVORITA, removeFavorita),
    takeLatest(FavoritasTypes.REQUEST_LAST_FAVORITAS, requestLastFavoritas)
  ]);
}
