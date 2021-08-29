import React from '../../../../src/node_modules/@types/react';
import { IOnSubmit, ISetState } from '../../../../interfaces/data/common';
import { CompleteBtn } from '../../../common/Btn';
import Loading from '../../../common/Loading';
import ErrorMessage from '../../../common/ErrorMessage';
import { Form, InputError, InputWrapper } from './style';

type Props = {
    name: string;
    onChangeName: ISetState;
    nameError: boolean;
    email: string;
    onChangeEmail: ISetState;
    emailError: boolean;
    password: string;
    onChangePassword: ISetState;
    passwordError: boolean;
    passwordCheck: string;
    onChangePasswordCheck: ISetState;
    passwordCheckError: boolean;
    signUpError: boolean;
    signUpLoading: boolean;
    onSubmit: IOnSubmit;
};

const SignupFormPresenter = ({
    name,
    onChangeName,
    nameError,
    email,
    onChangeEmail,
    emailError,
    password,
    onChangePassword,
    passwordError,
    passwordCheck,
    onChangePasswordCheck,
    passwordCheckError,
    signUpError,
    signUpLoading,
    onSubmit,
}: Props) => (
    <Form onSubmit={onSubmit}>
        <InputWrapper>
            <label htmlFor="name">
                <span style={{ color: 'red' }}>* </span>이름
            </label>
            <input name="name" value={name} onChange={onChangeName} />
            <InputError>{nameError && <ErrorMessage message="이름을 입력해주세요." />}</InputError>
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="email">
                <span style={{ color: 'red' }}>* </span>이메일
            </label>
            <input name="email" type="email" value={email} onChange={onChangeEmail} />
            <InputError>{emailError && <ErrorMessage message="이메일을 입력해주세요." />}</InputError>
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="password">
                <span style={{ color: 'red' }}>* </span>비밀번호
            </label>
            <input name="password" type="password" value={password} onChange={onChangePassword} minLength={6} />
            <InputError>{passwordError && <ErrorMessage message="비밀번호를 입력해주세요." />}</InputError>
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="passwordCheck">
                <span style={{ color: 'red' }}>* </span>비밀번호확인
            </label>
            <input
                name="passwordCheck"
                type="password"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                minLength={6}
            />
            <InputError>{passwordCheckError && <ErrorMessage message="비밀번호가 일치하지 않습니다." />}</InputError>
        </InputWrapper>
        <CompleteBtn>완료</CompleteBtn>
        {signUpError && <ErrorMessage message="이미 존재하는 이메일입니다." />}
        {signUpLoading && <Loading />}
    </Form>
);
export default SignupFormPresenter;
