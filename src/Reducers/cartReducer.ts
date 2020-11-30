import { User } from "../models/user";
import { ADDORREMOVE_FROM_CART, GET_CART_ITEMS, GET_PRODUCT_BY_ID, INCREASE_DECREASE_QUANTITY } from "../actions/cartActions";

const initialState = {
    cartItems: Array(),
    product:{}
}

export function cartReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADDORREMOVE_FROM_CART:
            let cartItems = state.cartItems;
            if (cartItems.length != 0) {
                var cartitem = cartItems.find(item => item.id == action.payload.product.id);
                if (cartitem) {
                    let index = state.cartItems.findIndex(cartItem => {
                        return cartItem.id == action.payload.product.id
                    })
                    cartItems[index].isAddedToCart = false;
                    cartItems[index].quantity -= 1;
                    cartItems.splice(index, 1)
                }
                else {
                    cartItems.push(action.payload.product);
                    let index = state.cartItems.findIndex(cartItem => {
                        return cartItem.id == action.payload.product.id
                    })
                    cartItems[index].isAddedToCart = true;
                    cartItems[index].quantity += 1;
                }
            }
            else {
                cartItems.push(action.payload.product);
                cartItems[0].isAddedToCart = true;
                cartItems[0].quantity += 1;
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
        case INCREASE_DECREASE_QUANTITY:
            let items = state.cartItems;
            if (items.length != 0) {
                let index = state.cartItems.findIndex(cartItem => {
                    return cartItem.id == action.payload.product.id
                })            
                   
                if(action.payload.type=="increase"){
                    items[index].quantity += 1;
                }
                if(action.payload.type=="decrease"){
                    items[index].quantity -= 1;
                }
                if(items[index].quantity==0){
                    items.splice(index, 1)
                } 
            }
            return {
                ...state,
                cartItems: items
            }
            case GET_PRODUCT_BY_ID:
                let product={}
                state.cartItems.filter((item:any)=>{
                    if(item.id==action.payload.productId){
                        product=item;
                    }
                })
                return {
                    ...state,
                    product:product
                }
        default:
            return state
    }
}