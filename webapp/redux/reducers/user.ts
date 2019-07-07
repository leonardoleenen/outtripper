
import { User } from '../../services/type';

export const LOGIN = 'LOGIN'
export const CONTACT = 'CONTACT'


export const INIT_SIGNUP = 'INIT SIGNUP'

export const userReducer = (state = {
  userData: new User(null, null, null),
  lastLogin: null
}, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action };
    case CONTACT:
        return { ...state, ...action };
    default:
      return state
  }
}

export const signUpReducer = (state = {},action) => {
  switch (action.type) {
    case INIT_SIGNUP:
      return { ...state, ...action };
    default:
      return state
  }
}