import { call, put } from "redux-saga/effects";
import api from "../../Services/api";
import { Creators as ActionsFavoritas } from "./reducer";
import { Creators as ActionsToast } from "../toast/reducer";

export function* requestFavoritas({ payload }) {
  try {
    const { page, search } = payload;
    const response = yield call(
      api.get,
      `/favoritas?_limit=10&_page=${page ? page : 1}${
        search ? `&descricao_like=${search}` : ""
      }`
    );
    const { data } = response;
    const totalRecords = yield response.headers["x-total-count"];
    yield put(ActionsFavoritas.successFavoritas(data, totalRecords));
  } catch (error) {}
}

export function* requestLastFavoritas({ payload }) {
  try {
    const { limit } = payload;
    const { data } = yield call(
      api.get,
      `/favoritas?_sort=criacao&_order=desc&_limit=${limit}`
    );

    yield put(ActionsFavoritas.successLastFavoritas(data));
  } catch (error) {}
}

export function* addFavorita({ payload }) {
  try {
    const { favorita } = payload;
    const { data } = yield call(api.post, "/favoritas", favorita);
  } catch (error) {
    yield put(
      ActionsToast.createMensagem("Esta imagem já esta nas suas favoritas!")
    );
  }
}

export function* removeFavorita({ payload }) {
  try {
    const { favorita } = payload;
    const { id } = favorita;
    const response = yield call(api.delete, `/favoritas/${id}`);

    yield put(ActionsFavoritas.successRemoveFavorita(id));

    // -- para exemplo= yield put(ActionsFavoritas.requestFavoritas());
  } catch (error) {}
}
