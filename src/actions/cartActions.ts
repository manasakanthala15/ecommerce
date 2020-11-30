export const ADDORREMOVE_FROM_CART = "ADDORREMOVE_FROM_CART";
export const GET_CART_ITEMS = "GET_CART_ITEMS";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_DECREASE_QUANTITY="INCREASE_DECREASE_QUANTITY";
export const GET_PRODUCT_BY_ID="GET_PRODUCT_BY_ID";

export const AddOrRemoveFromCart = (product: any) => ({
    type: ADDORREMOVE_FROM_CART,
    payload: { product }
})
export const GetCartItems = () => ({
    type: GET_CART_ITEMS,
})

export const IncreaseOrDecreaseQuantity= (product:any,type: any) => ({
    type: INCREASE_DECREASE_QUANTITY,
    payload: { product,type }
})
export const GetProductById = (productId:any) => ({
    type: GET_PRODUCT_BY_ID,
    payload: { productId }
})
