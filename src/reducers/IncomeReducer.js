import {
  GET_BUDGET_PENDING,
  GET_BUDGET_SUCCESS
} from '../actions/AuthActions';



export default (state = [], action) => {
  
  console.log('income action', action);
   switch (action.type) {
    case GET_BUDGET_PENDING:
      return state;
    case GET_BUDGET_SUCCESS:
        return [...action.payload.data];
    default:
     return state;

 }
};
