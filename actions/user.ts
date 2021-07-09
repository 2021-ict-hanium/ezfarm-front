import { Me } from '../interfaces/data/user';

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

// 액션 크리에이터
export const logInRequest = (email: string, password: string) => ({
    type: LOG_IN_REQUEST,
    data: {
        email,
        password,
    },
});

export const logInSuccess = (me: Me) => ({
    type: LOG_IN_SUCCESS,
    me,
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

export const signUpRequest = (name: string, email: string, password: string) => ({
    type: SIGN_UP_REQUEST,
    data: {
        name,
        email,
        password,
    },
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
