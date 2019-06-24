import Immutable from "seamless-immutable";

export const Types = {
  REQUEST_FAVORITA: "FAVORITA/REQUEST_FAVORITA",
  SUCCESS_FAVORITA: "FAVORITA/SUCCESS_FAVORITA",
  ADD_FAVORITA: "FAVORITA/ADD_FAVORITA",
  REMOVE_FAVORITA: "FAVORITA/REMOVE_FAVORITA",
  SUCCESS_REMOVE_FAVORITA: "FAVORITA/SUCCESS_REMOVE_FAVORITA"
};

const INITIAL_STATE = Immutable({
  data: []
});

export default function favoritas(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SUCCESS_FAVORITA:
      return { data: action.payload.data };

    case Types.SUCCESS_REMOVE_FAVORITA:
      /* VERBOSO ---- const data = state.data.filter((favorita) => {
        return favorita.id !== action.payload.id;
      }); */
      const data = state.data.filter(
        favorita => favorita.id !== action.payload.id
      );

      return { data };

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
  })
};
