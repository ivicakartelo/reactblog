import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Menus } from './menus';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Authors } from './authors';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            menus: Menus,
            comments: Comments,
            promotions: Promotions,
            authors: Authors
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}