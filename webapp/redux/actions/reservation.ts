import { SET_MONTH_FILTER,SET_DATE_AVAILABLE } from '../reducers/reservation';
import { businessService, BusinessService } from '../../services/index'
import {IDateAvailable} from '../../services/type'
import _ from 'underscore'

const ds: BusinessService = businessService


export const setMonthFilter = (month: number) => {
  return  (dispatch, getState) => {
    ds.getDatesAvailabilityList().then( async (result: IDateAvailable[]) => {
      
      // TODO: GroupBy program_id
      // console.log(_.groupBy(result, (e:IDateAvailable) => e.program_id ))
    
      let programs = []

      if (_.isEmpty(getState().reservation.programs)){
        programs = await ds.getPrograms()
      }

      return dispatch({
        type: SET_MONTH_FILTER,
        monthSelected: month,
        programs: programs,
        queryResult: result.filter( (d:IDateAvailable) => new Date(d.start_date).getMonth() + 1 === month)
      })
    }) 
  }
} 

export const setAvailableDate = (date: IDateAvailable) => {
  return (dispatch, getState) => { 
    return dispatch({
      type: SET_DATE_AVAILABLE,
      date
    })
  }
}