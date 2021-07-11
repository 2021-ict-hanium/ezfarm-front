import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { signUpRequest } from '../../actions/user';
import { RootState } from '../../reducers';
import { CompleteBtn, Inputwrapper } from '../../styles/styles';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';

const SignUpForm = () => {
    const dispatch = useDispatch();

    const { signUpLoading, signUpError } = useSelector((state: RootState) => state.user);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordCheckError, setPasswordCheckError] = useState(false);

    const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setNameError(false);
    }, []);

    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError(false);
    }, []);

    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordError(false);
    }, []);

    const onChangePasswordCheck = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setPasswordCheck(e.target.value);
            setPasswordCheckError(e.target.value !== password);
        },
        [password],
    );

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!name || !email || !password || !passwordCheck) {
                if (!name) {
                    setNameError(true);
                }
                if (!email) {
                    setEmailError(true);
                }
                if (!password) {
                    setPasswordError(true);
                }
                if (!passwordCheck) {
                    setPasswordCheckError(true);
                }
                return;
            }
            dispatch(signUpRequest(name, email, password));
        },
        [dispatch, name, email, password, passwordCheck],
    );

    return (
        <>
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
                    <InputError>
                        {passwordCheckError && <ErrorMessage message="비밀번호가 일치하지 않습니다." />}
                    </InputError>
                </InputWrapper>
                <CompleteBtn>완료</CompleteBtn>
                {signUpError && <ErrorMessage message="이미 존재하는 이메일입니다." />}
            </Form>
            {signUpLoading && <Loading />}
        </>
    );
};

const InputWrapper = styled(Inputwrapper)`
    justify-content: space-between;
`;

const InputError = styled.div`
    position: absolute;
    left: 120px;
    top: 50px;
`;

const Form = styled.form`
    /* border: 1px solid gray; */
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 0 30px;
`;

export default SignUpForm;
