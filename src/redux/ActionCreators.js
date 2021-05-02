import * as ActionTypes from './ActionTypes';

export const addComment = (menuId, rating, author, comment) => ({
    
    type: ActionTypes.ADD_COMMENT,
    payload: {
        menuId: menuId,
        rating: rating,
        author: author,
        comment: comment
    }
    
});
