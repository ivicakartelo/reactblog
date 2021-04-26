import {createStore, combineReducers} from 'redux';
import { Menus } from './menus';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Authors } from './authors';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            menus: Menus,
            comments: Comments,
            promotions: Promotions,
            authors: Authors
        })
    );

    return store;
}