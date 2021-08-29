import { LoginFormData, Me, ProfileModifyFormData, SignUpFormData } from '../interfaces/data/user';

// 액션 상수
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST' as const;
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS' as const;
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE' as const;

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE' as const;
export const SIGN_UP_CLEAR = 'SIGN_UP_CLEAR' as const;

export const LOAD_PROFILE_REQUEST = 'LOAD_PROFILE_REQUEST' as const;
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS' as const;
export const LOAD_PROFILE_FAILURE = 'LOAD_PROFILE_FAILURE' as const;

export const MODIFY_PROFILE_REQUEST = 'MODIFY_PROFILE_REQUEST' as const;
export const MODIFY_PROFILE_SUCCESS = 'MODIFY_PROFILE_SUCCESS' as const;
export const MODIFY_PROFILE_FAILURE = 'MODIFY_PROFILE_FAILURE' as const;
export const MODIFY_PROFILE_CLEAR = 'MODIFY_PROFILE_CLEAR' as const;

// 액션 크리에이터
export const logInRequest = (data: LoginFormData) => ({
    type: LOG_IN_REQUEST,
    data,
});

export const logInSuccess = () => ({
    type: LOG_IN_SUCCESS,
});

export const logInFailure = (error: string) => ({
    type: LOG_IN_FAILURE,
    error,
});

export const logOutRequest = () => ({
    type: LOG_OUT_REQUEST,
});

export const logOutSuccess = () => ({
    type: LOG_OUT_SUCCESS,
});

export const logOutFailure = (error: string) => ({
    type: LOG_OUT_FAILURE,
    error,
});

export const signUpRequest = (data: SignUpFormData) => ({
    type: SIGN_UP_REQUEST,
    data,
});

export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS,
});

export const signUpFailure = (error: string) => ({
    type: SIGN_UP_FAILURE,
    error,
});

export const signUpClear = () => ({
    type: SIGN_UP_CLEAR,
});

export const loadProfileRequest = (token: string) => ({
    type: LOAD_PROFILE_REQUEST,
    token,
});

export const loadProfileSuccess = (data: Me) => ({
    type: LOAD_PROFILE_SUCCESS,
    data,
});

export const loadProfileFailure = (error: string) => ({
    type: LOAD_PROFILE_FAILURE,
    error,
});

export const modifyProfileRequest = (data: FormData) => ({
    type: MODIFY_PROFILE_REQUEST,
    data,
});

export const modifyProfileSuccess = (data: ProfileModifyFormData) => ({
    type: MODIFY_PROFILE_SUCCESS,
    data,
});

export const modifyProfileFailure = (error: string) => ({
    type: MODIFY_PROFILE_FAILURE,
    error,
});

export const modifyProfileClear = () => ({
    type: MODIFY_PROFILE_CLEAR,
});
