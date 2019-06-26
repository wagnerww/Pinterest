import Immutable from "seamless-immutable";

export const Types = {
  REQUEST_IMAGENS: "IMAGENS/REQUEST_IMAGENS",
  SUCCESS_IMAGENS: "IMAGENS/SUCCESS_IMAGENS",
  FAILURE_IMAGENS: "IMAGENS/FAILURE_IMAGENS",
  NEXT_PAGE_IMAGENS: "IMAGENS/NEXT_PAGE_IMAGENS",
  SEARCH_IMAGENS: "IMAGENS/SEARCH_IMAGENS"
};

const INITIAL_STATE = Immutable({
  isLoading: false,
  data: [],
  totalRecords: 0
});

export default function imagens(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_IMAGENS:
      return { ...state, isLoading: true, totalRecords: 0 };

    case Types.SUCCESS_IMAGENS:
      return {
        isLoading: false,
        data: action.payload.data,
        totalRecords: action.payload.totalRecords
      };

    case Types.NEXT_PAGE_IMAGENS: {
      const dados = {
        isLoading: false,
        data: [...state.data, ...action.payload.data],
        totalRecords: action.payload.totalRecords
      };

      return dados;
    }
    case Types.FAILURE_IMAGENS:
      return { isLoading: false };

    default:
      return state;
  }
}

export const Creators = {
  requestImagens: page => ({
    type: Types.REQUEST_IMAGENS,
    payload: { page }
  }),

  successImagens: (data, totalRecords) => ({
    type: Types.SUCCESS_IMAGENS,
    payload: { data, totalRecords }
  }),

  failureImagens: () => ({
    type: Types.FAILURE_IMAGENS,
    payload: {}
  }),

  nextPageImagens: (data, totalRecords) => ({
    type: Types.NEXT_PAGE_IMAGENS,
    payload: { data, totalRecords }
  }),

  searchImagens: search => ({
    type: Types.SEARCH_IMAGENS,
    payload: { search }
  })
};
