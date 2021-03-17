import { combineReducers } from 'redux';
import shopReducer from './Shopping/ShoppingReducers';

const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;