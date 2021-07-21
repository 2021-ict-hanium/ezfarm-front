export interface MyfarmFormData {
    name: string;
    address: string;
    phoneNumber: string;
    farmType: string;
    cropType: string;
    area: string;
    startDate: string;
    main: boolean;
}

export interface MyFarmInfo extends MyfarmFormData {
    id: number;
    createdDate: string;
}

export interface MyFarmDashboard {
    Temperature: number;
    Illuminance: number;
    Humidity: number;
    CO2: number;
    pH: number;
    EC: number;
}

export interface IMyFarmList {
    key: string;
    type: string;
    name: string;
    cropType: string;
    startDate: string;
    main: boolean;
}

export interface FarmController {
    remoteId: number;
    co2: string;
    illuminance: string;
    temperature: number;
    water: string;
}

export interface FarmView {
    id: number;
    url: string;
    time: number;
}

export interface FarmState {
    myFarmList: Array<MyFarmInfo> | null;
    myFarmId: number | null;
    myFarmDashboard: MyFarmDashboard | null;
    farmController: FarmController | null;
    viewList: Array<FarmView> | null;
    addMyfarmLoading: boolean; // 농가 생성
    addMyfarmDone: boolean;
    addMyfarmError: null | string;
    loadAllMyfarmLoading: boolean; // 모든 농가 조회
    loadAllMyfarmDone: boolean;
    loadAllMyfarmError: null | string;
    loadMyfarmDashboardLoading: boolean; // 농가 대시보드 조회
    loadMyfarmDashboardDone: boolean;
    loadMyfarmDashboardError: null | string;
    modifyMyfarmLoading: boolean; // 농가 수정
    modifyMyfarmDone: boolean;
    modifyMyfarmError: null | string;
    removeMyfarmLoading: boolean; // 농가 삭제
    removeMyfarmDone: boolean;
    removeMyfarmError: null | string;
    loadControllerLoading: boolean; // 컨트롤러 조회
    loadControllerDone: boolean;
    loadControllerError: null | string;
    modifyControllerLoading: boolean; // 컨트롤러 수정
    modifyControllerDone: boolean;
    modifyControllerError: null | string;
    loadViewLoading: boolean; // 농가 화면
    loadViewDone: boolean;
    loadViewError: null | string;
}
