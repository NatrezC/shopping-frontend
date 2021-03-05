// Reducers are functions that take the current state and an action as arguments, and return a new state result.

import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            //if item already exist in the cart
            const existItem = state.cartItems.find((x) => x.product === item.product);

            if (existItem) {
                return {
                    ...state,
                    //mapping through old array and setting to new array
                    //check if current item is equal to existing item 
                    // if true set to new item
                    cartItems: state.cartItems.map((x)=> x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    // add new item
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x)=> x.product !== action.payload)
            }
        default:
            return state;
    }
}