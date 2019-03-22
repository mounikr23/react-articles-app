import {
    GET_ARTICLES_DATA,
    GET_ARTICLES_DATA_SUCCESS,
    GET_ARTICLES_DATA_FAILURE
} from '../actionTypes';

const defaultState = {
    articles: []
}
const getUsersList = (articles) => {
    const users = articles.map(article => {
        return article.user.name;
    })
    return users;
}
export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_ARTICLES_DATA:
            return {
                ...state,
            }
        case GET_ARTICLES_DATA_SUCCESS:
            const usersList = getUsersList(payload);
            return {
                ...state,
                articles: payload,
                usersList
            }
        case GET_ARTICLES_DATA_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return {
                ...state
            }
    }
}