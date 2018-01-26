import {
  GET_BUDGET_PENDING,
  GET_BUDGET_SUCCESS,
  ADD_INCOME_PENDING,
  ADD_INCOME_SUCCESS,
  UPDATE_INCOME_PENDING,
  UPDATE_INCOME_SUCCESS,
  DELETE_INCOME_PENDING,
  DELETE_INCOME_SUCCESS

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
      return [...state, ...action.payload.data];
    case UPDATE_INCOME_PENDING:
      return state;
    case UPDATE_INCOME_SUCCESS:
      let newState = state.filter((item,i)=> state.users_id === action.payload.data[i].user_id);
      return [...action.payload.data];
    case DELETE_INCOME_PENDING:
      return state;
    case DELETE_INCOME_SUCCESS:
       console.log('income delteteeeee', action,payload);
          return [...action.payload.data];
    default:
     return state;

 }
};
