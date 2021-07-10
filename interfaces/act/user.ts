import {
    logInRequest,
    logInSuccess,
    logInFailure,
    logOutRequest,
    logOutSuccess,
    logOutFailure,
    signUpRequest,
    signUpSuccess,
    signUpFailure,
    signUpClear,
    profileModifyClear,
    profileModifyFailure,
    profileModifyRequest,
    profileModifySuccess,
} from '../../actions/user';

export type UserAction =
    | ReturnType<typeof logInRequest>
    | ReturnType<typeof logInSuccess>
    | ReturnType<typeof logInFailure>
    | ReturnType<typeof logOutRequest>
    | ReturnType<typeof logOutSuccess>
    | ReturnType<typeof logOutFailure>
    | ReturnType<typeof signUpRequest>
    | ReturnType<typeof signUpSuccess>
    | ReturnType<typeof signUpFailure>
    | ReturnType<typeof signUpClear>
    | ReturnType<typeof profileModifyRequest>
    | ReturnType<typeof profileModifySuccess>
    | ReturnType<typeof profileModifyFailure>
    | ReturnType<typeof profileModifyClear>;
