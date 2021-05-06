import * as ActionTypes from './ActionTypes';
import { MENUS } from '../shared/menus';

export const addComment = (menuId, rating, author, comment) => ({
    
    type: ActionTypes.ADD_COMMENT,
    payload: {
        menuId: menuId,
        rating: rating,
        author: author,
        comment: comment
    }
    
});

export const fetchMenus = () => (dispatch) => {

    dispatch(menusLoading(true));

    setTimeout(() => {
        dispatch(addMenus(MENUS));
    }, 2000);
}

export const menusLoading = () => ({
    type: ActionTypes.MENUS_LOADING
});

export const menusFailed = (errmess) => ({
    type: ActionTypes.MENUS_FAILED,
    payload: errmess
});

export const addMenus = (menus) => ({
    type: ActionTypes.ADD_MENUS,
    payload: menus
});
