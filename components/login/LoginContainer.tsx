import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
    const router = useRouter();
    const { logInDone } = useSelector((state: RootState) => state.user);
    const { isSignUpModalVisible } = useSelector((state: RootState) => state.modal);

    useEffect(() => {
        if (logInDone || sessionStorage.getItem('accessToken')) {
            router.push('/');
        }
    }, [router, logInDone]);
    return <LoginPresenter isSignUpModalVisible={isSignUpModalVisible} />;
};

export default LoginContainer;
