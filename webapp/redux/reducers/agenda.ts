import { IContact } from "services/type";


export const LOAD_AGENDA = 'LOAD_AGENDA'
export const FILTER_AGENDA = 'FILTER_AGENDA'
export const NEW_CONTACT = 'NEW_CONTACT'


export interface IAgendaState {
  contacts: IContact[],
  contact: IContact,
  calledFrom: string 
}

export const agendaReducer = (state: IAgendaState = { contacts: [],contact: null, calledFrom: null }, action) => {
  switch (action.type) {
    case LOAD_AGENDA:
      return { ...state, contacts: action.contacts }
    case FILTER_AGENDA:
      return { ...state, contacts: action.filtered }
    case NEW_CONTACT:
      return {...state,contact: action.contact}
    default:
      return { ...state, ...action }
  }
}
