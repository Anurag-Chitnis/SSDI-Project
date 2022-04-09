const INITIAL_STATE = {
    error: null,
    message: null,
}


export const AlertReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type) {
        case "ALERT_MESSAGE_SUCCESS":
            return {
                ...state,
                message: payload
            }
        case "ALERT_MESSAGE_FAILURE":
            return {
                ...state,
                message: payload
            }
        default:
            return state;
    }
}