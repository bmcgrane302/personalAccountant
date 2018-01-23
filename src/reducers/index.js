import { combineReducers }from 'redux';
import AuthReducer from './AuthReducer';
import IncomeReducer from './IncomeReducer';
import ExpensesReducer from './ExpensesReducer';


export default combineReducers({
  authUser: AuthReducer,
  income: IncomeReducer,
  expenses: ExpensesReducer

});
