import { View } from '../interfaces/data/farm';

export const CONTROL_REQUEST = 'CONTROL_REQUEST' as const;
export const CONTROL_SUCCESS = 'CONTROL_SUCCESS' as const;
export const CONTROL_FAILURE = 'CONTROL_FAILURE' as const;
export const CONTROL_CLEAR = 'CONTROL_CLEAR' as const;

export const VIEW_LIST_REQUEST = 'VIEW_LIST_REQUEST' as const;
export const VIEW_LIST_SUCCESS = 'VIEW_LIST_SUCCESS' as const;
export const VIEW_LIST_FAILURE = 'VIEW_LIST_FAILURE' as const;

export const controlRequest = (BOD: boolean, temperature: string, illuminance: boolean, CO2: boolean) => ({
    type: CONTROL_REQUEST,
    data: {
        BOD,
        temperature,
        illuminance,
        CO2,
    },
});

export const controlSuccess = () => ({
    type: CONTROL_SUCCESS,
});

export const controlFailure = (error: string) => ({
    type: CONTROL_FAILURE,
    error,
});

export const controlClear = () => ({
    type: CONTROL_CLEAR,
});

export const viewListRequest = () => ({
    type: VIEW_LIST_REQUEST,
});

export const viewListSuccess = (data: Array<View>) => ({
    type: VIEW_LIST_SUCCESS,
    data,
});

export const viewListFailure = (error: string) => ({
    type: VIEW_LIST_FAILURE,
    error,
});
