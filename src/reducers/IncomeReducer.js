import {
  GET_BUDGET_PENDING,
  GET_BUDGET_SUCCESS,
  ADD_INCOME_PENDING,
  ADD_INCOME_SUCCESS

} from '../actions/AuthActions';



export default (state = [], action) => {

  console.log('income action', action);
   switch (action.type) {
    case GET_BUDGET_PENDING:
      return state;
    case GET_BUDGET_SUCCESS:
        return [...action.payload.data];
    case ADD_INCOME_PENDING:
      return state;
    case ADD_INCOME_SUCCESS:
    console.log(action.payload);
            return [...action.payload.data];
    default:
     return state;

 }
};
