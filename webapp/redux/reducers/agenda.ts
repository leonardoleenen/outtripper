import { IContact } from "services/type";


export const LOAD_AGENDA = 'LOAD_AGENDA'
export const FILTER_AGENDA = 'FILTER_AGENDA'


export interface IAgendaState {
  contacts: IContact[]
}

export const agendaReducer = (state: IAgendaState = { contacts: [] }, action) => {
  switch (action.type) {
    case LOAD_AGENDA:
      return { ...state, contacts: action.contacts }
    case FILTER_AGENDA:
      return { ...state, contacts: action.filtered }
    default:
      return { ...state, ...action }
  }
}
