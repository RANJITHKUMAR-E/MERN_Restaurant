import {combineReducers} from "redux"
import {legacy_createStore as createStore} from 'redux';
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import {getAllPizzasReducer} from "./reducers/pizzaReducer"
import {cartReducer} from "./reducers/cartReducer";
import {loginUserReducer, registerUserReducer} from "./reducers/userReducer";
import {placeOrderReducer, getUserOrdersReducers} from './reducers/orderReducer'
import {getUsersListReducer, getPizzasListReducer, addPizzaReducer, deletePizzaReducer} from "./reducers/adminReducer";

const finalReducer=combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducers: getUserOrdersReducers,
    getUsersListReducer: getUsersListReducer,
    getPizzasListReducer: getPizzasListReducer,
    addPizzaReducer: addPizzaReducer,
    deletePizzaReducer: deletePizzaReducer

})

const cartItems=localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]

const curUser=localStorage.getItem('curUser')? JSON.parse(localStorage.getItem('curUser')):null

const intialstate={
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        curUser: curUser
    }
}
const compostEnhancers=composeWithDevTools({})
const store=createStore(finalReducer, intialstate, compostEnhancers(applyMiddleware(thunk)))

export default store