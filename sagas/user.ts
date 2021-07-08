/* eslint-disable no-restricted-globals */
import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutSuccess,
    logoutFailure,
    LOG_IN_REQUEST,
    LOG_OUT_REQUEST,
} from '../actions/user';
import { LoginFormData, Me } from '../interfaces/data/user';
import { SampleUser } from '../utils/data';

function logInAPI(data: LoginFormData) {
    return axios({
        method: 'POST',
        url: '/api/v1/signin',
        data,
    });
}

function* logIn(action: ReturnType<typeof loginRequest>) {
    try {
        // const result: AxiosResponse<{ user: Me }> = yield call(logInAPI, action.data);
        yield delay(3000);
        yield put(loginSuccess(SampleUser));
    } catch (err) {
        yield put(loginFailure('로그인 실패'));
    }
}

function logOutAPI() {
    return axios({
        method: 'POST',
        url: '/api/v1/signin',
    });
}

function* logOut() {
    try {
        yield delay(1000);
        yield put(logoutSuccess());
    } catch (err) {
        yield put(logoutFailure(err.message));
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
    yield all([fork(watchLogIn), fork(watchLogOut)]);
}
