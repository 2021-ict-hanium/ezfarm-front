import {
    controlRequest,
    controlSuccess,
    controlFailure,
    controlClear,
    viewListFailure,
    viewListRequest,
    viewListSuccess,
} from '../../actions/farm';

export type FarmAction =
    | ReturnType<typeof controlRequest>
    | ReturnType<typeof controlSuccess>
    | ReturnType<typeof controlFailure>
    | ReturnType<typeof controlClear>
    | ReturnType<typeof viewListRequest>
    | ReturnType<typeof viewListSuccess>
    | ReturnType<typeof viewListFailure>;
