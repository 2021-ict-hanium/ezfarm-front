/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    CONTROL_CLEAR,
    CONTROL_FAILURE,
    CONTROL_REQUEST,
    CONTROL_SUCCESS,
    VIEW_LIST_FAILURE,
    VIEW_LIST_REQUEST,
    VIEW_LIST_SUCCESS,
} from '../actions/farm';
import { FarmAction } from '../interfaces/act/farm';
import { FarmState } from '../interfaces/data/farm';

export const initialState: FarmState = {
    controlLoading: false,
    controlDone: false,
    controlError: null,
    viewListLoading: false,
    viewListDone: false,
    viewListError: null,
    viewList: null,
};

const reducer = (state = initialState, action: FarmAction) =>
    produce(state, (draft: FarmState) => {
        switch (action.type) {
            case CONTROL_REQUEST:
                draft.controlLoading = true;
                draft.controlDone = false;
                draft.controlError = null;
                break;
            case CONTROL_SUCCESS:
                draft.controlLoading = false;
                draft.controlDone = true;
                break;
            case CONTROL_FAILURE:
                draft.controlLoading = false;
                draft.controlError = action.error;
                break;
            case CONTROL_CLEAR:
                draft.controlLoading = false;
                draft.controlDone = false;
                draft.controlError = null;
                break;
            case VIEW_LIST_REQUEST:
                draft.viewListLoading = true;
                draft.viewListDone = false;
                draft.viewListError = null;
                break;
            case VIEW_LIST_SUCCESS:
                draft.viewListLoading = false;
                draft.viewListDone = true;
                draft.viewList = action.data;
                break;
            case VIEW_LIST_FAILURE:
                draft.viewListLoading = false;
                draft.viewListError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;
