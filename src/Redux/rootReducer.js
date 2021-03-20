import { combineReducers } from 'redux';
import shopReducer from './Shopping/ShoppingReducers';
import FormReducer from './Shopping/FormReducer';
// import { sellItem } from './Shopping/ShoppingActions';
// import sellItem from './Shopping/SellItem';


const rootReducer = combineReducers({
    shop: shopReducer,
    // sell: sellItem,
    form: FormReducer,
});

export default rootReducer;