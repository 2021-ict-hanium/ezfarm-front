import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
    addMyfarmFailure,
    addMyfarmRequest,
    addMyfarmSuccess,
    ADD_MYFARM_REQUEST,
    loadAllMyfarmFailure,
    loadAllMyfarmRequest,
    loadAllMyfarmSuccess,
    loadControllerFailure,
    loadControllerRequest,
    loadControllerSuccess,
    loadMyfarmDashboardFailure,
    loadMyfarmDashboardRequest,
    loadMyfarmDashboardSuccess,
    loadFarmViewFailure,
    loadFarmViewRequest,
    loadFarmViewSuccess,
    LOAD_ALL_MYFARM_REQUEST,
    LOAD_CONTROLLER_REQUEST,
    LOAD_MYFARM_DASHBOARD_REQUEST,
    LOAD_FARM_VIEW_REQUEST,
    modifyControllerFailure,
    modifyControllerRequest,
    modifyControllerSuccess,
    modifyMyfarmFailure,
    modifyMyfarmRequest,
    modifyMyfarmSuccess,
    MODIFY_CONTROLLER_REQUEST,
    MODIFY_MYFARM_REQUEST,
    removeMyfarmFailure,
    removeMyfarmRequest,
    removeMyfarmSuccess,
    REMOVE_MYFARM_REQUEST,
} from '../../actions/myFarm';
import { getToken } from '.';
import { SampleViewList } from '../../utils/sample';
import {
    IFarmController,
    IFarmView,
    IMyFarmDashboard,
    IMyfarmFormData,
    IMyFarmInfo,
} from '../../interfaces/data/myFarm';

function addMyfarmAPI(data: IMyfarmFormData) {
    return axios({
        method: 'POST',
        url: '/api/farm/me',
        headers: { Authorization: `Bearer ${getToken()}` },
        data,
    });
}

function* addMyfarm(action: ReturnType<typeof addMyfarmRequest>) {
    try {
        yield call(addMyfarmAPI, action.data);
        yield put(addMyfarmSuccess());
    } catch (err) {
        yield put(addMyfarmFailure(err.message));
    }
}

function loadAllMyfarmAPI(token: string) {
    return axios({
        method: 'GET',
        url: '/api/farm/me',
        headers: { Authorization: `Bearer ${token}` },
    });
}

function* loadAllMyfarm(action: ReturnType<typeof loadAllMyfarmRequest>) {
    try {
        const result: AxiosResponse<IMyFarmInfo[]> = yield call(loadAllMyfarmAPI, action.token);
        yield put(loadAllMyfarmSuccess(result.data));
    } catch (err) {
        yield put(loadAllMyfarmFailure(err.message));
    }
}

function loadMyfarmDashboardAPI(farmId: number) {
    return axios({
        method: 'GET',
        url: `/api/facility/recent`,
        headers: { Authorization: `Bearer  ${getToken()}` },
    });
}

function* loadMyfarmDashboard(action: ReturnType<typeof loadMyfarmDashboardRequest>) {
    try {
        const result: AxiosResponse<IMyFarmDashboard> = yield call(loadMyfarmDashboardAPI, action.farmId);
        yield put(loadMyfarmDashboardSuccess(result.data));
    } catch (err) {
        yield put(loadMyfarmDashboardFailure(err.message));
    }
}

function modifyMyfarmAPI(farmId: number, data: IMyfarmFormData) {
    return axios({
        method: 'PATCH',
        url: `/api/farm/me/${farmId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
        data,
    });
}

function* modifyMyfarm(action: ReturnType<typeof modifyMyfarmRequest>) {
    try {
        yield call(modifyMyfarmAPI, action.farmId, action.data);
        yield put(modifyMyfarmSuccess());
    } catch (err) {
        yield put(modifyMyfarmFailure(err.message));
    }
}

function removeMyfarmAPI(farmId: number) {
    return axios({
        method: 'DELETE',
        url: `/api/farm/me/${farmId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
    });
}

function* removeMyfarm(action: ReturnType<typeof removeMyfarmRequest>) {
    try {
        console.log('farmId : ', action.farmId);
        yield call(removeMyfarmAPI, action.farmId);
        yield put(removeMyfarmSuccess());
    } catch (err) {
        yield put(removeMyfarmFailure(err.message));
    }
}

function loadControllerAPI(farmId: number) {
    return axios({
        method: 'GET',
        url: `/api/farm/me/${farmId}`,
        headers: { Authorization: `Bearer ${getToken()}` },
    });
}

function* loadController(action: ReturnType<typeof loadControllerRequest>) {
    try {
        const result: AxiosResponse<IFarmController> = yield call(loadControllerAPI, action.farmId);
        yield put(loadControllerSuccess(result.data));
    } catch (err) {
        yield put(loadControllerFailure(err.message));
    }
}

function modifyControllerAPI(data: IFarmController) {
    return axios({
        method: 'POST',
        url: '/api/remote',
        headers: { Authorization: `Bearer ${getToken()}` },
        data,
    });
}

function* modifyController(action: ReturnType<typeof modifyControllerRequest>) {
    try {
        yield call(modifyControllerAPI, action.data);
        yield put(modifyControllerSuccess());
    } catch (err) {
        yield put(modifyControllerFailure(err.message));
    }
}

function loadFarmViewAPI(farmId: number) {
    return axios({
        method: 'GET',
        url: `/api/screen/live`,
        headers: { Authorization: `Bearer ${getToken()}` },
        params: {
            farmId,
        },
    });
}

function* loadFarmView(action: ReturnType<typeof loadFarmViewRequest>) {
    try {
        const result: AxiosResponse<IFarmView> = yield call(loadFarmViewAPI, action.farmId);
        yield put(loadFarmViewSuccess(result.data));
    } catch (err) {
        yield put(loadFarmViewFailure(err.message));
    }
}

function* watchAddMyfarm() {
    yield takeLatest(ADD_MYFARM_REQUEST, addMyfarm);
}

function* watchLoadAllMyfarm() {
    yield takeLatest(LOAD_ALL_MYFARM_REQUEST, loadAllMyfarm);
}

function* watchLoadMyfarmDashboard() {
    yield takeLatest(LOAD_MYFARM_DASHBOARD_REQUEST, loadMyfarmDashboard);
}

function* watchModifyMyfarm() {
    yield takeLatest(MODIFY_MYFARM_REQUEST, modifyMyfarm);
}

function* watchRemoveMyfarm() {
    yield takeLatest(REMOVE_MYFARM_REQUEST, removeMyfarm);
}

function* watchLoadController() {
    yield takeLatest(LOAD_CONTROLLER_REQUEST, loadController);
}

function* watchModifyController() {
    yield takeLatest(MODIFY_CONTROLLER_REQUEST, modifyController);
}

function* watchLoadView() {
    yield takeLatest(LOAD_FARM_VIEW_REQUEST, loadFarmView);
}

export default function* myFarmSaga() {
    yield all([
        fork(watchAddMyfarm),
        fork(watchLoadAllMyfarm),
        fork(watchLoadMyfarmDashboard),
        fork(watchModifyMyfarm),
        fork(watchRemoveMyfarm),
        fork(watchLoadController),
        fork(watchModifyController),
        fork(watchLoadView),
    ]);
}
