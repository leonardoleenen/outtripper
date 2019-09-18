
import { User } from '../../services/type';

export const LOGIN = 'LOGIN'
export const CONTACT = 'CONTACT'


export const INIT_SIGNUP = 'INIT SIGNUP'
export const SIGNUP_SET_OPERATION_NAME = 'SIGNUP SET OPERATION NAME'
export const OPERATION_KIND = 'OPERATION KIND'
export const OPERATION_SIZE = 'OPERATION SIZE'
export const SET_USER_TOKEN = 'SET_USER_TOKEN'

export const userReducer = (state = {
  userData: new User(null, null, null),
  lastLogin: null,
  token: null,
}, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {...state,token: action.token};
    case LOGIN:
      return { ...state, ...action };
    case CONTACT:
        return { ...state, ...action };
    default:
      return state
  }
}

export const signUpReducer = (state = {
  chatTrace:[],
  engine: null
},action) => {
  switch (action.type) {
    case INIT_SIGNUP:
      return { ...state, ...action };
    case SIGNUP_SET_OPERATION_NAME:
        return { ...state, ...action };
    case OPERATION_KIND:
        return { ...state, ...action };
    case OPERATION_SIZE:
        return { ...state, ...action };
    default:
      return state
  }
}