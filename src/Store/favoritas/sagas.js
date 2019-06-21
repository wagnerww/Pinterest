import { call, put } from "redux-saga/effects";
import api from "../../Services/api";
import { Creators as ActionsFavoritas } from "./reducer";
import { Creators as ActionsToast } from "../toast/reducer";

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
