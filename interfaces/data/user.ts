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
    logInLoading: boolean;
    logInDone: boolean;
    logInError: null | string;
    logOutLoading: boolean;
    logOutDone: boolean;
    logOutError: null | string;
    signUpLoading: boolean;
    signUpDone: boolean;
    signUpError: null | string;
};
