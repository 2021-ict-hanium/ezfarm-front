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
    showControlModal: false,
    showViewModal: false,
    showSignupModal: false,
};

const reducer = (state = initialState, action: ModalAction) =>
    produce(state, (draft: ModalState) => {
        switch (action.type) {
            case CONTROL_MODAL_OPEN:
                draft.showControlModal = true;
                break;
            case CONTROL_MODAL_CLOSE:
                draft.showControlModal = false;
                break;
            case VIEW_MODAL_OPEN:
                draft.showViewModal = true;
                break;
            case VIEW_MODAL_CLOSE:
                draft.showViewModal = false;
                break;
            case SIGN_UP_MODAL_OPEN:
                draft.showSignupModal = true;
                break;
            case SIGN_UP_MODAL_CLOSE:
                draft.showSignupModal = false;
                break;
            default:
                break;
        }
    });

export default reducer;
