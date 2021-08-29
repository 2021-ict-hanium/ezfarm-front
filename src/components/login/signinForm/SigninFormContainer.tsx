import { useCallback, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpModalOpen } from '../../../actions/modal';
import { logInRequest } from '../../../actions/user';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../redux/modules/reducer';
import SigninFormPresenter from './SigninFormPresenter';

const SigninFormContainer = () => {
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
        <SigninFormPresenter
            email={email}
            onChangeEmail={onChangeEmail}
            password={password}
            onChangePassword={onChangePassword}
            handleSignupBtn={handleSignupBtn}
            onSubmit={onSubmit}
            logInLoading={logInLoading}
            logInError={logInError}
        />
    );
};
export default SigninFormContainer;
