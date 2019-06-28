import { call, put } from "redux-saga/effects";

import { Creators } from "./reducer";
import api from "../../Services/api";

export function* requestImagens({ payload }) {
  try {
    const { page, search } = payload;
    const response = yield call(
      api.get,
      `/imagens?_limit=10&_page=${page ? page : 1}${
        search ? `&descricao_like=${search}` : ""
      }`
    );

    const { data } = response;
    const totalRecords = yield response.headers["x-total-count"];

    if (page === 1) {
      yield put(Creators.successImagens(data, totalRecords));
    } else {
      yield put(Creators.nextPageImagens(data, totalRecords));
    }
  } catch (error) {
    yield put(Creators.failureImagens());
  }
}
