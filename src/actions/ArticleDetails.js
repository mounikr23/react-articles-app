import {
    GET_ARTICLE_DETAILS,
    GET_ARTICLE_DETAILS_SUCCESS,
    GET_ARTICLE_DETAILS_FAILURE
} from "../actionTypes";
import request from '../helpers/request';

export function getArticleDetails() {
    return {
        type: GET_ARTICLE_DETAILS,
    }
}

export function getArticleDetailsSuccess(payload) {
    return {
        type: GET_ARTICLE_DETAILS_SUCCESS,
        payload,
    }
}

export function getArticleDetailsFailure(payload) {
    return {
        type: GET_ARTICLE_DETAILS_FAILURE,
        payload,
    }
}

export function fetchArticleDetails(id) {
    return dispatch => {
        dispatch(getArticleDetails());
        return request(`https://my-json-server.typicode.com/mounikr23/articles-data/articlesById`)
            .then(response => {
                dispatch(getArticleDetailsSuccess({ data: response, id }));
                // return { response, id };
            })
            .catch(error => dispatch(getArticleDetailsFailure(error)));
    };
}