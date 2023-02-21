export const getUsersListReducer=(state={users: []}, action) =>
{
    switch(action.type) {
        case 'GET_USERSLIST_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_USERSLIST_SUCCESS': return {
            loading: false,
            users: action.payload
        }
        case 'GET_USERSLIST_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export const getPizzasListReducer=(state={pizzas: []}, action) =>
{
    switch(action.type) {
        case 'GET_LIST_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_LIST_SUCCESS': return {
            loading: false,
            pizzas: action.payload
        }
        case 'GET_LIST_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export const addPizzaReducer=(state={}, action) =>
{
    switch(action.type) {
        case 'PIZZA_ADD_REQUEST': return {
            loading: true,
        }
        case 'PIZZA_ADD_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'PIZZA_ADD_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}

export const deletePizzaReducer=(state={}, action) =>
{
    switch(action.type) {
        case 'PIZZA_DELETE_REQUEST': return {
            loading: true,
        }
        case 'PIZZA_DELETE_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'PIZZA_DELETE_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}


