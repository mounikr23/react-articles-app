
import {
    GET_USER_DETAILS,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE
} from "../actionTypes";
import request from '../helpers/request';

export function getUserDetails() {
    return {
        type: GET_USER_DETAILS,
    }
}

export function getUserDetailsSuccess(payload) {
    return {
        type: GET_USER_DETAILS_SUCCESS,
        payload,
    }
}

export function getUserDetailsFailure(payload) {
    return {
        type: GET_USER_DETAILS_FAILURE,
        payload,
    }
}

export function fetchUserDetails(id) {
    return dispatch => {
        dispatch(getUserDetails());
        return request(`https://my-json-server.typicode.com/mounikr23/articles-data/articlesById`)
            .then(response => {
                dispatch(getUserDetailsSuccess({ data: response, id }));
            })
            .catch(error => dispatch(getUserDetailsFailure(error)));
    };
}