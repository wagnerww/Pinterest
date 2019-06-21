import Immutable from "seamless-immutable";

export const Types = {
  ADD_MENSAGEM_TOAST: "TOAST/ADD_MENSAGEM"
};

const INITIAL_STATE = Immutable({
  menensagem: ""
});

export default function toast(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_MENSAGEM_TOAST:
      return { mensagem: action.payload.mensagem };
    default:
      return state;
  }
}

export const Creators = {
  createMensagem: mensagem => ({
    type: Types.ADD_MENSAGEM_TOAST,
    payload: { mensagem }
  })
};
