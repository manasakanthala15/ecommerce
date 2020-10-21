import { User } from "../models/user";
import { ADD_TO_CART , GET_CART_ITEMS} from "../actions/cartActions";
import { Product } from "../models/product";

const initialState = {
    cartItems: Array()
}

export function cartReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADD_TO_CART:
            let cartItems = state.cartItems;
            cartItems.push(action.payload.product)
            return {
                ...state,
                cartItems: cartItems
            }
        case GET_CART_ITEMS: 
            return {
                ...state,
                cartItems: state.cartItems
            }
        default:
            return state
    }
}