/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    CONTROL_MODAL_OPEN,
    CONTROL_MODAL_CLOSE,
    VIEW_MODAL_OPEN,
    VIEW_MODAL_CLOSE,
    SIGN_UP_MODAL_OPEN,
    SIGN_UP_MODAL_CLOSE,
    PROFILE_MODIFY_MODAL_CLOSE,
    PROFILE_MODIFY_MODAL_OPEN,
    FARM_LIST_OPEN,
    FARM_LIST_CLOSE,
    FARM_ENROLL_MODAL_OPEN,
    FARM_ENROLL_MODAL_CLOSE,
} from '../actions/modal';
import { ModalAction } from '../interfaces/act/modal';
import { ModalState } from '../interfaces/data/modal';

// initial state
export const initialState: ModalState = {
    isControlModalVisible: false,
    isViewModalVisible: false,
    isSignUpModalVisible: false,
    isProfileModifyModalVisible: false,
    isFarmListVisible: false,
    isFarmEnrollModalVisible: false,
};

const reducer = (state = initialState, action: ModalAction) =>
    produce(state, (draft: ModalState) => {
        switch (action.type) {
            case CONTROL_MODAL_OPEN:
                draft.isControlModalVisible = true;
                break;
            case CONTROL_MODAL_CLOSE:
                draft.isControlModalVisible = false;
                break;
            case VIEW_MODAL_OPEN:
                draft.isViewModalVisible = true;
                break;
            case VIEW_MODAL_CLOSE:
                draft.isViewModalVisible = false;
                break;
            case SIGN_UP_MODAL_OPEN:
                draft.isSignUpModalVisible = true;
                break;
            case SIGN_UP_MODAL_CLOSE:
                draft.isSignUpModalVisible = false;
                break;
            case PROFILE_MODIFY_MODAL_OPEN:
                draft.isProfileModifyModalVisible = true;
                break;
            case PROFILE_MODIFY_MODAL_CLOSE:
                draft.isProfileModifyModalVisible = false;
                break;
            case FARM_LIST_OPEN:
                draft.isFarmListVisible = true;
                break;
            case FARM_LIST_CLOSE:
                draft.isFarmListVisible = false;
                break;
            case FARM_ENROLL_MODAL_OPEN:
                draft.isFarmEnrollModalVisible = true;
                break;
            case FARM_ENROLL_MODAL_CLOSE:
                draft.isFarmEnrollModalVisible = false;
                break;
            default:
                break;
        }
    });

export default reducer;
