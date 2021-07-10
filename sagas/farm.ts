import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
    controlFailure,
    controlSuccess,
    CONTROL_REQUEST,
    viewListFailure,
    viewListSuccess,
    VIEW_LIST_REQUEST,
} from '../actions/farm';
import { ViewListData } from '../utils/data';

function viewListAPI() {
    return axios({
        method: 'POST',
        url: '/api/v1/signin',
    });
}

function* viewList() {
    try {
        // const result: AxiosResponse<{ }> = yield call(controlAPI, action.data);
        yield delay(2000);
        yield put(viewListSuccess(ViewListData));
    } catch (err) {
        yield put(viewListFailure(err.message));
    }
}

function controlAPI() {
    return axios({
        method: 'POST',
        url: '/api/v1/signin',
    });
}

function* control() {
    try {
        // const result: AxiosResponse<{ }> = yield call(controlAPI, action.data);
        yield delay(2000);
        yield put(controlSuccess());
    } catch (err) {
        yield put(controlFailure(err.message));
    }
}

function* watchViewList() {
    yield takeLatest(VIEW_LIST_REQUEST, viewList);
}

function* watchControl() {
    yield takeLatest(CONTROL_REQUEST, control);
}

export default function* farmSaga() {
    yield all([fork(watchControl), fork(watchViewList)]);
}
