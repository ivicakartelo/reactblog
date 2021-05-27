import * as ActionTypes from './ActionTypes';

export const Authors = (state  = { isLoading: true,
                                        errMess: null,
                                        authors:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_AUTHORS:
        return {...state, isLoading: false, errMess: null, authors: action.payload};

        case ActionTypes.AUTHORS_LOADING:
            return {...state, isLoading: true, errMess: null, authors: []}

        case ActionTypes.AUTHORS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};