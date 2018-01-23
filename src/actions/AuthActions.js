import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';

export const EMAIL_CHANGED = 'EMAIL_CHANGED'
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'
export const LOGIN_USER = 'LOGIN_USER'
export const PING_TOKEN_PENDING = 'PING_TOKEN_PENDING'
export const PING_TOKEN_SUCCESS = 'PING_TOKEN_SUCCESS'
export const GET_BUDGET_PENDING = 'GET_BUDGET_PENDING'
export const GET_BUDGET_SUCCESS = 'GET_BUDGET_SUCCESS'




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

  export const pingToken = () => {
  return async (dispatch) => {
    dispatch({type: PING_TOKEN_PENDING})
    let token = await AsyncStorage.getItem('personalAccountantToken')
    let pong = await axios.post(`http://localhost:8000/ping`, {token})
    dispatch({
      type: PING_TOKEN_SUCCESS,
      payload: pong
    })
  }
}

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
