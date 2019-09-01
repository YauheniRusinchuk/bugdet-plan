import { GET_DETAIL } from "../actions/types.js";


const initialState = {
    detail: {}
}


export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload
      };
    default:
      return state;
  }
}
