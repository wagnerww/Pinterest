import Immutable from "seamless-immutable";

export const Types = {
  REQUEST_FAVORITA: "FAVORITA/REQUEST_FAVORITA",
  SUCCESS_FAVORITA: "FAVORITA/SUCCESS_FAVORITA",
  ADD_FAVORITA: "FAVORITA/ADD_FAVORITA",
  REMOVE_FAVORITA: "FAVORITA/REMOVE_FAVORITA"
};

const INITIAL_STATE = Immutable({
  data: []
});

export default function favoritas(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SUCCESS_FAVORITA:
      return { data: action.payload.data };
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
  })
};
