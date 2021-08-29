import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import myFarmSaga from './myFarm';
import otherFarm from './otherFarm';
import { baseURL } from '../utils/utils';

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export const getToken = () => (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')) as string;

export default function* rootSaga() {
    yield all([fork(userSaga), fork(myFarmSaga), fork(otherFarm)]);
}
