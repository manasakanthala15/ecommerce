import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { rootReducer } from './rootReducer';

export default function configureStore(history: History) {
    const middleware = [
        thunk,
        routerMiddleware(history)
    ];
    const products = [
        { "id": "be917150-fcaf-d7e2-f791-833a9d4956c8", "src": "https://picsum.photos/640/480/?image=820", "productName": "Shoes", "description": "Vel et earum maiores in velit et. Facilis ut harum et eius facilis ut cum commodi dolorum.", "cost": "97.54", "quantity": 0, "isAddedToCart": true },
        { "id": "70b3df61-f754-441c-d2ee-a3b22ec93892", "src": "https://picsum.photos/640/480/?image=536", "productName": "Car", "description": "Et et qui voluptas inventore nesciunt quis quia. Incidunt dolores consequatur. Aut qui eaque quae et doloremque aliquam minus. Sed ad eum est aut hic sapiente libero.", "cost": "870.81", "quantity": 1, "isAddedToCart": false },
        { "id": "e7712541-a48a-a65e-6437-afcd817185b8", "src": "https://picsum.photos/640/480/?image=257", "productName": "Chips", "description": "Minima rerum dolor. Accusamus itaque qui inventore nihil. Voluptate commodi sunt aut et. Iusto porro sint aut rerum totam et.", "cost": "562.94", "quantity": 1, "isAddedToCart": true },
        { "id": "ca919242-515a-38f7-3dfc-9694ff24dc7e", "src": "https://picsum.photos/640/480/?image=392", "productName": "Table", "description": "Quis harum vero totam aut occaecati ipsa. Reprehenderit vel accusantium et impedit qui perspiciatis assumenda. Quisquam rerum optio vitae eaque occaecati consequatur ratione temporibus ut. Ipsam nemo odit rem autem ratione magni omnis. Et eveniet sed nam sunt eos rem libero est.", "cost": "935.67", "quantity": 1, "isAddedToCart": false },
        { "id": "04d62fa7-24de-f5ed-7014-0c5b46d6896e", "src": "https://picsum.photos/640/480/?image=601", "productName": "Bacon", "description": "Repellendus rerum suscipit qui iusto. Molestias ut ab. Autem at ut vitae excepturi itaque laudantium distinctio. Porro aut et suscipit nemo aut rerum aliquid.", "cost": "182.62", "quantity": 0, "isAddedToCart": false },
        { "id": "b51b0726-9282-8670-af68-1f9ec00efe1d", "src": "https://picsum.photos/640/480/?image=1071", "productName": "Bike", "description": "Et saepe odit nulla. Dolores laborum doloremque itaque corrupti soluta. Nulla quis qui nihil deleniti. Modi distinctio ut facilis quis soluta autem. Deserunt ut ea quisquam a sed corporis.", "cost": "907.70", "quantity": 1, "isAddedToCart": true },
        { "id": "b5256b48-2c2d-abdd-390a-cb8ed3f14920", "src": "https://picsum.photos/640/480/?image=8", "productName": "Bike", "description": "Id molestiae illo et ut quasi libero. Non error voluptatem itaque.", "cost": "767.46", "quantity": 0, "isAddedToCart": false },
        { "id": "f3441d67-20de-6f81-27aa-61cd8a40ceaf", "src": "https://picsum.photos/640/480/?image=90", "productName": "Tuna", "description": "Esse voluptatum quia amet quia suscipit distinctio. Autem in error alias pariatur. Qui doloremque molestias aut ut quo quia odit eos officiis. Id eum dolor sapiente qui itaque ad pariatur. Dolorem deleniti ipsa enim et natus aspernatur ipsa.", "cost": "528.19", "quantity": 1, "isAddedToCart": true },
        { "id": "5e5dade9-24cb-46bb-6628-8b96995e7027", "src": "https://picsum.photos/640/480/?image=524", "productName": "Shirt", "description": "Nostrum sequi odit assumenda magnam doloribus velit natus. Quod neque in dolore ea eveniet aliquam non et. At expedita sapiente voluptas sit vero.", "cost": "865.91", "quantity": 1, "isAddedToCart": false },
        { "id": "9882531a-225f-58d7-29c3-f7db05379cfe", "src": "https://picsum.photos/640/480/?image=271", "productName": "Fish", "description": "Similique dolor in. Ut corrupti voluptatibus voluptas iure omnis repudiandae. In ex facere minus quia sint.", "cost": "391.18", "quantity": 0, "isAddedToCart": true }
    ]
    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer,
        compose(applyMiddleware(...middleware))
    );
}
