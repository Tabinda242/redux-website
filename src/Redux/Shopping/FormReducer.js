import * as actionTypes from "./ShoppingTypes";

const INITIAL_STATE = {
    userLogin: JSON.parse(localStorage.getItem('login')) || [],
}

const FormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            localStorage.setItem('login', JSON.stringify([...state.login, action.payload]))
            return {
                login: action.payload
            }
        default:
            return state
    }
}
export default FormReducer

