import { AddOrRemoveFromCart,GetCartItems,RemoveFromCart } from "../actions/cartActions";
import { Product } from "../models/product";

export const addOrRemoveFromCart = (product:Product) => {
    return async (dispatch: any) => {
        try {        
            dispatch(AddOrRemoveFromCart(product));
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
export const removeFromCart=(product:any)=>{
    return async (dispatch: any) => {
        try {        
            dispatch(RemoveFromCart(product));
        }
        catch (error) {
        }
    }
}