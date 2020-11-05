import { GET_ALL_COLLECTIONS, GET_FILTERED_COLLECTIONS } from "../actions/collectionAction";

const initialState = {
    collection: [
        {"id":"9fb10939-7908-d5cd-1819-98ad26f9780b","src":"https://picsum.photos/640/480/?image=197","productName":"Hat","description":"Dignissimos suscipit dolor magni error quo vel distinctio eum nam. Omnis officiis ab ex est incidunt voluptatum eligendi ad quisquam. Perspiciatis sequi quae molestias mollitia quia. Aliquam et qui. Error est perferendis dolorum explicabo nesciunt quasi nihil.","cost":"927.45","quantity":0,"isAddedToCart":false,"tag":"Men"},
        {"id":"a820beff-d313-07fe-73b5-871cd5478f25","src":"https://picsum.photos/640/480/?image=129","productName":"Car","description":"Ut sunt sint enim minima nisi odit. Ipsam fuga pariatur autem. Neque consequatur assumenda dolorem. Sunt tempora quis est officia non.","cost":"378.36","quantity":1,"isAddedToCart":false,"tag":"Women"},
        {"id":"48bd45d0-83e7-74c9-a492-cdec6246c649","src":"https://picsum.photos/640/480/?image=198","productName":"Pizza","description":"Et sit voluptatem incidunt eligendi delectus vel sed molestias. Maiores recusandae dolores quia excepturi quia non cum deleniti rem. Sit et velit ducimus ut sed excepturi.","cost":"622.54","quantity":0,"isAddedToCart":false,"tag":"Men"},
        {"id":"ae187d37-4535-ed0f-d042-4650955f2cd7","src":"https://picsum.photos/640/480/?image=831","productName":"Mouse","description":"Molestias quis sint et. Qui et dolor voluptatem voluptas accusamus culpa. Qui voluptates rerum quos. Recusandae et sit esse beatae provident et.","cost":"382.18","quantity":1,"isAddedToCart":false,"tag":"Women"},
        {"id":"d6a5b17e-e0bc-81fd-194f-aca1430d1a71","src":"https://picsum.photos/640/480/?image=76","productName":"Salad","description":"Praesentium dolores ut. Enim adipisci pariatur sunt. Iure quia tempora quod et.","cost":"778.18","quantity":0,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"ed1b3509-097a-f4ad-e469-e4fbca292b09","src":"https://picsum.photos/640/480/?image=909","productName":"Towels","description":"Adipisci aperiam aut nemo. Voluptate cum deserunt possimus magnam et ipsam odit nemo. Nemo dignissimos ipsam aliquam laborum dolor optio. Unde est dolor vero molestiae.","cost":"994.00","quantity":0,"isAddedToCart":false,"tag":"Women"},
        {"id":"854a1029-9e36-ff91-71c9-a7e964895b03","src":"https://picsum.photos/640/480/?image=142","productName":"Sausages","description":"Occaecati voluptas saepe quasi et cumque. Optio voluptatem omnis facere mollitia. Ut rerum quae ut quia aut. Qui et praesentium velit ipsa repudiandae facilis. Nobis culpa est delectus quia fugiat eum tenetur vel.","cost":"689.66","quantity":1,"isAddedToCart":false,"tag":"Men"},
        {"id":"18267bc4-be37-3e77-d3e3-55deac8d264f","src":"https://picsum.photos/640/480/?image=939","productName":"Shoes","description":"Inventore iusto aut dignissimos dolorem repellendus voluptatum. Delectus nobis libero expedita ut ratione consequatur.","cost":"713.35","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"7b1bc6fe-325f-bdbb-3183-a2fffe5c79a9","src":"https://picsum.photos/640/480/?image=838","productName":"Computer","description":"Quam nam veritatis quo autem in. Velit quam quo laboriosam.","cost":"35.69","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"7f095f3f-cd47-ff0b-8053-07d8e07f93bc","src":"https://picsum.photos/640/480/?image=404","productName":"Sausages","description":"Quibusdam ullam dignissimos accusamus. Laboriosam animi cupiditate aliquid voluptatem iusto ab est odio quis. Quae sit iure et. Commodi eos ea dolor nihil et iusto sed.","cost":"928.59","quantity":0,"isAddedToCart":false,"tag":"Men"},
        {"id":"9fb10939-7908-d5cd-1819-98ad26f9780b","src":"https://picsum.photos/640/480/?image=197","productName":"Hat","description":"Dignissimos suscipit dolor magni error quo vel distinctio eum nam. Omnis officiis ab ex est incidunt voluptatum eligendi ad quisquam. Perspiciatis sequi quae molestias mollitia quia. Aliquam et qui. Error est perferendis dolorum explicabo nesciunt quasi nihil.","cost":"927.45","quantity":0,"isAddedToCart":false,"tag":"Women"},
        {"id":"a820beff-d313-07fe-73b5-871cd5478f25","src":"https://picsum.photos/640/480/?image=129","productName":"Car","description":"Ut sunt sint enim minima nisi odit. Ipsam fuga pariatur autem. Neque consequatur assumenda dolorem. Sunt tempora quis est officia non.","cost":"378.36","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"48bd45d0-83e7-74c9-a492-cdec6246c649","src":"https://picsum.photos/640/480/?image=198","productName":"Pizza","description":"Et sit voluptatem incidunt eligendi delectus vel sed molestias. Maiores recusandae dolores quia excepturi quia non cum deleniti rem. Sit et velit ducimus ut sed excepturi.","cost":"622.54","quantity":0,"isAddedToCart":false,"tag":"Men"},
        {"id":"ae187d37-4535-ed0f-d042-4650955f2cd7","src":"https://picsum.photos/640/480/?image=831","productName":"Mouse","description":"Molestias quis sint et. Qui et dolor voluptatem voluptas accusamus culpa. Qui voluptates rerum quos. Recusandae et sit esse beatae provident et.","cost":"382.18","quantity":1,"isAddedToCart":false,"tag":"Women"},
        {"id":"d6a5b17e-e0bc-81fd-194f-aca1430d1a71","src":"https://picsum.photos/640/480/?image=76","productName":"Salad","description":"Praesentium dolores ut. Enim adipisci pariatur sunt. Iure quia tempora quod et.","cost":"778.18","quantity":0,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"ed1b3509-097a-f4ad-e469-e4fbca292b09","src":"https://picsum.photos/640/480/?image=909","productName":"Towels","description":"Adipisci aperiam aut nemo. Voluptate cum deserunt possimus magnam et ipsam odit nemo. Nemo dignissimos ipsam aliquam laborum dolor optio. Unde est dolor vero molestiae.","cost":"994.00","quantity":0,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"854a1029-9e36-ff91-71c9-a7e964895b03","src":"https://picsum.photos/640/480/?image=142","productName":"Sausages","description":"Occaecati voluptas saepe quasi et cumque. Optio voluptatem omnis facere mollitia. Ut rerum quae ut quia aut. Qui et praesentium velit ipsa repudiandae facilis. Nobis culpa est delectus quia fugiat eum tenetur vel.","cost":"689.66","quantity":1,"isAddedToCart":false,"tag":"Women"},
        {"id":"18267bc4-be37-3e77-d3e3-55deac8d264f","src":"https://picsum.photos/640/480/?image=939","productName":"Shoes","description":"Inventore iusto aut dignissimos dolorem repellendus voluptatum. Delectus nobis libero expedita ut ratione consequatur.","cost":"713.35","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"7b1bc6fe-325f-bdbb-3183-a2fffe5c79a9","src":"https://picsum.photos/640/480/?image=838","productName":"Computer","description":"Quam nam veritatis quo autem in. Velit quam quo laboriosam.","cost":"35.69","quantity":1,"isAddedToCart":false,"tag":"Men"},
        {"id":"7f095f3f-cd47-ff0b-8053-07d8e07f93bc","src":"https://picsum.photos/640/480/?image=404","productName":"Sausages","description":"Quibusdam ullam dignissimos accusamus. Laboriosam animi cupiditate aliquid voluptatem iusto ab est odio quis. Quae sit iure et. Commodi eos ea dolor nihil et iusto sed.","cost":"928.59","quantity":0,"isAddedToCart":false,"tag":"Men"},
        {"id":"9fb10939-7908-d5cd-1819-98ad26f9780b","src":"https://picsum.photos/640/480/?image=197","productName":"Hat","description":"Dignissimos suscipit dolor magni error quo vel distinctio eum nam. Omnis officiis ab ex est incidunt voluptatum eligendi ad quisquam. Perspiciatis sequi quae molestias mollitia quia. Aliquam et qui. Error est perferendis dolorum explicabo nesciunt quasi nihil.","cost":"927.45","quantity":0,"isAddedToCart":false,"tag":"Women"},
        {"id":"a820beff-d313-07fe-73b5-871cd5478f25","src":"https://picsum.photos/640/480/?image=129","productName":"Car","description":"Ut sunt sint enim minima nisi odit. Ipsam fuga pariatur autem. Neque consequatur assumenda dolorem. Sunt tempora quis est officia non.","cost":"378.36","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"48bd45d0-83e7-74c9-a492-cdec6246c649","src":"https://picsum.photos/640/480/?image=198","productName":"Pizza","description":"Et sit voluptatem incidunt eligendi delectus vel sed molestias. Maiores recusandae dolores quia excepturi quia non cum deleniti rem. Sit et velit ducimus ut sed excepturi.","cost":"622.54","quantity":0,"isAddedToCart":false,"tag":"Men"},
        {"id":"ae187d37-4535-ed0f-d042-4650955f2cd7","src":"https://picsum.photos/640/480/?image=831","productName":"Mouse","description":"Molestias quis sint et. Qui et dolor voluptatem voluptas accusamus culpa. Qui voluptates rerum quos. Recusandae et sit esse beatae provident et.","cost":"382.18","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"d6a5b17e-e0bc-81fd-194f-aca1430d1a71","src":"https://picsum.photos/640/480/?image=76","productName":"Salad","description":"Praesentium dolores ut. Enim adipisci pariatur sunt. Iure quia tempora quod et.","cost":"778.18","quantity":0,"isAddedToCart":false,"tag":"Women"},
        {"id":"ed1b3509-097a-f4ad-e469-e4fbca292b09","src":"https://picsum.photos/640/480/?image=909","productName":"Towels","description":"Adipisci aperiam aut nemo. Voluptate cum deserunt possimus magnam et ipsam odit nemo. Nemo dignissimos ipsam aliquam laborum dolor optio. Unde est dolor vero molestiae.","cost":"994.00","quantity":0,"isAddedToCart":false,"tag":"Women"},
        {"id":"854a1029-9e36-ff91-71c9-a7e964895b03","src":"https://picsum.photos/640/480/?image=142","productName":"Sausages","description":"Occaecati voluptas saepe quasi et cumque. Optio voluptatem omnis facere mollitia. Ut rerum quae ut quia aut. Qui et praesentium velit ipsa repudiandae facilis. Nobis culpa est delectus quia fugiat eum tenetur vel.","cost":"689.66","quantity":1,"isAddedToCart":false,"tag":"Women"},
        {"id":"18267bc4-be37-3e77-d3e3-55deac8d264f","src":"https://picsum.photos/640/480/?image=939","productName":"Shoes","description":"Inventore iusto aut dignissimos dolorem repellendus voluptatum. Delectus nobis libero expedita ut ratione consequatur.","cost":"713.35","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"7b1bc6fe-325f-bdbb-3183-a2fffe5c79a9","src":"https://picsum.photos/640/480/?image=838","productName":"Computer","description":"Quam nam veritatis quo autem in. Velit quam quo laboriosam.","cost":"35.69","quantity":1,"isAddedToCart":false,"tag":"Men"},
        {"id":"7f095f3f-cd47-ff0b-8053-07d8e07f93bc","src":"https://picsum.photos/640/480/?image=404","productName":"Sausages","description":"Quibusdam ullam dignissimos accusamus. Laboriosam animi cupiditate aliquid voluptatem iusto ab est odio quis. Quae sit iure et. Commodi eos ea dolor nihil et iusto sed.","cost":"928.59","quantity":0,"isAddedToCart":false,"tag":"Women"},
        {"id":"9fb10939-7908-d5cd-1819-98ad26f9780b","src":"https://picsum.photos/640/480/?image=197","productName":"Hat","description":"Dignissimos suscipit dolor magni error quo vel distinctio eum nam. Omnis officiis ab ex est incidunt voluptatum eligendi ad quisquam. Perspiciatis sequi quae molestias mollitia quia. Aliquam et qui. Error est perferendis dolorum explicabo nesciunt quasi nihil.","cost":"927.45","quantity":0,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"a820beff-d313-07fe-73b5-871cd5478f25","src":"https://picsum.photos/640/480/?image=129","productName":"Car","description":"Ut sunt sint enim minima nisi odit. Ipsam fuga pariatur autem. Neque consequatur assumenda dolorem. Sunt tempora quis est officia non.","cost":"378.36","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"48bd45d0-83e7-74c9-a492-cdec6246c649","src":"https://picsum.photos/640/480/?image=198","productName":"Pizza","description":"Et sit voluptatem incidunt eligendi delectus vel sed molestias. Maiores recusandae dolores quia excepturi quia non cum deleniti rem. Sit et velit ducimus ut sed excepturi.","cost":"622.54","quantity":0,"isAddedToCart":false,"tag":"Men"},
        {"id":"ae187d37-4535-ed0f-d042-4650955f2cd7","src":"https://picsum.photos/640/480/?image=831","productName":"Mouse","description":"Molestias quis sint et. Qui et dolor voluptatem voluptas accusamus culpa. Qui voluptates rerum quos. Recusandae et sit esse beatae provident et.","cost":"382.18","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"d6a5b17e-e0bc-81fd-194f-aca1430d1a71","src":"https://picsum.photos/640/480/?image=76","productName":"Salad","description":"Praesentium dolores ut. Enim adipisci pariatur sunt. Iure quia tempora quod et.","cost":"778.18","quantity":0,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"ed1b3509-097a-f4ad-e469-e4fbca292b09","src":"https://picsum.photos/640/480/?image=909","productName":"Towels","description":"Adipisci aperiam aut nemo. Voluptate cum deserunt possimus magnam et ipsam odit nemo. Nemo dignissimos ipsam aliquam laborum dolor optio. Unde est dolor vero molestiae.","cost":"994.00","quantity":0,"isAddedToCart":false,"tag":"Women"},
        {"id":"854a1029-9e36-ff91-71c9-a7e964895b03","src":"https://picsum.photos/640/480/?image=142","productName":"Sausages","description":"Occaecati voluptas saepe quasi et cumque. Optio voluptatem omnis facere mollitia. Ut rerum quae ut quia aut. Qui et praesentium velit ipsa repudiandae facilis. Nobis culpa est delectus quia fugiat eum tenetur vel.","cost":"689.66","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"18267bc4-be37-3e77-d3e3-55deac8d264f","src":"https://picsum.photos/640/480/?image=939","productName":"Shoes","description":"Inventore iusto aut dignissimos dolorem repellendus voluptatum. Delectus nobis libero expedita ut ratione consequatur.","cost":"713.35","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"7b1bc6fe-325f-bdbb-3183-a2fffe5c79a9","src":"https://picsum.photos/640/480/?image=838","productName":"Computer","description":"Quam nam veritatis quo autem in. Velit quam quo laboriosam.","cost":"35.69","quantity":1,"isAddedToCart":false,"tag":"Kitchen"},
        {"id":"7f095f3f-cd47-ff0b-8053-07d8e07f93bc","src":"https://picsum.photos/640/480/?image=404","productName":"Sausages","description":"Quibusdam ullam dignissimos accusamus. Laboriosam animi cupiditate aliquid voluptatem iusto ab est odio quis. Quae sit iure et. Commodi eos ea dolor nihil et iusto sed.","cost":"928.59","quantity":0,"isAddedToCart":false,"tag":"Women"},

    ],
    collectionnames: [
        { name: "Men", src: "https://picsum.photos/640/480/?image=197" },
        { name: "Women", src: "https://picsum.photos/640/480/?image=838" },
        { name: "Kitchen", src: "https://picsum.photos/640/480/?image=939" }
    ],
    filteredCollection:Array(),
    cartItems:Array()

}

export function collectionReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_ALL_COLLECTIONS:
            console.log(state.collection)
            return {
                ...state,
                collection: state.collection,
                collectionnames: state.collectionnames
            }

        case GET_FILTERED_COLLECTIONS:
            state.collection.filter(obj => {
                if( obj.tag === action.payload.tag){
                    state.filteredCollection.push(obj)
                }
              })
            return {
                ...state,
                filteredCollection:state.filteredCollection
                
            }
        default:
            return state
    }
}