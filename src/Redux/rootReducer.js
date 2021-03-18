import { combineReducers } from 'redux';
import shopReducer from './Shopping/ShoppingReducers';
import FormReducer from './Shopping/FormReducer';


const rootReducer = combineReducers({
    shop: shopReducer,
    form: FormReducer,
});

export default rootReducer;