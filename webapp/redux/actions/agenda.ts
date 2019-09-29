

import { FILTER_AGENDA, LOAD_AGENDA } from '../reducers/agenda'

import { businessService, BusinessService } from '../../services/index'
import { IContact } from 'services/type';

const ds: BusinessService = businessService

export const filterAgenda = (criteria: any) => {
  if (!criteria)
    return loadAgenda()
    
  return (dispatch, getState) => {
    let _list: IContact[] = Object.assign([], getState().agenda.contacts)
    return dispatch({
      type: FILTER_AGENDA,
      filtered: _list.filter( (contact:IContact) => contact.cn.toUpperCase().includes(criteria.toUpperCase()))
    })
  }
}

export const loadAgenda = () => {
  return (dispatch, getState) => {
    ds.getContacts().then( result => {
      return dispatch({
        type: LOAD_AGENDA,
        contacts :  result
      })
    })  
  }
}