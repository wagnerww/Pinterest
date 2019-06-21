import { all, takeLatest } from "redux-saga/effects";

// ---- AUTH
import { Types as ImagensTypes } from "./imagens/reducer";
import { requestImagens } from "./imagens/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(ImagensTypes.REQUEST_IMAGENS, requestImagens)]);
}
