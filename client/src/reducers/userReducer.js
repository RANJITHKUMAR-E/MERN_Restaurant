export const registerUserReducer=(state={}, action) =>
{
    switch(action.type) {
        case 'USER_REGISTER_REQUEST': return {
            loading: true
        }

            break;
        case 'USER_REGISTER_SUCCESS': return {
            loading: false,
            success: true
        }

            break;
        case 'USER_REGISTER_FAILED': return {
            loading: false,
            error: action.payload
        }

            break;

        default:
            return state
    }
}

export const loginUserReducer=(state={}, action) =>
{
    switch(action.type) {
        case 'USER_LOGIN_REQUEST': return {
            loading: true
        }

            break;
        case 'USER_LOGIN_SUCCESS': return {
            loading: false,
            success: true,
            curUser: action.payload
        }

            break;
        case 'USER_Login_FAILED': return {
            loading: false,
            error: action.payload
        }

            break;

        default:
            return state
    }
}