import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';

export const EMAIL_CHANGED = 'EMAIL_CHANGED'
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'
export const LOGIN_USER = 'LOGIN_USER'
export const GET_BUDGET_PENDING = 'GET_BUDGET_PENDING'
export const GET_BUDGET_SUCCESS = 'GET_BUDGET_SUCCESS'
export const GET_EXPENSES_PENDING = 'GET_EXPENSES_PENDING'
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS'
export const ADD_INCOME_PENDING = 'ADD_INCOME_PENDING'
export const ADD_INCOME_SUCCESS = 'ADD_INCOME_SUCCESS'
export const ADD_EXPENSE_PENDING = 'ADD_EXPENSE_PENDING'
export const ADD_EXPENSE_SUCCESS = 'ADD_EXPENSE_SUCCESSS'
export const UPDATE_EXPENSE_PENDING = 'UPDATE_EXPENSE_PENDING'
export const UPDATE_EXPENSE_SUCCESS = 'UPDATE_EXPENSE_SUCCESS'




export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };

};

export const loginUser = ({email, password}) => {
  console.log(email, password);
  return async (dispatch) => {
     dispatch({ type: LOGIN_USER});
    let result = await axios.post("http://localhost:8000/login", {email:email.toLowerCase(), password});
    console.log(result);
    AsyncStorage.setItem("personalAccountantToken", result.data.token);
   dispatch({ type: LOGIN_USER_SUCCESS,
              payload: {email, password}
         });
    Actions.main();

     };
  };



// const loginUserFail = (dispatch) => {
//   dispatch({ type: LOGIN_USER_FAIL});
// };
//
// const loginUserSuccess = (dispatch, user) => {
//   dispatch({
//     type: LOGIN_USER_SUCCESS,
//     payload: user
//   });
//
//   Actions.main();
// };

export const getBudget = () => {
return async (dispatch) => {
  dispatch({type: GET_BUDGET_PENDING})
  let token = await AsyncStorage.getItem('personalAccountantToken')
  console.log(token);
  let income = await axios.get(`http://localhost:8000/income?token=${token}`)
  dispatch({
    type: GET_BUDGET_SUCCESS,
    payload: income
  })
 }
}

export const getExpenses = () => {
  return async (dispatch) => {
    dispatch({type: GET_EXPENSES_PENDING})
    let token = await AsyncStorage.getItem('personalAccountantToken')
    let expenses = await axios.get(`http://localhost:8000/expenses?token=${token}`)
    dispatch({
      type: GET_EXPENSES_SUCCESS,
      payload: expenses
    })
  }
}

export const addIncome = (newIncome) => {
  console.log('newIncome',newIncome);
  return async (dispatch) => {
      dispatch({type: ADD_INCOME_PENDING})
        let token = await AsyncStorage.getItem('personalAccountantToken')
        let income = await axios.post(`http://localhost:8000/addincome`,{'newIncome': newIncome, 'token' : token})
      dispatch({
        type: ADD_INCOME_SUCCESS,
        payload: income
      })
    }
}

export const addExpense = (newExpense) => {
  //console.log('newExpense',newExpense);
  return async (dispatch) => {
      dispatch({type: ADD_EXPENSE_PENDING})
        let token = await AsyncStorage.getItem('personalAccountantToken')
        let expense = await axios.post(`http://localhost:8000/addexpense`,{'newExpense': newExpense, 'token' : token})
      dispatch({
        type: ADD_EXPENSE_SUCCESS,
        payload: expense
      })
    }
}

export const updateExpense = (updateExpense, id) => {
  console.log('updateExpense',updateExpense, id);
  return async (dispatch) => {
      dispatch({type: UPDATE_EXPENSE_PENDING})
        let token = await AsyncStorage.getItem('personalAccountantToken')
        let expense = await axios.patch(`http://localhost:8000/udateexpense/${id}`,{'updateExpense': updateExpense, 'token' : token})
      dispatch({
        type: UPDATE_EXPENSE_SUCCESS,
        payload: expense
      })
    }
}
