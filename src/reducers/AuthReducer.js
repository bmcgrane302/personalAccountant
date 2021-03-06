import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  ADD_USER_PENDING,
  ADD_USER_SUCCESS

} from '../actions/AuthActions';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
  };

export default (state = INITIAL_STATE, action) => {
  console.log('auth action', action);

  switch (action.type) {
    case EMAIL_CHANGED:
    console.log('payload email', action.payload);
     return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
    console.log('payload pass', action.payload);
      return { ...state, password: action.payload };
    case LOGIN_USER:
      console.log("IN LOGIN USER", action.payload);
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state,
        user: action.payload,
        error: '',
        loading: false,
        email: '',
        password: ''
       };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authenication Failed', password: '', loading: false};
    case ADD_USER_PENDING:
      return state;
    case ADD_USER_SUCCESS:
          return [...action.payload.data];

    default:
     return state;

  }
};
