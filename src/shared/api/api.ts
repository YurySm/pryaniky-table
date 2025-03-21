import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

const userData = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
const authToken = userData ? JSON.parse(userData) : '';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        'x-auth': authToken,
    },
});
