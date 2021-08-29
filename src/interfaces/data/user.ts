export interface LoginFormData {
    email: string;
    password: string;
}

export interface SignUpFormData extends LoginFormData {
    name: string;
}

export interface ProfileModifyFormData {
    imageUrl: string;
    phoneNumber: string;
    address: string;
    isDefaultImage: boolean;
}

export interface Me {
    id: number;
    email: string;
    name: string;
    imageUrl: string;
    phoneNumber: string;
    address: string;
}

export interface UserState {
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
    loadProfileLoading: boolean;
    loadProfileDone: boolean;
    loadProfileError: null | string;
    modifyProfileLoading: boolean;
    modifyProfileDone: boolean;
    modifyProfileError: null | string;
}
