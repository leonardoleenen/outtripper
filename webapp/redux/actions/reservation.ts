import { SET_MONTH_FILTER } from '../reducers/reservation';
import { businessService, BusinessService } from '../../services/index'
import {IDateAvailable} from '../../services/type'
import _ from 'underscore'

const ds: BusinessService = businessService


export const setMonthFilter = (month: number) => {
  return (dispatch, getState) => {
    ds.getDatesAvailabilityList().then( (result: IDateAvailable[]) => {
      
      // TODO: GroupBy program_id
      // console.log(_.groupBy(result, (e:IDateAvailable) => e.program_id ))
      return dispatch({
        type: SET_MONTH_FILTER,
        monthSelected: month,
        queryResult: result.filter( (d:IDateAvailable) => new Date(d.start_date).getMonth() + 1 === month)
      })
    }) 
  }
} 