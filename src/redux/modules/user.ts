/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_CLEAR,
    LOAD_PROFILE_FAILURE,
    LOAD_PROFILE_REQUEST,
    LOAD_PROFILE_SUCCESS,
    MODIFY_PROFILE_CLEAR,
    MODIFY_PROFILE_FAILURE,
    MODIFY_PROFILE_REQUEST,
    MODIFY_PROFILE_SUCCESS,
} from '../../actions/user';
import { UserAction } from '../../interfaces/act/user';
import { Me, UserState } from '../../interfaces/data/user';

// initial state
export const initialState: UserState = {
    me: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    loadProfileLoading: false,
    loadProfileDone: false,
    loadProfileError: null,
    modifyProfileLoading: false,
    modifyProfileDone: false,
    modifyProfileError: null,
};

const reducer = (state = initialState, action: UserAction) =>
    produce(state, (draft: UserState) => {
        switch (action.type) {
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.logInDone = true;
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.me = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
                break;
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;
            case SIGN_UP_CLEAR:
                draft.signUpLoading = false;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case LOAD_PROFILE_REQUEST:
                draft.loadProfileLoading = true;
                draft.loadProfileDone = false;
                draft.loadProfileError = null;
                break;
            case LOAD_PROFILE_SUCCESS:
                draft.loadProfileLoading = false;
                draft.loadProfileDone = true;
                draft.me = action.data;
                break;
            case LOAD_PROFILE_FAILURE:
                draft.loadProfileLoading = false;
                draft.loadProfileError = action.error;
                break;
            case MODIFY_PROFILE_REQUEST:
                draft.modifyProfileLoading = true;
                draft.modifyProfileDone = false;
                draft.modifyProfileError = null;
                break;
            case MODIFY_PROFILE_SUCCESS:
                draft.modifyProfileLoading = false;
                draft.modifyProfileDone = true;
                draft.me = { ...(draft.me as Me), ...action.data };
                break;
            case MODIFY_PROFILE_FAILURE:
                draft.modifyProfileLoading = false;
                draft.modifyProfileError = action.error;
                break;
            case MODIFY_PROFILE_CLEAR:
                draft.modifyProfileLoading = false;
                draft.modifyProfileDone = false;
                draft.modifyProfileError = null;
                break;
            default:
                break;
        }
    });

export default reducer;
