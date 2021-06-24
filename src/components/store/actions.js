import constants from "./actionTypes";

export const setProducts = data => ({
    type: constants.SET_PRODUCTS,
    payload: data
});

export const addItemToCart = product => ({
    type: constants.ADD_TO_CART,
    payload: product
});

export const removeItemFromCart = productId => ({
    type: constants.REMOVE_FROM_CART,
    payload: productId
});

export const clearCart = () => ({
    type: constants.CLEAR_CART
});

export const setTotalAmount = totalAmount => ({
    type: constants.SET_TOTAL_AMOUNT,
    payload: totalAmount
});

export const increaseCount = productId => ({
    type: constants.INCREASE_COUNT,
    payload: productId
});

export const decreaseCount = productId => ({
    type: constants.DECREASE_COUNT,
    payload: productId
});

export const setCountry = country => ({
    type: constants.SET_COUNTRY,
    payload: country
});

export const setCity = city => ({
    type: constants.SET_CITY,
    payload: city
});

export const clearCity = () => ({
    type: constants.CLEAR_CITY
});
