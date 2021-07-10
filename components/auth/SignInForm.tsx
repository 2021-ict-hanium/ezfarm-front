import React, { FormEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { signUpModalOpen } from '../../actions/modal';
import { logInRequest } from '../../actions/user';
import useInput from '../../hooks/useInput';
import { RootState } from '../../reducers';
import { InputWrapper } from '../../styles/styles';
import Loading from '../Loading';

const SignInForm = () => {
    const dispatch = useDispatch();
    const { logInLoading } = useSelector((state: RootState) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onsubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(logInRequest(email, password));
        },
        [dispatch, email, password],
    );

    const handleSignupBtn = useCallback(() => {
        dispatch(signUpModalOpen());
    }, [dispatch]);

    return (
        <>
            <Form onSubmit={onsubmit}>
                <div className="title">로그인</div>
                <InputWrapper>
                    <label htmlFor="user-email">이메일</label>
                    <input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="user-password">비밀번호</label>
                    <input
                        name="user-password"
                        type="password"
                        onChange={onChangePassword}
                        value={password}
                        minLength={6}
                        required
                    />
                </InputWrapper>
                <div className="options">
                    <label>
                        <input type="checkbox" />
                        로그인상태유지
                    </label>
                    <SignupBtn onClick={handleSignupBtn}>회원가입</SignupBtn>
                </div>
                <LogInBtn>로그인</LogInBtn>
            </Form>
            {logInLoading && <Loading />}
        </>
    );
};

const SignupBtn = styled.div`
    &:hover {
        color: #1c140d;
    }
`;

const LogInBtn = styled.button.attrs({
    type: 'submit',
})`
    border: none;
    height: 60px;
    background-color: #ffffff;
    border-radius: 10px;
    font-weight: 600;
    color: #f16b6f;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #f16b6f;
        color: #ffffff;
    }
`;

const Form = styled.form`
    /* border: 1px solid black; */
    width: 400px;
    height: 336px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    input {
        color: #1c140d;
    }
    .title {
        font-size: 30px;
        font-weight: 800;
        margin-bottom: 20px;
    }
    .options {
        display: flex;
        align-items: center;
        margin: -15px 0 28px auto;
        & > * {
            margin-left: 30px;
            font-weight: 500;
            cursor: pointer;
        }
    }
    margin-top: 120px;
`;

export default SignInForm;
