/* eslint-disable no-restricted-globals */
import { destroyCookie, setCookie } from 'nookies';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
    loadProfileFailure,
    loadProfileRequest,
    loadProfileSuccess,
    LOAD_PROFILE_REQUEST,
    logInFailure,
    logInRequest,
    logInSuccess,
    logOutFailure,
    logOutSuccess,
    LOG_IN_REQUEST,
    LOG_OUT_REQUEST,
    modifyProfileFailure,
    modifyProfileRequest,
    modifyProfileSuccess,
    MODIFY_PROFILE_REQUEST,
    signUpFailure,
    signUpRequest,
    signUpSuccess,
    SIGN_UP_REQUEST,
} from '../../actions/user';
import { LoginFormData, Me, ProfileModifyFormData, SignUpFormData } from '../../interfaces/data/user';
import { getToken } from '.';

function logInAPI(data: LoginFormData) {
    return axios({
        method: 'POST',
        url: '/api/user/login',
        data,
    });
}

function* logIn(action: ReturnType<typeof logInRequest>) {
    try {
        const result: AxiosResponse<{ accessToken: string; tokenType: string }> = yield call(logInAPI, action.data);
        setCookie(null, 'accessToken', result.data.accessToken, { path: '/' });
        sessionStorage.setItem('accessToken', result.data.accessToken);
        yield put(logInSuccess());
    } catch (err) {
        yield put(logInFailure('로그인 실패'));
    }
}

function* logOut() {
    try {
        destroyCookie(null, 'accessToken');
        sessionStorage.removeItem('accessToken');
        yield put(logOutSuccess());
    } catch (err) {
        yield put(logOutFailure(err.message));
    }
}

function signUpAPI(data: SignUpFormData) {
    return axios({
        method: 'POST',
        url: '/api/user/signup',
        data,
    });
}

function* signUp(action: ReturnType<typeof signUpRequest>) {
    try {
        yield call(signUpAPI, action.data);
        yield put(signUpSuccess());
    } catch (err) {
        yield put(signUpFailure(err.message));
    }
}

function loadProfileAPI(token: string) {
    return axios({
        method: 'GET',
        url: `/api/user`,
        headers: { Authorization: `Bearer ${token}` },
    });
}

function* loadProfile(action: ReturnType<typeof loadProfileRequest>) {
    try {
        const result: AxiosResponse<Me> = yield call(loadProfileAPI, action.token);
        yield put(loadProfileSuccess(result.data));
    } catch (err) {
        yield put(loadProfileFailure(err.message));
    }
}

function modifyProfileAPI(data: FormData) {
    return axios({
        method: 'PATCH',
        url: '/api/user',
        headers: { Authorization: `Bearer ${getToken()}` },
        data,
    });
}

function* modifyProfile(action: ReturnType<typeof modifyProfileRequest>) {
    try {
        const result: AxiosResponse<ProfileModifyFormData> = yield call(modifyProfileAPI, action.data);
        yield put(modifyProfileSuccess(result.data));
    } catch (err) {
        yield put(modifyProfileFailure(err.message));
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

function* watchLoadProfile() {
    yield takeLatest(LOAD_PROFILE_REQUEST, loadProfile);
}

function* watchModifyProfile() {
    yield takeLatest(MODIFY_PROFILE_REQUEST, modifyProfile);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchModifyProfile),
        fork(watchLoadProfile),
    ]);
}
