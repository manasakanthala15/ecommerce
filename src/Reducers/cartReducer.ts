import { User } from "../models/user";
import { ADD_TO_CART } from "../actions/cartActions";
import { Product } from "../models/product";

const initialState = {
    products: []
}

export function cartReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADD_TO_CART:
            let cartItems=state.products;
            return {
                ...state,
                products: action.payload.products
            }
        default:
            return state
    }
}