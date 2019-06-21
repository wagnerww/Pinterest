import Immutable from "seamless-immutable";

export const Types = {
  REQUEST_IMAGENS: "IMAGENS/REQUEST_IMAGENS",
  SUCCESS_IMAGENS: "IMAGENS/SUCCESS_IMAGENS",
  FAILURE_IMAGENS: "IMAGENS/FAILURE_IMAGENS"
};

const INITIAL_STATE = Immutable({
  isLoading: false,
  data: []
});

export default function imagens(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_IMAGENS:
      return { isLoading: true };

    case Types.SUCCESS_IMAGENS:
      return { isLoading: false, data: action.payload.data };

    case Types.FAILURE_IMAGENS:
      return { isLoading: false };

    default:
      return state;
  }
}

export const Creators = {
  requestImagens: () => ({
    type: Types.REQUEST_IMAGENS,
    payload: {}
  }),

  successImagens: data => ({
    type: Types.SUCCESS_IMAGENS,
    payload: { data }
  }),

  failureImagens: () => ({
    type: Types.FAILURE_IMAGENS,
    payload: {}
  })
};
