import * as ActionTypes from './ActionTypes';

export const Feedback = (state = {feedback:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
        var feedback = action.payload;
        
        return { feedback };

    default:
      return state;
  }
};