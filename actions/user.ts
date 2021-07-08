import { Me } from '../interfaces/data/user';

// 액션 상수
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST' as const;
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS' as const;
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE' as const;

// 액션 크리에이터
export const loginRequest = (email: string, password: string) => ({
    type: LOG_IN_REQUEST,
    data: {
        email,
        password,
    },
});

export const loginSuccess = (me: Me) => ({
    type: LOG_IN_SUCCESS,
    me,
});

export const loginFailure = (error: string) => ({
    type: LOG_IN_FAILURE,
    error,
});

export const logoutRequest = () => ({
    type: LOG_OUT_REQUEST,
});

export const logoutSuccess = () => ({
    type: LOG_OUT_SUCCESS,
});

export const logoutFailure = (error: string) => ({
    type: LOG_OUT_FAILURE,
    error,
});
