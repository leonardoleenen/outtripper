
import {LOGIN, INIT_SIGNUP} from '../reducers/user';
import { User } from '../../services/type'
import { RenderEngine, ProcessNode } from 'services/renderEngine';

export const login = (id:string,cn:string,photoCover:string) => {
    return {type: LOGIN, userData: new User(id,cn,photoCover) }
}

export const initSignUp = (id:string,cn:string,photoCover:string, process:any, engine: RenderEngine) => {
    return {type: INIT_SIGNUP, userData: new User(id,cn,photoCover), process,engine }
}


