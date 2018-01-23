import {
  GET_EXPENSES_PENDING,
  GET_EXPENSES_SUCCESS
} from '../actions/AuthActions';



export default (state = [], action) => {

  console.log('expenses action', action);
   switch (action.type) {
    case GET_EXPENSES_PENDING:
      return state;
    case GET_EXPENSES_SUCCESS:
        return [...action.payload.data];
    default:
     return state;

 }
};
