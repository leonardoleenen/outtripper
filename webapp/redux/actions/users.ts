
import {LOGIN, INIT_SIGNUP} from '../reducers/user';
import { User } from '../../services/type'

export const login = (id:string,cn:string,photoCover:string) => {
    return {type: LOGIN, userData: new User(id,cn,photoCover) }
}

export const initSignUp = (id:string,cn:string,photoCover:string, process:any, currentState:string) => {
    return {type: INIT_SIGNUP, userData: new User(id,cn,photoCover), process, currentState }
}


