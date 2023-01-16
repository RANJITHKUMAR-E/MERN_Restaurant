export const placeOrderReducer=(state={}, action) =>
{
    switch(action.type) {
        case 'PLACE_ORDER_REQUEST': return {
            loading: true
        }

            break;
        case 'PLACE_ORDER_SUCCESS': return {
            loading: false,
            success: true
        }

            break;
        case 'PLACE_ORDER_FAILED': return {
            loading: false,
            error: action.payload
        }

            break;

        default:
            return state
    }
}



export const getUserOrdersReducers=(state={orders: []}, action) =>
{
    switch(action.type) {
        case 'GET_USER_ORDERS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_USER_ORDERS_SUCCESS': return {
            loading: false,
            orders: action.payload
        }
        case 'GET_USER_ORDERS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}