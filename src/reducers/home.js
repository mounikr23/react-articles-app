import {
    GET_ARTICLES_DATA,
    GET_ARTICLES_DATA_SUCCESS,
    GET_ARTICLES_DATA_FAILURE
} from '../actionTypes';

const defaultState = {
    articles: []
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_ARTICLES_DATA:
            return {
                ...state,
            }
        case GET_ARTICLES_DATA_SUCCESS:
            console.log('pay', payload)
            return {
                ...state,
                articles: payload
            }
        case GET_ARTICLES_DATA_FAILURE:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}