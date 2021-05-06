import * as ActionTypes from './ActionTypes';

export const Menus = (state = { isLoading: true,
    errMess: null,
    menus:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MENUS:
            return {...state, isLoading: false, errMess: null, menus: action.payload};

        case ActionTypes.MENUS_LOADING:
            return {...state, isLoading: true, errMess: null, menus: []}

        case ActionTypes.MENUS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};