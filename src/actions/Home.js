import {
    GET_ARTICLES_DATA,
    GET_ARTICLES_DATA_SUCCESS,
    GET_ARTICLES_DATA_FAILURE
} from "../actionTypes";
import request from '../helpers/request';

export function getArticlesData() {
    return {
        type: GET_ARTICLES_DATA,
    }
}

export function getArticlesDataSuccess(payload) {
    return {
        type: GET_ARTICLES_DATA_SUCCESS,
        payload,
    }
}

export function getArticlesDataFailure(payload) {
    return {
        type: GET_ARTICLES_DATA_FAILURE,
        payload,
    }
}

export function fetchArticlesData() {
    return dispatch => {
        dispatch(getArticlesData());
        return request('https://my-json-server.typicode.com/mounikr23/articles-data/articles')
            .then(res => {
                dispatch(getArticlesDataSuccess(res));
                // return res;
            })
            .catch(error => dispatch(getArticlesDataFailure(error)));
    };
}