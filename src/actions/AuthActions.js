import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const EMAIL_CHANGED = 'EMAIL_CHANGED'
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'
export const LOGIN_USER = 'EMAIL_CHANGED'




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
  return (dispatch) => {
   dispatch({ type: LOGIN_USER,
              payload: {email, password}
         });

     };
  };


const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
