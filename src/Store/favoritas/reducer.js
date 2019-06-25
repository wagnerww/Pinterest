import Immutable from "seamless-immutable";

export const Types = {
  REQUEST_FAVORITA: "FAVORITA/REQUEST_FAVORITA",
  SUCCESS_FAVORITA: "FAVORITA/SUCCESS_FAVORITA",
  ADD_FAVORITA: "FAVORITA/ADD_FAVORITA",
  REMOVE_FAVORITA: "FAVORITA/REMOVE_FAVORITA",
  SUCCESS_REMOVE_FAVORITA: "FAVORITA/SUCCESS_REMOVE_FAVORITA",
  REQUEST_LAST_FAVORITAS: "FAVORITA/REQUEST_LAST_FAVORITAS",
  SUCCESS_LAST_FAVORITAS: "FAVORITA/SUCCESS_LAST_FAVORITAS"
};

const INITIAL_STATE = Immutable({
  data: [],
  lastFavoritas: []
});

export default function favoritas(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SUCCESS_FAVORITA:
      return { ...state, data: action.payload.data };

    case Types.ADD_FAVORITA:
      action.payload.favorita.criacao = Date.now();
      return {
        ...state,
        lastFavoritas: [action.payload.favorita, ...state.lastFavoritas]
      };

    case Types.SUCCESS_REMOVE_FAVORITA:
      /* VERBOSO ---- const data = state.data.filter((favorita) => {
        return favorita.id !== action.payload.id;
      }); */
      const data = state.data.filter(
        favorita => favorita.id !== action.payload.id
      );

      const lastFavoritas = state.lastFavoritas.filter(
        favorita => favorita.id !== action.payload.id
      );

      return { data, lastFavoritas };

    case Types.SUCCESS_LAST_FAVORITAS:
      return { ...state, lastFavoritas: action.payload.data };

    default:
      return state;
  }
}

export const Creators = {
  requestFavoritas: () => ({
    type: Types.REQUEST_FAVORITA,
    payload: {}
  }),

  successFavoritas: data => ({
    type: Types.SUCCESS_FAVORITA,
    payload: { data }
  }),

  addFavoritas: favorita => ({
    type: Types.ADD_FAVORITA,
    payload: { favorita }
  }),

  removeFavoritas: favorita => ({
    type: Types.REMOVE_FAVORITA,
    payload: { favorita }
  }),

  successRemoveFavorita: id => ({
    type: Types.SUCCESS_REMOVE_FAVORITA,
    payload: { id }
  }),

  requestLastFavoritas: limit => ({
    type: Types.REQUEST_LAST_FAVORITAS,
    payload: { limit }
  }),

  successLastFavoritas: data => ({
    type: Types.SUCCESS_LAST_FAVORITAS,
    payload: { data }
  })
};
