import { IfarmSearchCond, IOtherFarmList } from '../interfaces/data/otherFarm';

export const LOAD_OTHER_FARM_REQUEST = 'LOAD_OTHER_FARM_REQUEST' as const;
export const LOAD_OTHER_FARM_SUCCESS = 'LOAD_OTHER_FARM_SUCCESS' as const;
export const LOAD_OTHER_FARM_FAILURE = 'LOAD_OTHER_FARM_FAILURE' as const;

export const LOAD_FAVORITE_FARM_REQUEST = 'LOAD_FAVORITE_FARM_REQUEST' as const;
export const LOAD_FAVORITE_FARM_SUCCESS = 'LOAD_FAVORITE_FARM_SUCCESS' as const;
export const LOAD_FAVORITE_FARM_FAILURE = 'LOAD_FAVORITE_FARM_FAILURE' as const;

export const ADD_FAVORITE_FARM_REQUEST = 'ADD_FAVORITE_FARM_REQUEST' as const;
export const ADD_FAVORITE_FARM_SUCCESS = 'ADD_FAVORITE_FARM_SUCCESS' as const;
export const ADD_FAVORITE_FARM_FAILURE = 'ADD_FAVORITE_FARM_FAILURE' as const;
export const ADD_FAVORITE_FARM_CLEAR = 'ADD_FAVORITE_FARM_CLEAR' as const;

export const REMOVE_FAVORITE_FARM_REQUEST = 'REMOVE_FAVORITE_FARM_REQUEST' as const;
export const REMOVE_FAVORITE_FARM_SUCCESS = 'REMOVE_FAVORITE_FARM_SUCCESS' as const;
export const REMOVE_FAVORITE_FARM_FAILURE = 'REMOVE_FAVORITE_FARM_FAILURE' as const;
export const REMOVE_FAVORITE_FARM_CLEAR = 'REMOVE_FAVORITE_FARM_CLEAR' as const;

export const loadOtherFarmRequest = (data: IfarmSearchCond) => ({
    type: LOAD_OTHER_FARM_REQUEST,
    data: {
        ...data,
        page: 0,
        size: 1000,
    },
});
export const loadOtherFarmSuccess = (data: IOtherFarmList[]) => ({
    type: LOAD_OTHER_FARM_SUCCESS,
    data,
});
export const loadOtherFarmFailure = (error: string) => ({
    type: LOAD_OTHER_FARM_FAILURE,
    error,
});
export const loadFavoriteFarmRequest = () => ({
    type: LOAD_FAVORITE_FARM_REQUEST,
});
export const loadFavoriteFarmSuccess = (data: IOtherFarmList[]) => ({
    type: LOAD_FAVORITE_FARM_SUCCESS,
    data,
});
export const loadFavoriteFarmFailure = (error: string) => ({
    type: LOAD_FAVORITE_FARM_FAILURE,
    error,
});
export const addFavoriteFarmRequest = (farmId: number) => ({
    type: ADD_FAVORITE_FARM_REQUEST,
    farmId,
});
export const addFavoriteFarmSuccess = () => ({
    type: ADD_FAVORITE_FARM_SUCCESS,
});
export const addFavoriteFarmFailure = (error: string) => ({
    type: ADD_FAVORITE_FARM_FAILURE,
    error,
});
export const addFavoriteFarmClear = () => ({
    type: ADD_FAVORITE_FARM_CLEAR,
});
export const removeFavoriteFarmRequest = (favoritedId: number) => ({
    type: REMOVE_FAVORITE_FARM_REQUEST,
    favoritedId,
});
export const removeFavoriteFarmSuccess = () => ({
    type: REMOVE_FAVORITE_FARM_SUCCESS,
});
export const removeFavoriteFarmFailure = (error: string) => ({
    type: REMOVE_FAVORITE_FARM_FAILURE,
    error,
});
export const removeFavoriteFarmClear = () => ({
    type: REMOVE_FAVORITE_FARM_CLEAR,
});
