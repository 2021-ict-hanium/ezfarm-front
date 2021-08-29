import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
    addFavoriteFarmFailure,
    addFavoriteFarmRequest,
    addFavoriteFarmSuccess,
    ADD_FAVORITE_FARM_REQUEST,
    loadFavoriteFarmFailure,
    loadFavoriteFarmSuccess,
    loadOtherFarmFailure,
    loadOtherFarmRequest,
    loadOtherFarmSuccess,
    LOAD_FAVORITE_FARM_REQUEST,
    LOAD_OTHER_FARM_REQUEST,
    removeFavoriteFarmFailure,
    removeFavoriteFarmRequest,
    removeFavoriteFarmSuccess,
    REMOVE_FAVORITE_FARM_REQUEST,
} from '../../actions/otherFarm';
import { IFarmList, IFarmSearch } from '../../interfaces/data/otherFarm';
import { getToken } from '.';

function loadOtherFarmAPI(data: IFarmSearch) {
    return axios({
        method: 'GET',
        url: '/api/farm/other',
        headers: { Authorization: `Bearer ${getToken()}` },
        params: {
            ...data,
        },
    });
}

function* loadOtherFarm(action: ReturnType<typeof loadOtherFarmRequest>) {
    try {
        const result: AxiosResponse<IFarmList[]> = yield call(loadOtherFarmAPI, action.data);
        yield put(loadOtherFarmSuccess(result.data));
    } catch (err) {
        yield put(loadOtherFarmFailure(err.message));
    }
}

function loadFavoriteFarmAPI() {
    return axios({
        method: 'GET',
        url: '/api/favorite',
        headers: { Authorization: `Bearer ${getToken()}` },
    });
}

function* loadFavoriteFarm() {
    try {
        const result: AxiosResponse<IFarmList[]> = yield call(loadFavoriteFarmAPI);
        yield put(loadFavoriteFarmSuccess(result.data));
    } catch (err) {
        console.log(err);
        yield put(loadFavoriteFarmFailure(err.message));
    }
}

function addFavoriteFarmAPI(farmId: number) {
    return axios({
        method: 'POST',
        url: `/api/favorite/${farmId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
    });
}

function* addFavoriteFarm(action: ReturnType<typeof addFavoriteFarmRequest>) {
    try {
        yield call(addFavoriteFarmAPI, action.farmId);
        yield put(addFavoriteFarmSuccess());
    } catch (err) {
        yield put(addFavoriteFarmFailure(err.message));
    }
}

function removeFavoriteFarmAPI(favoriteId: number) {
    return axios({
        method: 'DELETE',
        url: `/api/favorite`,
        headers: { Authorization: `Bearer ${getToken()}` },
        params: {
            favoriteId,
        },
    });
}

function* removeFavoriteFarm(action: ReturnType<typeof removeFavoriteFarmRequest>) {
    try {
        yield call(removeFavoriteFarmAPI, action.favoritedId);
        yield put(removeFavoriteFarmSuccess());
    } catch (err) {
        yield put(removeFavoriteFarmFailure(err.message));
    }
}

function* watchLoadOtherFarm() {
    yield takeLatest(LOAD_OTHER_FARM_REQUEST, loadOtherFarm);
}
function* watchLoadFavoriteFarm() {
    yield takeLatest(LOAD_FAVORITE_FARM_REQUEST, loadFavoriteFarm);
}
function* watchAddFavoriteFarm() {
    yield takeLatest(ADD_FAVORITE_FARM_REQUEST, addFavoriteFarm);
}
function* watchRemoveFavoriteFarm() {
    yield takeLatest(REMOVE_FAVORITE_FARM_REQUEST, removeFavoriteFarm);
}

export default function* otherFarmSaga() {
    yield all([
        fork(watchLoadOtherFarm),
        fork(watchLoadFavoriteFarm),
        fork(watchAddFavoriteFarm),
        fork(watchRemoveFavoriteFarm),
    ]);
}
