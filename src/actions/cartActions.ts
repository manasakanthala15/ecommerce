export const ADD_TO_CART = "ADD_TO_CART";
export const GET_CART_ITEMS = "GET_CART_ITEMS";
 
export const AddToCart = (product:any) => ({
    type: ADD_TO_CART,
    payload: { product }
})
export const GetCartItems = () => ({
    type: GET_CART_ITEMS,
})
