
export const FETCH_AVAILABILITY_RESULT = 'FETCH_AVAILABILITY_RESULT'
export const SET_MONTH_FILTER = "SET_MONTH_FILTER"
export const SET_DATE_AVAILABLE = " SET_DATE_AVAILABLE"

export const reservationReducer =  (state = { 
  queryResult: [], 
  monthSelected: null, 
  programs: [], 
  pax: null,
  availableDateSelected: null
 }, action) => {
  switch (action.type) {
    case FETCH_AVAILABILITY_RESULT:
      return { ...state, ...action }
    case SET_MONTH_FILTER:
      return {...state,
        monthSelected: action.monthSelected, 
        queryResult: action.queryResult,
        programs: action.programs
      }
    case SET_DATE_AVAILABLE: 
      return {...state,availableDateSelected: action.date}
    default:
      return { ...state }
  }
}