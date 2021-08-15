export interface IVaildDate {
    startDate: string;
    endDate: string;
}

export interface IFarmList extends IOtherFarmList {
    key: string;
}

export interface IOtherFarmList {
    address: string;
    area: string;
    cropType: string;
    farmId: number;
    farmType: string;
    name: string;
}

export interface IFavoriteFarmList {
    favoriteId: number;
    farmSearchResponse: IOtherFarmList;
}

export interface IfarmSearchCond {
    cropType?: string;
    farmGroup?: string;
    farmType?: string;
}

export interface IFarmSearch extends IfarmSearchCond {
    page: number;
    size: number;
}
export interface OtherFarmState {
    favoriteFarmList: null | IOtherFarmList[];
    otherFarmList: null | IOtherFarmList[];
    loadOtherFarmLoading: boolean;
    loadOtherFarmDone: boolean;
    loadOtherFarmError: null | string;
    loadFavoriteFarmLoading: boolean;
    loadFavoriteFarmDone: boolean;
    loadFavoriteFarmError: null | string;
    addFavoriteFarmLoading: boolean;
    addFavoriteFarmDone: boolean;
    addFavoriteFarmError: null | string;
    removeFavoriteFarmLoading: boolean;
    removeFavoriteFarmDone: boolean;
    removeFavoriteFarmError: null | string;
}
