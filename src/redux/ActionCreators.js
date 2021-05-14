import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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

    return fetch(baseUrl + 'menus')
    .then(response => response.json())
    .then(menus => dispatch(addMenus(menus)));
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
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
