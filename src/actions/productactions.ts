export const GET_PRODUCTS = "GET_PRODUCTS";

export const GetProducts = (products:any) => ({
    type: GET_PRODUCTS,
    payload: { products }
})
