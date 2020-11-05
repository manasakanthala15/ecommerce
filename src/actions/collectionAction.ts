export const GET_ALL_COLLECTIONS = "GET_ALL_COLLECTIONS";
export const GET_FILTERED_COLLECTIONS = "GET_FILTERED_COLLECTIONS";

export const GetAllCollections = () => ({
    type: GET_ALL_COLLECTIONS,
    payload: {  }
})

export const GetFilteredCollection = (tag: any) => ({
    type: GET_FILTERED_COLLECTIONS,
    payload: { tag }
})