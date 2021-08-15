import {
    loadOtherFarmRequest,
    loadOtherFarmSuccess,
    loadOtherFarmFailure,
    loadFavoriteFarmRequest,
    loadFavoriteFarmSuccess,
    loadFavoriteFarmFailure,
    addFavoriteFarmRequest,
    addFavoriteFarmSuccess,
    addFavoriteFarmFailure,
    addFavoriteFarmClear,
    removeFavoriteFarmRequest,
    removeFavoriteFarmSuccess,
    removeFavoriteFarmFailure,
    removeFavoriteFarmClear,
} from '../../actions/otherFarm';

export type OtherFarmAction =
    | ReturnType<typeof loadOtherFarmRequest>
    | ReturnType<typeof loadOtherFarmSuccess>
    | ReturnType<typeof loadOtherFarmFailure>
    | ReturnType<typeof loadFavoriteFarmRequest>
    | ReturnType<typeof loadFavoriteFarmSuccess>
    | ReturnType<typeof loadFavoriteFarmFailure>
    | ReturnType<typeof addFavoriteFarmRequest>
    | ReturnType<typeof addFavoriteFarmSuccess>
    | ReturnType<typeof addFavoriteFarmFailure>
    | ReturnType<typeof addFavoriteFarmClear>
    | ReturnType<typeof removeFavoriteFarmRequest>
    | ReturnType<typeof removeFavoriteFarmSuccess>
    | ReturnType<typeof removeFavoriteFarmFailure>
    | ReturnType<typeof removeFavoriteFarmClear>;
