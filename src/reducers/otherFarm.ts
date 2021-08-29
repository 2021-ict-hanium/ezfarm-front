/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    ADD_FAVORITE_FARM_CLEAR,
    ADD_FAVORITE_FARM_FAILURE,
    ADD_FAVORITE_FARM_REQUEST,
    ADD_FAVORITE_FARM_SUCCESS,
    LOAD_FAVORITE_FARM_FAILURE,
    LOAD_FAVORITE_FARM_REQUEST,
    LOAD_FAVORITE_FARM_SUCCESS,
    LOAD_OTHER_FARM_FAILURE,
    LOAD_OTHER_FARM_REQUEST,
    LOAD_OTHER_FARM_SUCCESS,
    REMOVE_FAVORITE_FARM_CLEAR,
    REMOVE_FAVORITE_FARM_FAILURE,
    REMOVE_FAVORITE_FARM_REQUEST,
    REMOVE_FAVORITE_FARM_SUCCESS,
} from '../../actions/otherFarm';
import { OtherFarmAction } from '../../interfaces/act/otherFarm';
import { OtherFarmState } from '../../interfaces/data/otherFarm';

export const initialState: OtherFarmState = {
    favoriteFarmList: null,
    otherFarmList: null,
    loadOtherFarmLoading: false,
    loadOtherFarmDone: false,
    loadOtherFarmError: null,
    loadFavoriteFarmLoading: false,
    loadFavoriteFarmDone: false,
    loadFavoriteFarmError: null,
    addFavoriteFarmLoading: false,
    addFavoriteFarmDone: false,
    addFavoriteFarmError: null,
    removeFavoriteFarmLoading: false,
    removeFavoriteFarmDone: false,
    removeFavoriteFarmError: null,
};

const reducer = (state = initialState, action: OtherFarmAction) =>
    produce(state, (draft: OtherFarmState) => {
        switch (action.type) {
            case LOAD_OTHER_FARM_REQUEST:
                draft.loadOtherFarmLoading = true;
                draft.loadOtherFarmDone = false;
                draft.loadOtherFarmError = null;
                break;
            case LOAD_OTHER_FARM_SUCCESS:
                draft.loadOtherFarmLoading = false;
                draft.loadOtherFarmDone = true;
                draft.otherFarmList = action.data;
                break;
            case LOAD_OTHER_FARM_FAILURE:
                draft.loadOtherFarmLoading = false;
                draft.loadOtherFarmError = action.error;
                break;
            case LOAD_FAVORITE_FARM_REQUEST:
                draft.loadFavoriteFarmLoading = true;
                draft.loadFavoriteFarmDone = false;
                draft.loadFavoriteFarmError = null;
                break;
            case LOAD_FAVORITE_FARM_SUCCESS:
                draft.loadFavoriteFarmLoading = false;
                draft.loadFavoriteFarmDone = true;
                draft.favoriteFarmList = action.data;
                break;
            case LOAD_FAVORITE_FARM_FAILURE:
                draft.loadFavoriteFarmLoading = false;
                draft.loadFavoriteFarmError = action.error;
                break;
            case ADD_FAVORITE_FARM_REQUEST:
                draft.addFavoriteFarmLoading = true;
                draft.addFavoriteFarmDone = false;
                draft.addFavoriteFarmError = null;
                break;
            case ADD_FAVORITE_FARM_SUCCESS:
                draft.addFavoriteFarmLoading = false;
                draft.addFavoriteFarmDone = true;
                break;
            case ADD_FAVORITE_FARM_FAILURE:
                draft.addFavoriteFarmLoading = false;
                draft.addFavoriteFarmError = action.error;
                break;
            case ADD_FAVORITE_FARM_CLEAR:
                draft.addFavoriteFarmLoading = false;
                draft.addFavoriteFarmDone = false;
                draft.addFavoriteFarmError = null;
                break;
            case REMOVE_FAVORITE_FARM_REQUEST:
                draft.removeFavoriteFarmLoading = true;
                draft.removeFavoriteFarmDone = false;
                draft.removeFavoriteFarmError = null;
                break;
            case REMOVE_FAVORITE_FARM_SUCCESS:
                draft.removeFavoriteFarmLoading = false;
                draft.removeFavoriteFarmDone = true;
                break;
            case REMOVE_FAVORITE_FARM_FAILURE:
                draft.removeFavoriteFarmLoading = false;
                draft.removeFavoriteFarmError = action.error;
                break;
            case REMOVE_FAVORITE_FARM_CLEAR:
                draft.removeFavoriteFarmLoading = false;
                draft.removeFavoriteFarmDone = false;
                draft.removeFavoriteFarmError = null;
                break;
            default:
                break;
        }
    });

export default reducer;
