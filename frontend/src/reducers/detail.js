import { GET_DETAIL, DELETE_EXPENSE } from "../actions/types.js";


const initialState = {
    detail: {},
    expenses: []
}


export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
        expenses: action.payload.expenses,
      };
     case DELETE_EXPENSE:
       return {
         ...state,
         expenses: state.expenses.filter(expense => expense.id !== action.payload)
       };
    default:
      return state;
  }
}
