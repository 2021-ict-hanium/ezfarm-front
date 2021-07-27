import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import farmSaga from './farm';

axios.defaults.baseURL = 'https://api.hanium-ezfarm.com/';
axios.defaults.withCredentials = true;

export const getToken = () => (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')) as string;

export default function* rootSaga() {
    yield all([fork(userSaga), fork(farmSaga)]);
}
