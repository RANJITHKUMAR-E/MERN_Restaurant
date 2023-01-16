import axios from "axios";
export const placeOrder=(token, amount) => async (dispatch, getState) =>
{
    dispatch({type: 'PLACE_ORDER_REQUEST'})
    const curUser=getState().loginUserReducer.curUser
    const cartItems=getState().cartReducer.cartItems

    try {
        const res=await axios.post('/api/orders/placeOrder', {token, amount, curUser, cartItems})
        dispatch({type: 'PLACE_ORDER_SUCCESS'})
        console.log(res)
    } catch(error) {
        dispatch({type: 'PLACE_ORDER_FAILED'})
        console.log(error)
    }
}

export const getUserOrders=() => async (dispatch, getState) =>
{
    const curUser=getState().loginUserReducer.curUser
    dispatch({type: "GET_USER_ORDERS_REQUEST"})
    try {
        const response=await axios.post('api/orders/getuserorders', {userid: curUser._id})
        console.log(response)
        dispatch({type: 'GET_USER_ORDERS_SUCCESS', payload: response.data})
    } catch(error) {
        console.log("Error")
        console.log({error})
        dispatch({type: 'GET_USER_ORDERS_FAILED', payload: error})
    }
}
