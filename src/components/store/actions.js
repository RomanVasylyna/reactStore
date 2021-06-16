import constants from "./actionTypes";

export const setNewProducts = data => ({
    type: constants.SET_PRODUCTS,
    payload: data
});

export const addItemToCart = product => ({
    type: constants.ADD_TO_CART,
    payload: product
});