export const alertSucess = (msg) => dispatch => {
    dispatch({
        type: "ALERT_MESSAGE_SUCCESS",
        payload: msg
    })
}

export const alertFailure = (msg) => dispatch => {
    dispatch({
        type: "ALERT_MESSAGE_FAILURE",
        payload: msg
    })
}