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
    PROFILE_MODIFY_CLEAR,
    PROFILE_MODIFY_FAILURE,
    PROFILE_MODIFY_REQUEST,
    PROFILE_MODIFY_SUCCESS,
} from '../actions/user';
import { UserAction } from '../interfaces/act/user';
import { UserState } from '../interfaces/data/user';
import { SampleUser } from '../utils/data';

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
    profileModifyLoading: false,
    profileModifyDone: false,
    profileModifyError: null,
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
                draft.me = action.me;
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
            case PROFILE_MODIFY_REQUEST:
                draft.profileModifyLoading = true;
                draft.profileModifyDone = false;
                draft.profileModifyError = null;
                break;
            case PROFILE_MODIFY_SUCCESS:
                draft.profileModifyLoading = false;
                draft.profileModifyDone = true;
                break;
            case PROFILE_MODIFY_FAILURE:
                draft.profileModifyLoading = false;
                draft.profileModifyError = action.error;
                break;
            case PROFILE_MODIFY_CLEAR:
                draft.profileModifyLoading = false;
                draft.profileModifyDone = false;
                draft.profileModifyError = null;
                break;
            default:
                break;
        }
    });

export default reducer;
