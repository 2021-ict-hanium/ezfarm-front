import React from 'react';
import { ISetState, IOnSubmit } from '../../../interfaces/data/common';
import Loading from '../../common/Loading';
import ErrorMessage from '../../common/ErrorMessage';
import { Form, InputWrapper } from './style';

type Props = {
    email: string;
    onChangeEmail: ISetState;
    password: string;
    onChangePassword: ISetState;
    handleSignupBtn: () => void;
    onSubmit: IOnSubmit;
    logInLoading: boolean;
    logInError: boolean;
};

const SigninFormPresenter = ({
    email,
    onChangeEmail,
    password,
    onChangePassword,
    handleSignupBtn,
    onSubmit,
    logInLoading,
    logInError,
}: Props) => (
    <Form onSubmit={onSubmit}>
        <div className="title">로그인</div>
        <InputWrapper>
            <label htmlFor="user-email">이메일</label>
            <input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="user-password">비밀번호</label>
            <input name="user-password" type="password" onChange={onChangePassword} value={password} required />
        </InputWrapper>
        <button type="submit" className="loginBtn">
            로그인
        </button>
        <button type="button" className="signupBtn" onClick={handleSignupBtn}>
            회원가입
        </button>
        {logInError && <ErrorMessage message="아이디 또는 비밀번호를 확인해주세요." />}
        {logInLoading && <Loading />}
    </Form>
);
export default SigninFormPresenter;
