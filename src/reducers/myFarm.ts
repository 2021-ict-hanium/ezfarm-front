/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    ADD_MYFARM_CLEAR,
    ADD_MYFARM_FAILURE,
    ADD_MYFARM_REQUEST,
    ADD_MYFARM_SUCCESS,
    CHANGE_MYFARM,
    LOAD_ALL_MYFARM_FAILURE,
    LOAD_ALL_MYFARM_REQUEST,
    LOAD_ALL_MYFARM_SUCCESS,
    LOAD_CONTROLLER_FAILURE,
    LOAD_CONTROLLER_REQUEST,
    LOAD_CONTROLLER_SUCCESS,
    LOAD_FARM_VIEW_FAILURE,
    LOAD_FARM_VIEW_REQUEST,
    LOAD_FARM_VIEW_SUCCESS,
    LOAD_MYFARM_DASHBOARD_FAILURE,
    LOAD_MYFARM_DASHBOARD_REQUEST,
    LOAD_MYFARM_DASHBOARD_SUCCESS,
    MODIFY_CONTROLLER_CLEAR,
    MODIFY_CONTROLLER_FAILURE,
    MODIFY_CONTROLLER_REQUEST,
    MODIFY_CONTROLLER_SUCCESS,
    MODIFY_MYFARM_CLEAR,
    MODIFY_MYFARM_FAILURE,
    MODIFY_MYFARM_REQUEST,
    MODIFY_MYFARM_SUCCESS,
    REMOVE_MYFARM_CLEAR,
    REMOVE_MYFARM_FAILURE,
    REMOVE_MYFARM_REQUEST,
    REMOVE_MYFARM_SUCCESS,
} from '../../actions/myFarm';
import { IMyFarmAction } from '../../interfaces/act/myFarm';
import { IMyFarmState, IMyFarmInfo } from '../../interfaces/data/myFarm';

export const initialState: IMyFarmState = {
    myFarm: null,
    myFarmDashboard: null,
    myFarmList: null,
    farmController: null,
    farmView: null,
    addMyfarmLoading: false, // 농가 생성
    addMyfarmDone: false,
    addMyfarmError: null,
    loadAllMyfarmLoading: false, // 전체 농가 조회
    loadAllMyfarmDone: false,
    loadAllMyfarmError: null,
    loadMyfarmDashboardLoading: false, // 전체 농가 조회
    loadMyfarmDashboardDone: false,
    loadMyfarmDashboardError: null,
    modifyMyfarmLoading: false, // 농가 수정
    modifyMyfarmDone: false,
    modifyMyfarmError: null,
    removeMyfarmLoading: false, // 농가 삭제
    removeMyfarmDone: false,
    removeMyfarmError: null,
    loadControllerLoading: false,
    loadControllerDone: false,
    loadControllerError: null,
    modifyControllerLoading: false,
    modifyControllerDone: false,
    modifyControllerError: null,
    loadFarmViewLoading: false,
    loadFarmViewDone: false,
    loadFarmViewError: null,
};

const reducer = (state = initialState, action: IMyFarmAction) =>
    produce(state, (draft: IMyFarmState) => {
        switch (action.type) {
            case ADD_MYFARM_REQUEST:
                draft.addMyfarmLoading = true;
                draft.addMyfarmDone = false;
                draft.addMyfarmError = null;
                break;
            case ADD_MYFARM_SUCCESS:
                draft.addMyfarmLoading = false;
                draft.addMyfarmDone = true;
                break;
            case ADD_MYFARM_FAILURE:
                draft.addMyfarmLoading = false;
                draft.addMyfarmError = action.error;
                break;
            case ADD_MYFARM_CLEAR:
                draft.addMyfarmLoading = false;
                draft.addMyfarmDone = false;
                draft.addMyfarmError = null;
                break;
            case LOAD_ALL_MYFARM_REQUEST:
                draft.loadAllMyfarmLoading = true;
                draft.loadAllMyfarmDone = false;
                draft.loadAllMyfarmError = null;
                break;
            case LOAD_ALL_MYFARM_SUCCESS:
                draft.loadAllMyfarmLoading = false;
                draft.loadAllMyfarmDone = true;
                draft.myFarmList = action.data;
                draft.myFarm = action.data.filter((ele: IMyFarmInfo) => ele.main)[0] || null;
                break;
            case LOAD_ALL_MYFARM_FAILURE:
                draft.loadAllMyfarmLoading = false;
                draft.loadAllMyfarmError = action.error;
                break;
            case LOAD_MYFARM_DASHBOARD_REQUEST:
                draft.loadMyfarmDashboardLoading = true;
                draft.loadMyfarmDashboardDone = false;
                draft.loadMyfarmDashboardError = null;
                break;
            case LOAD_MYFARM_DASHBOARD_SUCCESS:
                draft.loadMyfarmDashboardLoading = false;
                draft.loadMyfarmDashboardDone = true;
                draft.myFarmDashboard = action.data;
                break;
            case LOAD_MYFARM_DASHBOARD_FAILURE:
                draft.loadMyfarmDashboardLoading = false;
                draft.loadMyfarmDashboardError = action.error;
                break;
            case MODIFY_MYFARM_REQUEST:
                draft.modifyMyfarmLoading = true;
                draft.modifyMyfarmDone = false;
                draft.modifyMyfarmError = null;
                break;
            case MODIFY_MYFARM_SUCCESS:
                draft.modifyMyfarmLoading = false;
                draft.modifyMyfarmDone = true;
                break;
            case MODIFY_MYFARM_FAILURE:
                draft.modifyMyfarmLoading = false;
                draft.modifyMyfarmError = action.error;
                break;
            case MODIFY_MYFARM_CLEAR:
                draft.modifyMyfarmLoading = false;
                draft.modifyMyfarmDone = false;
                draft.modifyMyfarmError = null;
                break;
            case REMOVE_MYFARM_REQUEST:
                draft.removeMyfarmLoading = true;
                draft.removeMyfarmDone = false;
                draft.removeMyfarmError = null;
                break;
            case REMOVE_MYFARM_SUCCESS:
                draft.removeMyfarmLoading = false;
                draft.removeMyfarmDone = true;
                break;
            case REMOVE_MYFARM_FAILURE:
                draft.removeMyfarmLoading = false;
                draft.removeMyfarmError = action.error;
                break;
            case REMOVE_MYFARM_CLEAR:
                draft.removeMyfarmLoading = false;
                draft.removeMyfarmDone = false;
                draft.removeMyfarmError = null;
                break;
            case LOAD_CONTROLLER_REQUEST:
                draft.loadControllerLoading = true;
                draft.loadControllerDone = false;
                draft.loadControllerError = null;
                break;
            case LOAD_CONTROLLER_SUCCESS:
                draft.loadControllerLoading = false;
                draft.loadControllerDone = true;
                draft.farmController = action.data;
                break;
            case LOAD_CONTROLLER_FAILURE:
                draft.loadControllerLoading = false;
                draft.loadControllerError = action.error;
                break;
            case MODIFY_CONTROLLER_REQUEST:
                draft.modifyControllerLoading = true;
                draft.modifyControllerDone = false;
                draft.modifyControllerError = null;
                break;
            case MODIFY_CONTROLLER_SUCCESS:
                draft.modifyControllerLoading = false;
                draft.modifyControllerDone = true;
                break;
            case MODIFY_CONTROLLER_FAILURE:
                draft.modifyControllerLoading = false;
                draft.modifyControllerError = action.error;
                break;
            case MODIFY_CONTROLLER_CLEAR:
                draft.modifyControllerLoading = false;
                draft.modifyControllerDone = false;
                draft.modifyControllerError = null;
                break;
            case LOAD_FARM_VIEW_REQUEST:
                draft.loadFarmViewLoading = true;
                draft.loadFarmViewDone = false;
                draft.loadFarmViewError = null;
                break;
            case LOAD_FARM_VIEW_SUCCESS:
                draft.loadFarmViewLoading = false;
                draft.loadFarmViewDone = true;
                draft.farmView = action.data;
                break;
            case LOAD_FARM_VIEW_FAILURE:
                draft.loadFarmViewLoading = false;
                draft.loadFarmViewError = action.error;
                break;
            case CHANGE_MYFARM:
                draft.myFarm = (draft.myFarmList as IMyFarmInfo[]).find((ele) => ele.id === action.farmId) || null;
                break;
            default:
                break;
        }
    });

export default reducer;
