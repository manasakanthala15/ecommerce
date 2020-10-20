import { User } from "../models/user";
import { GET_PRODUCTS } from "../actions/productactions";
import { Product } from "../models/product";

const initialState = {
    products: []
}

export function productReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            }
        default:
            return state
    }
}