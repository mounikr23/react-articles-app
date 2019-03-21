import {
    GET_ARTICLE_DETAILS,
    GET_ARTICLE_DETAILS_SUCCESS,
    GET_ARTICLE_DETAILS_FAILURE
} from "../actionTypes";

const defaultState = {
    articleDetails: {
        user: {},
        comments: []
    }
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_ARTICLE_DETAILS:
            return {
                ...state,
            }
        case GET_ARTICLE_DETAILS_SUCCESS:
            const { data, id } = payload;
            return {
                ...state,
                articleDetails: data[id]
            }
        case GET_ARTICLE_DETAILS_FAILURE:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}