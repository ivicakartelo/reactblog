import { MENUS } from '../shared/menus';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { AUTHORS } from '../shared/authors';

export const initialState = {
    menus: MENUS,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    authors: AUTHORS
};

export const Reducer = (state = initialState, action) => {
    return state;
};