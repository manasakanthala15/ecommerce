export const ADDORREMOVE_FROM_CART = "ADDORREMOVE_FROM_CART";
export const GET_CART_ITEMS = "GET_CART_ITEMS";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const AddToCart = (product: any) => ({
    type: ADDORREMOVE_FROM_CART,
    payload: { product }
})
export const GetCartItems = () => ({
    type: GET_CART_ITEMS,
})
export const RemoveFromCart = (product: any) => ({
    type: REMOVE_FROM_CART,
    payload: { product }
})