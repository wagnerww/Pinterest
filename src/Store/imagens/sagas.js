import { call, put } from "redux-saga/effects";

import { Creators } from "./reducer";
import api from "../../Services/api";

export function* requestImagens() {
  try {
    const { data } = yield call(api.get, "/imagens");

    yield put(Creators.successImagens(data));
  } catch (error) {
    yield put(Creators.failureImagens());
  }
}
