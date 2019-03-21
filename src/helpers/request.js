/* eslint-disable no-prototype-builtins */
import axios from 'axios';
import snakifyObject from 'snakecase-keys';

const createHeaders = (headers = {}) => ({
    'Content-Type': 'application/json',
    'crossDomain': true,
    ...headers,
});

export default function (url, data = {}, options = {}) {
    try {
        const { headers, method = 'get' } = options;
        let payload = {};
        if (
            (options.hasOwnProperty('headers') &&
                options.headers.hasOwnProperty('Content-Type')) ||
            options.hasOwnProperty('Content-Type')
        ) {
            payload = data;
        } else {
            payload = snakifyObject(data);
        }
        url = `https://cors-anywhere.herokuapp.com/${url}`;
        const config = {
            url,
            method,
            data: payload,
            headers: createHeaders(headers),
        };

        return axios(config).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response.data);
            }
            // if status == 401 disptach unauthorized error
            return Promise.reject(response.data);
        });
    } catch (error) {
        return Promise.reject(error);
    }
}
