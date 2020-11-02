export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_Filtered_PRODUCTS = "GET_Filtered_PRODUCTS";
export const GET_PRODUCT_BY_ID="GET_PRODUCT_BY_ID";

export const GetProducts = (itemCount:any) => ({
    type: GET_PRODUCTS,
    //payload: { products }
    count:itemCount
})
export const GetFilteredProducts = (filter:any) => ({
    type: GET_Filtered_PRODUCTS,
    payload: { filter }
})
export const GetProductById = (productId:any) => ({
    type: GET_PRODUCT_BY_ID,
    payload: { productId }
})