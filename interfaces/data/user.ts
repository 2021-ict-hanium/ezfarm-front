export type LoginFormData = {
    email: string;
    password: string;
};

export interface Me {
    id: number;
    email: string;
    name: string;
    mobile: string;
    image?: string;
    address?: string;
}

export type UserState = {
    me: null | Me;
    logInLoading: boolean; // 로그인
    logInDone: boolean;
    logInError: null | string;
    logOutLoading: boolean; // 로그아웃
    logOutDone: boolean;
    logOutError: null | string;
};
