/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    CONTROL_MODAL_OPEN,
    CONTROL_MODAL_CLOSE,
    VIEW_MODAL_OPEN,
    VIEW_MODAL_CLOSE,
    SIGN_UP_MODAL_OPEN,
    SIGN_UP_MODAL_CLOSE,
} from '../actions/modal';
import { ModalAction } from '../interfaces/act/modal';
import { ModalState } from '../interfaces/data/modal';

// initial state
export const initialState: ModalState = {
    isControlModalVisible: false,
    isViewModalVisible: false,
    isSignUpModalVisible: false,
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
            default:
                break;
        }
    });

export default reducer;
