import {
    GET_USER_DETAILS,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE
} from "../actionTypes";

const defaultState = {
    userDetails: {}
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_USER_DETAILS:
            return {
                ...state,
            }
        case GET_USER_DETAILS_SUCCESS:
            const { data, id } = payload;
            return {
                ...state,
                userDetails: data[id].user
            }
        case GET_USER_DETAILS_FAILURE:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}