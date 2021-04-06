import api from './apiController';

import URL from './url'

const BASE_URL = `${URL}/posts`

export function getPosts () {
    return api.get(`${BASE_URL}/?timestamp=${new Date()}`);
}
