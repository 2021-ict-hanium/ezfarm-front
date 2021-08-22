import { FarmController, FarmView, MyFarmDashboard, MyfarmFormData, MyFarmInfo } from '../interfaces/data/myFarm';

export const ADD_MYFARM_REQUEST = 'ADD_MYFARM_REQUEST' as const;
export const ADD_MYFARM_SUCCESS = 'ADD_MYFARM_SUCCESS' as const;
export const ADD_MYFARM_FAILURE = 'ADD_MYFARM_FAILURE' as const;
export const ADD_MYFARM_CLEAR = 'ADD_MYFARM_CLEAR' as const;

export const LOAD_ALL_MYFARM_REQUEST = 'LOAD_ALL_MYFARM_REQUEST' as const;
export const LOAD_ALL_MYFARM_SUCCESS = 'LOAD_ALL_MYFARM_SUCCESS' as const;
export const LOAD_ALL_MYFARM_FAILURE = 'LOAD_ALL_MYFARM_FAILURE' as const;

export const LOAD_MYFARM_DASHBOARD_REQUEST = 'LOAD_MYFARM_DASHBOARD_REQUEST' as const;
export const LOAD_MYFARM_DASHBOARD_SUCCESS = 'LOAD_MYFARM_DASHBOARD_SUCCESS' as const;
export const LOAD_MYFARM_DASHBOARD_FAILURE = 'LOAD_MYFARM_DASHBOARD_FAILURE' as const;

export const MODIFY_MYFARM_REQUEST = 'MODIFY_MYFARM_REQUEST' as const;
export const MODIFY_MYFARM_SUCCESS = 'MODIFY_MYFARM_SUCCESS' as const;
export const MODIFY_MYFARM_FAILURE = 'MODIFY_MYFARM_FAILURE' as const;
export const MODIFY_MYFARM_CLEAR = 'MODIFY_MYFARM_CLEAR' as const;

export const REMOVE_MYFARM_REQUEST = 'REMOVE_MYFARM_REQUEST' as const;
export const REMOVE_MYFARM_SUCCESS = 'REMOVE_MYFARM_SUCCESS' as const;
export const REMOVE_MYFARM_FAILURE = 'REMOVE_MYFARM_FAILURE' as const;
export const REMOVE_MYFARM_CLEAR = 'REMOVE_MYFARM_CLEAR' as const;

export const LOAD_CONTROLLER_REQUEST = 'LOAD_CONTROLLER_REQUEST' as const;
export const LOAD_CONTROLLER_SUCCESS = 'LOAD_CONTROLLER_SUCCESS' as const;
export const LOAD_CONTROLLER_FAILURE = 'LOAD_CONTROLLER_FAILURE' as const;

export const MODIFY_CONTROLLER_REQUEST = 'MODIFY_CONTROLLER_REQUEST' as const;
export const MODIFY_CONTROLLER_SUCCESS = 'MODIFY_CONTROLLER_SUCCESS' as const;
export const MODIFY_CONTROLLER_FAILURE = 'MODIFY_CONTROLLER_FAILURE' as const;
export const MODIFY_CONTROLLER_CLEAR = 'MODIFY_CONTROLLER_CLEAR' as const;

export const LOAD_VIEW_REQUEST = 'LOAD_VIEW_REQUEST' as const;
export const LOAD_VIEW_SUCCESS = 'LOAD_VIEW_SUCCESS' as const;
export const LOAD_VIEW_FAILURE = 'LOAD_VIEW_FAILURE' as const;

export const CHANGE_MYFARM = 'CHANGE_MYFARM' as const;

export const addMyfarmRequest = (data: MyfarmFormData) => ({
    type: ADD_MYFARM_REQUEST,
    data,
});

export const addMyfarmSuccess = () => ({
    type: ADD_MYFARM,
});

export const addMyfarmClear = () => ({
    type: ADD_MYFARM_CLEAR,
});

export const loadAllMyfarmRequest = (token: string) => ({
    type: LOAD_ALL_MYFARM_REQUEST,
    token,
});

export const loadAllMyfarmSuccess = (data: Array<MyFarmInfo>) => ({
    type: LOAD_ALL_MYFARM_SUCCESS,
    data,
});

export const loadAllMyfarmFailure = (error: string) => ({
    type: LOAD_ALL_MYFARM_FAILURE,
    error,
});

export const loadMyfarmDashboardRequest = (farmId: number) => ({
    type: LOAD_MYFARM_DASHBOARD_REQUEST,
    farmId,
});

export const loadMyfarmDashboardSuccess = (data: MyFarmDashboard) => ({
    type: LOAD_MYFARM_DASHBOARD_SUCCESS,
    data,
});

export const loadMyfarmDashboardFailure = (error: string) => ({
    type: LOAD_MYFARM_DASHBOARD_FAILURE,
    error,
});

export const modifyMyfarmRequest = (farmId: number, data: MyfarmFormData) => ({
    type: MODIFY_MYFARM_REQUEST,
    farmId,
    data,
});

export const modifyMyfarmSuccess = () => ({
    type: MODIFY_MYFARM_SUCCESS,
});

export const modifyMyfarmFailure = (error: string) => ({
    type: MODIFY_MYFARM_FAILURE,
    error,
});

export const modifyMyfarmClear = () => ({
    type: MODIFY_MYFARM_CLEAR,
});

export const removeMyfarmRequest = (farmId: number) => ({
    type: REMOVE_MYFARM_REQUEST,
    farmId,
});

export const removeMyfarmSuccess = () => ({
    type: REMOVE_MYFARM_SUCCESS,
});

export const removeMyfarmFailure = (error: string) => ({
    type: REMOVE_MYFARM_FAILURE,
    error,
});

export const removeMyfarmClear = () => ({
    type: REMOVE_MYFARM_CLEAR,
});

export const loadControllerRequest = (farmId: number) => ({
    type: LOAD_CONTROLLER_REQUEST,
    farmId,
});

export const loadControllerSuccess = (data: FarmController) => ({
    type: LOAD_CONTROLLER_SUCCESS,
    data,
});

export const loadControllerFailure = (error: string) => ({
    type: LOAD_CONTROLLER_FAILURE,
    error,
});

export const modifyControllerRequest = (data: FarmController) => ({
    type: MODIFY_CONTROLLER_REQUEST,
    data,
});

export const modifyControllerSuccess = () => ({
    type: MODIFY_CONTROLLER_SUCCESS,
});

export const modifyControllerFailure = (error: string) => ({
    type: MODIFY_CONTROLLER_FAILURE,
    error,
});

export const modifyControllerClear = () => ({
    type: MODIFY_CONTROLLER_CLEAR,
});

export const loadViewRequest = (farmId: number) => ({
    type: LOAD_VIEW_REQUEST,
    farmId,
});

export const loadViewSuccess = (data: FarmView[]) => ({
    type: LOAD_VIEW_SUCCESS,
    data,
});

export const loadViewFailure = (error: string) => ({
    type: LOAD_VIEW_FAILURE,
    error,
});

export const changeMyfarm = (farmId: number) => ({
    type: CHANGE_MYFARM,
    farmId,
});
