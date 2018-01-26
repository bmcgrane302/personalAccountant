import {
  GET_BUDGET_PENDING,
  GET_BUDGET_SUCCESS,
  ADD_INCOME_PENDING,
  ADD_INCOME_SUCCESS,
  UPDATE_INCOME_PENDING,
  UPDATE_INCOME_SUCCESS

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
    console.log('income adding',action.payload);
      return [...state, ...action.payload.data];
    case UPDATE_INCOME_PENDING:
      return state;
    case UPDATE_INCOME_SUCCESS:
      let newState = state.filter((item,i)=> state.users_id === action.payload.data[i].user_id);
      console.log('testing income update', newState);
      return [...action.payload.data];
    default:
     return state;

 }
};
