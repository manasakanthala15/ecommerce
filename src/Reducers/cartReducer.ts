import { User } from "../models/user";
import { ADDORREMOVE_FROM_CART, GET_CART_ITEMS, REMOVE_FROM_CART } from "../actions/cartActions";
import { Product } from "../models/product";

const initialState = {
    cartItems: Array()
}

export function cartReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADDORREMOVE_FROM_CART:
            let cartItems = state.cartItems;
            if (cartItems.length != 0) {
                cartItems.filter(item => {
                    if (item.id == action.payload.product.id) {
                        let index = state.cartItems.findIndex(cartItem => {
                            return cartItem.id == action.payload.product.id
                        })
                        if (item.isAddedToCart) {
                            cartItems[index].isAddedToCart = false;
                            cartItems.splice(index,1)
                        }
                        else {
                            cartItems[index].isAddedToCart = true;
                        }
                    }
                    else{
                        cartItems.push(action.payload.product);
                        let index = state.cartItems.findIndex(cartItem => {
                            return cartItem.id == action.payload.product.id
                        })
                        cartItems[index].isAddedToCart = true;
                    }
                })
            }
            else {
                cartItems.push(action.payload.product);
                cartItems[0].isAddedToCart = true;
            }
            return {
                ...state,
                cartItems: cartItems
            }
        case GET_CART_ITEMS:
            return {
                ...state,
                cartItems: state.cartItems
            }
        // case REMOVE_FROM_CART:
        //     state.cartItems.filter(item => {
        //         if (item.id == action.payload.product.id) {
        //             let index = state.cartItems.findIndex(cartItem => {
        //                 return cartItem.id == action.payload.product.id
        //             })
        //             state.cartItems[0].isAddedToCart = false;
        //             state.cartItems.splice(index, 1)
        //         }
        //     })
        //     return {
        //         ...state,
        //         cartItems: state.cartItems
        //     }
        default:
            return state
    }
}