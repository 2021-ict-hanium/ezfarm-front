import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../../../../actions/user';
import { RootState } from '../../../../reducers';
import SignupFormPresenter from './SignupFormPresenter';

const SignupFormContainer = () => {
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
            dispatch(signUpRequest({ name, email, password }));
        },
        [dispatch, name, email, password, passwordCheck],
    );
    return (
        <SignupFormPresenter
            name={name}
            onChangeName={onChangeName}
            nameError={nameError}
            email={email}
            onChangeEmail={onChangeEmail}
            emailError={emailError}
            password={password}
            onChangePassword={onChangePassword}
            passwordError={passwordError}
            passwordCheck={passwordCheck}
            onChangePasswordCheck={onChangePasswordCheck}
            passwordCheckError={passwordCheckError}
            signUpError={signUpError}
            signUpLoading={signUpLoading}
            onSubmit={onSubmit}
        />
    );
};
export default SignupFormContainer;
