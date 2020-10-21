import { AddToCart,GetCartItems } from "../actions/cartActions";
import { Product } from "../models/product";

export const addToCart = (product:Product) => {
    return async (dispatch: any) => {
        try {        
            dispatch(AddToCart(product));
        }
        catch (error) {
        }
    }
}

export const getCartItems = () => {
    return async (dispatch: any) => {
        try {        
            dispatch(GetCartItems());
        }
        catch (error) {
        }
    }
}