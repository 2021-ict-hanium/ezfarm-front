import {
    addMyfarmFailure,
    addMyfarmRequest,
    addMyfarmSuccess,
    addMyfarmClear,
    modifyMyfarmClear,
    modifyMyfarmFailure,
    modifyMyfarmRequest,
    modifyMyfarmSuccess,
    removeMyfarmFailure,
    removeMyfarmRequest,
    removeMyfarmSuccess,
    loadAllMyfarmFailure,
    loadAllMyfarmRequest,
    loadAllMyfarmSuccess,
    loadControllerFailure,
    loadControllerRequest,
    loadControllerSuccess,
    modifyControllerClear,
    modifyControllerFailure,
    modifyControllerRequest,
    modifyControllerSuccess,
    loadMyfarmDashboardFailure,
    loadMyfarmDashboardRequest,
    loadMyfarmDashboardSuccess,
    removeMyfarmClear,
    changeMyfarm,
    loadFarmViewFailure,
    loadFarmViewRequest,
    loadFarmViewSuccess,
} from '../../actions/myFarm';

export type IMyFarmAction =
    | ReturnType<typeof addMyfarmRequest>
    | ReturnType<typeof addMyfarmSuccess>
    | ReturnType<typeof addMyfarmFailure>
    | ReturnType<typeof addMyfarmClear>
    | ReturnType<typeof loadAllMyfarmRequest>
    | ReturnType<typeof loadAllMyfarmSuccess>
    | ReturnType<typeof loadAllMyfarmFailure>
    | ReturnType<typeof loadMyfarmDashboardRequest>
    | ReturnType<typeof loadMyfarmDashboardSuccess>
    | ReturnType<typeof loadMyfarmDashboardFailure>
    | ReturnType<typeof modifyMyfarmRequest>
    | ReturnType<typeof modifyMyfarmSuccess>
    | ReturnType<typeof modifyMyfarmFailure>
    | ReturnType<typeof modifyMyfarmClear>
    | ReturnType<typeof removeMyfarmRequest>
    | ReturnType<typeof removeMyfarmSuccess>
    | ReturnType<typeof removeMyfarmFailure>
    | ReturnType<typeof removeMyfarmClear>
    | ReturnType<typeof loadControllerRequest>
    | ReturnType<typeof loadControllerSuccess>
    | ReturnType<typeof loadControllerFailure>
    | ReturnType<typeof modifyControllerRequest>
    | ReturnType<typeof modifyControllerSuccess>
    | ReturnType<typeof modifyControllerFailure>
    | ReturnType<typeof modifyControllerClear>
    | ReturnType<typeof loadFarmViewRequest>
    | ReturnType<typeof loadFarmViewSuccess>
    | ReturnType<typeof loadFarmViewFailure>
    | ReturnType<typeof changeMyfarm>;