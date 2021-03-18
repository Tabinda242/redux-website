import * as actionTypes from './ShoppingTypes';

export const addToCart = (ItemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: ItemID
        }
    }
}
export const removeFromCart = (ItemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: ItemID
        }
    }
}
export const adjustQty = (ItemID,value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: ItemID,
            qty: value
        }
    }
}
export const loadCurrentItem = (Item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: Item,
    }
}
export const sellItem = (newItem) => {
    return {
        type: actionTypes.SELL_ITEM,
        payload: newItem,
    }
}
export const addToFavourite = (ItemID, isFavourite) => {
    return {
        type: actionTypes.ADD_TO_FAVOURITE,
        payload: {
            id: ItemID,
            Favourite: isFavourite,
        }
    }
}
export const removeFromFavourite = (ItemID, isFavourite) => {
    return {
        type: actionTypes.REMOVE_FROM_FAVOURITE,
        payload: {
            id: ItemID,
            Favourite: isFavourite,
        }
    }
}
export const userLogin = (userData) => {
    return {
        type: actionTypes.USER_LOGIN,
        payload: userData,
    }
}
