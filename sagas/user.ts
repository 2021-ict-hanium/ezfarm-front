/* eslint-disable no-restricted-globals */
import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
    logInFailure,
    logInRequest,
    logInSuccess,
    logOutFailure,
    logOutSuccess,
    LOG_IN_REQUEST,
    LOG_OUT_REQUEST,
    signUpFailure,
    signUpSuccess,
    SIGN_UP_REQUEST,
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

function* logIn(action: ReturnType<typeof logInRequest>) {
    try {
        // const result: AxiosResponse<{ user: Me }> = yield call(logInAPI, action.data);
        yield delay(3000);
        yield put(logInSuccess(SampleUser));
    } catch (err) {
        yield put(logInFailure('로그인 실패'));
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
        yield put(logOutSuccess());
    } catch (err) {
        yield put(logOutFailure(err.message));
    }
}

function* signUp() {
    try {
        yield delay(3000);
        yield put(signUpSuccess());
    } catch (err) {
        yield put(signUpFailure(err.message));
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
