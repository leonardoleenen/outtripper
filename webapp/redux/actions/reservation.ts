import { SET_MONTH_FILTER } from '../reducers/reservation';
import { businessService, BusinessService } from '../../services/index'
import {IDateAvailable} from '../../services/type'

const ds: BusinessService = businessService


export const setMonthFilter = (month: number) => {
  return (dispatch, getState) => {
    ds.getDatesAvailabilityList().then( (result: IDateAvailable[]) => {
      return dispatch({
        type: SET_MONTH_FILTER,
        monthSelected: month,
        queryResult: result.filter( (d:IDateAvailable) => new Date(d.start_date).getMonth() + 1 === month)
      })
    }) 
  }
} 