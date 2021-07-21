import React, { FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { signUpModalOpen } from '../../actions/modal';
import { logInRequest } from '../../actions/user';
import useInput from '../../hooks/useInput';
import useSwitch from '../../hooks/useSwitch';
import { RootState } from '../../reducers';
import { Inputwrapper } from '../../styles/styles';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';

const SignInForm = () => {
    const dispatch = useDispatch();
    const { logInLoading, logInError } = useSelector((state: RootState) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(logInRequest({ email, password }));
        },
        [dispatch, email, password],
    );

    const handleSignupBtn = useCallback(() => {
        dispatch(signUpModalOpen());
    }, [dispatch]);

    return (
        <>
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
            </Form>

            {logInLoading && <Loading />}
        </>
    );
};

const InputWrapper = styled(Inputwrapper)`
    justify-content: space-between;
`;

const Form = styled.form`
    /* border: 1px solid black; */
    width: 400px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    margin-top: 120px;
    input {
        color: #1c140d;
    }
    button {
        height: 60px;
        border-radius: 10px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .title {
        font-size: 30px;
        font-weight: 800;
        margin-bottom: 20px;
    }
    .loginBtn {
        background-color: #ffffff;
        color: #f16b6f;
    }
    .signupBtn {
        color: #ffffff;
        background-color: #f16b6f;
    }
`;

export default SignInForm;
