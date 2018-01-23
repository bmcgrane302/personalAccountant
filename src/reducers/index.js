import { combineReducers }from 'redux';
import AuthReducer from './AuthReducer';
import IncomeReducer from './IncomeReducer';


export default combineReducers({
  authUser: AuthReducer,
  income: IncomeReducer

});
