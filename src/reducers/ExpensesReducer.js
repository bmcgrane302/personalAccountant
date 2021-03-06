import {
  GET_EXPENSES_PENDING,
  GET_EXPENSES_SUCCESS,
  ADD_EXPENSE_PENDING,
  ADD_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_PENDING,
  UPDATE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_PENDING,
  DELETE_EXPENSE_SUCCESS
} from '../actions/AuthActions';



export default (state = [], action) => {

  console.log('expenses action', action);
   switch (action.type) {
    case GET_EXPENSES_PENDING:
      return state;
    case GET_EXPENSES_SUCCESS:
        return [...action.payload.data];
    case ADD_EXPENSE_PENDING:
      return state;
    case ADD_EXPENSE_SUCCESS:
      console.log('expense adding',action.payload);
      return [...state, ...action.payload.data];
    case UPDATE_EXPENSE_PENDING:
      return state;
    case UPDATE_EXPENSE_SUCCESS:
    //console.log('expense updating',action.payload);
      return [...action.payload.data];
    case DELETE_EXPENSE_PENDING:
      return state;
    case DELETE_EXPENSE_SUCCESS:
        return [...action.payload.data];
    default:
     return state;

 }
};
