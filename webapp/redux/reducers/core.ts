
const IS_WRITING = 'IS WRITING'
const IS_NOT_WRITING = 'IS NOT WRITING'

export const mainProcessReducer = (state = {isWriting:false},action) => {
    switch (action.type) {   
      case IS_WRITING:
        return { ...state, isWriting: true };
      case IS_NOT_WRITING:
          return { ...state, isWriting: false};
      default:
        return { ...state, isWriting:false }
    }
  }