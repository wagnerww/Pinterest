import { call, put } from "redux-saga/effects";
import api from "../../Services/api";
import { Creators as ActionsFavoritas } from "./reducer";
import { Creators as ActionsToast } from "../toast/reducer";

export function* requestFavoritas() {
  try {
    const { data } = yield call(api.get, "/favoritas");
    yield put(ActionsFavoritas.successFavoritas(data));
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
